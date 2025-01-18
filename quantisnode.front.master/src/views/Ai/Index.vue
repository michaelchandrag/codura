<script setup>
import { onMounted, ref, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { postMessage } from '@/controllers';
import store from '@/configs/store';
import VsModal from "@vuesimple/vs-modal";

const route = useRoute();
const router = useRouter();
const queryText = ref(route.query.text);

let messages = ref([
  { role: 'system', content: 'Hello! How can I assist you today?' }
]);
let histories = ref([]);
let is_history = ref(-1)
let history_change_title = reactive({ index: null, title: '' })
let modal_change_title = ref(null);
const chatbox = ref(null);
let chat = ref('');
let isSending = ref(false);

onMounted(async () => {
  //await store.commit('destroyChatHistory');
  const stateHistory = store.getters.stateChatHistory;
  if (stateHistory) {
    histories.value = stateHistory;
  }

  if (queryText.value) {
    chat.value = queryText.value;
    await sendMessage();
  }

  removeQuery();
  scrollToBottom();
});

watch(messages, () => {
  scrollToBottom();
});

const removeQuery = () => {
  if (Object.keys(route.query).length > 0) {
    router.replace({ path: route.path });
  }
};

const scrollToBottom = () => {
  if (chatbox.value) {
    chatbox.value.scrollTop = chatbox.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!chat.value.trim() || isSending.value) return;

  isSending.value = true;
  messages.value.push({ role: 'user', content: chat.value });

  const messagesForAPI = messages.value.slice(-2).map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  const result = await postMessage(messagesForAPI);
  if (result) {
    if (result.success) {
      messages.value.push({ role: 'assistant', content: result.respone });
      chat.value = '';
      saveChatHistory();
    }
    isSending.value = false;
  }
};

const saveChatHistory = async () => {
  if (is_history.value == -1) {
    const newHistory = {
      key: `chat-${Date.now()}`,
      title: `Chat ${histories.value.length + 1}`,
      messages: messages.value,
    };
    await store.commit('addChatHistory', newHistory);
    is_history.value = histories.value.length;
  } else {
    updateChatHistory();
  }
};

const updateChatHistory = async () => {
  await store.commit('updateChatMessageHistory', {
    key: is_history.value,
    messages: messages.value,
  });
}

const selectHistory = async (key) => {
  is_history.value = key;
  messages.value = histories.value[`${is_history.value}`].messages;
};
const changeTitleHistory = async (key) => {
  history_change_title.index = key;
  history_change_title.title = histories.value[key].title;
  openModalTitle();
};
const openModalTitle = (index) => {
  modal_change_title.value.open();
};

const closeModalTitle = () => {
  modal_change_title.value.close();
};
const processChangeTitle = async () => {
  await store.commit('updateChatTitleHistory', {
    key: history_change_title.index,
    title: history_change_title.title,
  });
  closeModalTitle();
}
</script>

<template>
  <section class="section bg-transparent ai-section section-content">
    <div class="container">
      <div class="row gy-4 justify-content-center mt-5">
        <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
          <div class="card rounded-sm ai-card h-100 ai-font">
            <div id="ai-history-header" class="card-header d-flex justify-content-between align-items-center">
              <h6 class="m-0 text-white fw-400 ls-xs">History</h6>
            </div>
            <div id="ai-history-body" class="card-body text-start">
              <div v-for="(his, idh) in histories" :key="his.key"
                class="ai-history-item d-flex mb-1 align-items-center justify-content-between py-1 px-2 rounded-sm">
                <a href="#" @click.prevent="selectHistory(idh)" class="ps-1 ws-75">
                  <p class="m-0 text-white fs-12px">{{ his.title }}</p>
                </a>
                <div class="d-inline-flex gap-1 ws-20">
                  <a href="#" @click.prevent="changeTitleHistory(idh)" class="btn btn-sm"><i
                      class="text-white bi bi-pencil"></i></a>
                  <a @click.prevent="selectHistory(idh)" href="#" class="btn btn-sm"><i
                      class="text-white bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card rounded-sm ai-card h-100">
            <div id="ai-message-header" class="card-header d-flex justify-content-between align-items-center">
              <h6 class="m-0 text-white fw-400 ls-xs">Ask Anything</h6>
            </div>
            <div id="ai-message-body" ref="chatbox" class="card-body text-start px-2 py-3">
              <div v-for="msg in messages" :class="{ 'is-me': msg.role == 'user' }" class="ai-message-item d-flex mb-1">
                <div class="py-2 px-3">
                  <p :class="{ 'py-2 px-3': msg.role == 'user' }"
                    class="m-0 text-white fs-12px ls-xs ws-100 bubble rounded-sm full fw-300">{{ msg.content }}</p>
                </div>
              </div>
            </div>
            <div id="ai-message-footer" class="card-footer">
              <form @submit.prevent="sendMessage">
                <div class="input-group bg-transparent">
                  <input v-model="chat" required
                    class="form-control form-control-sm fs-12px text-white bg-transparent fw-300"
                    placeholder="Start typing .....">
                  <button type="submit" :disabled="isSending" :class="{ 'disabled': isSending }"
                    class="btn btn-sm text-white bg-transparent input-group-text">
                    <span v-if="isSending" class="spinner-border spinner-border-sm text-secondary" role="status"></span>
                    <img v-else src="/assets/img/send.png" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <vs-modal size="s" ref="modal_change_title">
    <template #header>
      <h6 class="m-0">Ubah Riwayat</h6>
    </template>
    <div class="modal-body mt-2">
      <form @submit.prevent="processChangeTitle">
        <input class="form-control" placeholder="Input title" v-model="history_change_title.title">
        <div class="d-flex justify-content-end mt-3">
          <button type="submit" class="btn btn-sm btn-primary">Save Change</button>
        </div>
      </form>
    </div>
  </vs-modal>
</template>

<style scoped></style>
