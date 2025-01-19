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
  histories.value = [
    {
      key: "static-1",
      title: "Introduction to Quantis Node",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Introduction to Quantis Node." }
      ],
      isStatic: true,
      hasSent: false,
    },
    {
      key: "static-2",
      title: "Exploring Quantis Node’s Key Features",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Exploring Quantis Node’s Key Features." }
      ],
      isStatic: true,
      hasSent: false,
    },
    {
      key: "static-3",
      title: "Quantis Node vs Traditional Oracle Services",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Quantis Node vs Traditional Oracle Services." }

      ],
      isStatic: true,
      hasSent: false,
    },
    {
      key: "static-4",
      title: "Using Quantis Node Across Multiple Blockchains",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Using Quantis Node Across Multiple Blockchains." }

      ],
      isStatic: true,
      hasSent: false,
    },
    {
      key: "static-5",
      title: "Understanding Proposal Scoring in Quantis Node",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Understanding Proposal Scoring in Quantis Node." }

      ],
      isStatic: true,
      hasSent: false,
    },
    {
      key: "static-6",
      title: "Enhancing DAO Decision-Making with Quantis Node’s AI",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Enhancing DAO Decision-Making with Quantis Node’s AI." }

      ],
      isStatic: true,
      hasSent: false,
    },
    {
      key: "static-7",
      title: "Addressing Governance Risks Through Quantis Node",
      messages: [
        { role: "system", content: "Welcome! How can we assist you today?" },
        { role: "user", content: "Addressing Governance Risks Through Quantis Node." }

      ],
      isStatic: true,
      hasSent: false,
    },
    ...histories.value,
    ...store.getters.stateChatHistory,
  ];

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
  if (is_history.value === -1) {
    const newHistory = {
      key: `chat-${Date.now()}`,
      title: `Chat ${histories.value.length + 1}`,
      messages: [...messages.value],
    };
    await store.commit('addChatHistory', newHistory);
    histories.value.push(newHistory);
    is_history.value = histories.value.length - 1;
  } else {
    await updateChatHistory();
  }
};

const updateChatHistory = async () => {
  if (is_history.value >= 0) {
    histories.value[is_history.value].messages = [...messages.value];
    await store.commit('updateChatMessageHistory', {
      key: histories.value[is_history.value].key,
      messages: [...messages.value],
    });
  }
};

const selectHistory = async (key) => {
  const selectedHistory = histories.value[key];

  if (!selectedHistory || isSending.value) return;

  is_history.value = key;

  const filteredContents = [
    "Introduction to Quantis Node.",
    "Exploring Quantis Node’s Key Features.",
    "Quantis Node vs Traditional Oracle Services.",
    "Using Quantis Node Across Multiple Blockchains.",
    "Understanding Proposal Scoring in Quantis Node.",
    "Enhancing DAO Decision-Making with Quantis Node’s AI.",
    "Addressing Governance Risks Through Quantis Node."
  ];
  messages.value = selectedHistory.messages.filter(
    (msg) => !(msg.role === "user" && filteredContents.includes(msg.content))
  );


  if (selectedHistory.isStatic && !selectedHistory.hasSent) {
    const userMessage = selectedHistory.messages.find(msg => msg.role === "user");
    if (userMessage && userMessage.content) {
      chat.value = userMessage.content;
      selectedHistory.hasSent = true;
      await sendMessage();
    }
  }
};

const changeTitleHistory = async (key) => {
  const history = histories.value[key];
  if (history.isStatic) return; 

  history_change_title.index = key;
  history_change_title.title = histories.value[key].title;
  openModalTitle();
};
const openModalTitle = () => {
  modal_change_title.value.open();
};

const closeModalTitle = () => {
  modal_change_title.value.close();
};
const processChangeTitle = async () => {
  const index = history_change_title.index;
  
  if (index !== null && index >= 0) {
    histories.value[index].title = history_change_title.title;

    await store.commit('updateChatTitleHistory', {
      key: histories.value[index].key,
      title: history_change_title.title,
    });
  }

  closeModalTitle();
};

</script>

<template>
  <section class="section bg-transparent ai-section section-content">
    <div class="container">
      <div class="row gy-2 justify-content-center mt-1">
        <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
          <div class="card rounded-sm ai-card h-100 ai-font">
            <div id="ai-history-header" class="card-header d-flex justify-content-between align-items-center">
              <h6 class="m-0 text-white fw-400 ls-xs">History</h6>
            </div>

            <!-- BACKUP OLD CHAT HISTORY -->
            <!-- <div id="ai-history-body" class="card-body text-start">
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
            </div> -->
            <!-- end_card chat history -->

            <div id="ai-history-body" class="card-body text-start">
              <div 
                v-for="(his, idh) in histories" 
                :key="his.key" 
                class="ai-history-item d-flex mb-1 align-items-center justify-content-between py-1 px-2 rounded-sm"
              >
              <a 
                href="#" 
                @click.prevent="selectHistory(idh)" 
                class="ps-1 ws-75"
              >
                <p class="m-0 text-white fs-12px">{{ his.title }}</p>
              </a>

                <div class="d-inline-flex gap-1 ws-20">
                  <a 
                    v-if="!his.isStatic" 
                    href="#" 
                    @click.prevent="changeTitleHistory(idh)" 
                    class="btn btn-sm"
                  >
                    <i class="text-white bi bi-pencil"></i>
                  </a>
                  <a @click.prevent="selectHistory(idh)" href="#" class="btn btn-sm">
                    <i class="text-white bi bi-chevron-right"></i>
                  </a>
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
              <div 
                v-for="(msg, idx) in messages" 
                :key="`message-${idx}`" 
                :class="{ 'is-me': msg.role == 'user' }" 
                class="ai-message-item d-flex mb-1"
              >
                <div class="py-2 px-3">
                  <p :class="{ 'py-2 px-3': msg.role == 'user' }"
                    class="m-0 text-white fs-12px ls-xs ws-100 bubble rounded-sm full fw-300">{{ msg.content }}</p>
                </div>
              </div>
            </div>
            <div id="ai-message-footer" class="card-footer">
              <form @submit.prevent="sendMessage">
                <div class="input-group bg-transparent">
                  <p><span class="position-absolute top-50 start-0 translate-middle-y fs-16px ms-2" style="color:#FF8A43">+</span></p>
                  <input 
                    v-model="chat" 
                    required
                    class="form-control form-control-sm fs-16px text-white bg-transparent fw-300"
                    placeholder="Start typing ....."
                    style="text-indent: 20px;"
                  >
                  <button type="submit" :disabled="isSending" :class="{ 'disabled': isSending }"
                    class="btn btn-sm text-white bg-transparent input-group-text">
                    <span v-if="isSending" class="spinner-border spinner-border-sm text-secondary" role="status"></span>
                    <img v-else src="/assets/img/send.svg" />
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
