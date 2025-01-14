<script setup>
import { onMounted, ref, reactive, watch } from 'vue'
import { copyToClipboard } from '@/controllers';

let isSending = ref(false);
let messages = ref([
  { role: 'system', content: `Codura is your AI-powered coding assistant, here to help you write, optimize, and debug code effortlessly. Whether you're building from scratch or refining your project, just type your prompt and watch Codura turn your ideas into reality` }
]);
onMounted(() => {

})
let addressToCopy = ref('7nu8ZgCMWgpdSN75bVoMedLckf17Mv4oZ7j1Ce6tpump')
</script>

<template>
  <section id="hero" class="main-hero hero section bg-transparent first-section pb-2">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 align-items-center justify-content-between">
        <div class="col-12 col-lg-6">
          <div class="hero-text mb-5">
            <h2 class="ls-sm fw-bold text-white fs-50px">AI Smart Contract Code Optimizer</h2>
            <p class="mt-3 w-100 text-white fw-normal ls-xs fs-16px hero-desc">Boost Security, Efficiency, and
              Performance of
              Smart Contracts with Decentralized AI-Powered Insights</p>
          </div>
          <div class="hero-prompt">
            <div class="input-group p-2 rounded-sm bg-white">
              <div class="form-control form-control-sm fs-13px bg-transparent border-0 ls-sm">9kEcnFj9vwjUkjdsL89fGhKloP76qseTuv7</div>
              <a
                class="input-group-text btn btn-sm bg-green rounded-sm text-white fs-13px px-3 d-inline-flex align-items-center gap-2">
                <i class="bi bi-copy"></i>
                <span>Copy CA</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="card rounded-sm ai-card h-100">
            <div id="ai-message-body" ref="chatbox" class="is-prompt card-body text-start px-2 py-3">
              <div v-for="msg in messages" :class="{ 'is-me': msg.role == 'user' }" class="ai-message-item d-flex mb-1">
                <p class="m-0 text-white fs-12px ls-xs ws-100 bubble py-2 px-3 rounded-sm full fw-300">{{ msg.content }}</p>
              </div>
            </div>
            <div id="ai-message-footer" class="card-footer">
              <form @submit.prevent="sendMessage">
                <div class="input-group bg-transparent">
                  <input v-model="chat" required class="form-control form-control-sm fs-12px text-white bg-transparent fw-200"
                    placeholder="Start Typing your prompt ...">
                  <button type="submit" :disabled="isSending" :class="{'disabled' : isSending}"
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
  <section class="section bg-transparent">
    <div class="container section-title pb-2 text-start">
      <h3 class="text-white text-capitalize ls-sm">How it Works?</h3>
    </div>
    <div class="container">
      <div class="why-list mt-2">
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs">
            <strong>Code Submission</strong>: Users submit their smart contract code either by direct input or file
            upload.
          </p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>AI-Powered Analysis</strong> The AI engine performs
            a comprehensive audit, detecting gas inefficiencies, security risks, and deviations from best practices.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Optimization Insights</strong> The system generates
            detailed, actionable insights accompanied by AI-suggested code refinements.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Decentralized Review</strong> Optional peer
            validation allows the development community to verify the AI findings, promoting transparency and trust.</p>
        </div>
        <div class="d-flex align-items-start gap-3 mb-2">
          <i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i>
          <p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Deployment-Ready Output</strong> After implementing
            the enhancements, the optimized smart contract is exportable and prepared for secure on-chain deployment.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
