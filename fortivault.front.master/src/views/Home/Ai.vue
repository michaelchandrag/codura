<script setup>
import { onMounted, ref, reactive } from 'vue'

let msgList = ref([
  { is_me: true, text: 'How does Fortivault ensure the security of my smart contracts?' },
  { is_me: false, text: 'Fortivault leverages advanced artificial intelligence algorithms and blockchain auditing tools to provide unparalleled security for your smart contracts. Our AI analyzes code vulnerabilities, detects potential exploits, and offers automated fixes, ensuring your contracts are robust and future-proof. With Fortivault, you can confidently protect your digital assets and focus on innovation' },
  { is_me: true, text: 'Can Fortivault integrate with my existing blockchain projects?' },
  { is_me: false, text: 'Absolutely! Fortivault is designed to seamlessly integrate with major blockchain platforms, including Ethereum, Solana, Binance Smart Chain, and more. Our flexible APIs and developer-f,riendly tools ensure a smooth onboarding process, so you can enhance the security of your projects without disrupting your workflow.' },
  { is_me: true, text: 'What makes Fortivault different from other smart contract tools?' },
  { is_me: false, text: `Fortivault stands out by combining state-of-the-art AI with industry-leading blockchain expertise. Unlike traditional tools, we don’t just identify vulnerabilities—we fix them for you in real-time. Plus, our continuous monitoring feature ensures your contracts remain secure even after deployment. With Fortivault, you're not just securing your contracts; you're securing your future.` },
  { is_me: true, text: 'How does Fortivault ensure the security of my smart contracts?' },
  { is_me: false, text: 'Fortivault leverages advanced artificial intelligence algorithms and blockchain auditing tools to provide unparalleled security for your smart contracts. Our AI analyzes code vulnerabilities, detects potential exploits, and offers automated fixes, ensuring your contracts are robust and future-proof. With Fortivault, you can confidently protect your digital assets and focus on innovation' },
  { is_me: true, text: 'How does Fortivault ensure the security of my smart contracts?' },
  { is_me: false, text: 'Absolutely! Fortivault is designed to seamlessly integrate with major blockchain platforms, including Ethereum, Solana, Binance Smart Chain, and more. Our flexible APIs and developer-friendly tools ensure a smooth onboarding process, so you can enhance the security of your projects without disrupting your workflow.' },
  { is_me: true, text: 'How does Fortivault ensure the security of my smart contracts?' },
  { is_me: false, text: `Absolutely! Fortivault is designed to seamlessly integrate with major blockchain platforms, including Ethereum, Solana, Binance Smart Chain, and more. Our flexible APIs and developer-friendly tools ensure a smooth onboarding process, so you can enhance the security of your projects without disrupting your workflow.` },
])

let historyList = ref([
  `Exploring Fortivault's Smart Contract Security`,
  `How Fortivault Protects My Assets`,
  `Making Blockchain Safer with Fortivault`,
  `Exploring Fortivault's Smart Contract Security`,
  `How Fortivault Protects My Assets`,
  `Making Blockchain Safer with Fortivault`,
  `Exploring Fortivault's Smart Contract Security`,
  `How Fortivault Protects My Assets`,
  `Making Blockchain Safer with Fortivault`,
  `Exploring Fortivault's Smart Contract Security`,
  `How Fortivault Protects My Assets`,
  `Making Blockchain Safer with Fortivault`,
])
onMounted(() => {

})
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
            <div id="ai-message-body" class="card-body text-start">
              <div v-for="ls in msgList" :class="{ 'is-me': ls.is_me }" class="ai-message-item d-flex mb-1">
                <p class="m-0 text-white fs-11px bubble py-2 px-3 rounded-sm">{{ ls.text }}</p>
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
              <a href="#" v-for="ls in historyList"
                class="ai-history-item d-flex mb-1 align-items-center justify-content-between py-2 px-3 rounded-sm">
                <p class="m-0 text-white fs-12px">{{ ls }}</p>
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
