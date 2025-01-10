<script setup>
import { onMounted, ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { msgDummy, historyDummy } from '@/models';

const route = useRoute();
const router = useRouter();
const queryText = ref(route.query.text);

let messages = ref(msgDummy)
let histories = ref(historyDummy)
const chatbox = ref(null);

onMounted(() => {
  removeQuery();
  scrollToBottom();
})
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
</script>

<template>
  <section class="section bg-transparent ai-section section-content">
    <div class="container">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-8">
          <div class="card rounded-sm ai-card h-100">
            <div id="ai-message-header" class="card-header">
              <h6 class="m-0 text-white">Conversation</h6>
            </div>
            <div id="ai-message-body" ref="chatbox" class="card-body text-start">
              <div v-for="msg in messages" :class="{ 'is-me': msg.is_me }" class="ai-message-item d-flex mb-1">
                <p class="m-0 text-white fs-11px bubble py-2 px-3 rounded-sm">{{ msg.text }}</p>
              </div>
            </div>
            <div id="ai-message-footer" class="card-footer">
              <form>
                <div class="input-group bg-transparent">
                  <input required class="form-control form-control-sm fs-12px text-white bg-transparent"
                    placeholder="Start typing .....">
                  <button type="submit" class="btn btn-sm text-white bg-transparent input-group-text">
                    <img src="/assets/img/send.png" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4" data-aos="fade-left" data-aos-delay="100">
          <div class="card rounded-sm ai-card h-100">
            <div id="ai-history-header" class="card-header">
              <h6 class="m-0 text-white">History</h6>
            </div>
            <div id="ai-history-body" class="card-body text-start">
              <a href="#" v-for="his in histories"
                class="ai-history-item d-flex mb-1 align-items-center justify-content-between py-2 px-3 rounded-sm">
                <p class="m-0 text-white fs-12px">{{ his }}</p>
                <i class="text-white bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
