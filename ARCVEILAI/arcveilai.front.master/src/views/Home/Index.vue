<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList, potentialList, keyDifferentList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})


onMounted(() => {

})
</script>

<template>
  <section class="main-hero hero section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container position-relative text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-baseline justify-content-between">
          <div class="col-lg-7">
            <div class="hero-text text-start">
              <h2 class="ls-sm fw-bold text-app fs-30px mb-4">Protecting Every Transaction, Powering Every Opportunity
              </h2>
              <p class="w-100 text-dark fw-normal fs-14px hero-desc ls-xs m-0">With <strong>Arcveil AI</strong>, you
                don’t just trade — you trade smarter, faster, and safer. We believe in democratizing financial security,
                ensuring that every transaction is optimized for your benefit, not the miners</p>
              <div v-if="company.key_ca" class="col-lg-8 mt-5">
                <div class="input-group input-group-lg bg-white rounded-sm">
                  <input disabled :value="company.key_ca" class="form-control bg-transparent no-shadow fs-12px ls-xs">
                  <a @click.prevent="copyToClipboard(company.key_ca)"
                    class="input-group-text bg-app-gradient border-0 text-white btn btn-sm fs-12px d-inline-flex align-items-center gap-2">
                    <img src="/assets/img/copy-white-sm.png" />
                    <span class="fw-300">Copy CA</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="hero-img">
              <img src="/assets/img/hero-img.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-about" class="section bg-transparent pt-0 pb-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-5">
          <div class="about-img">
            <img src="/assets/img/about-img.gif" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="container section-title text-start px-1 pb-0">
            <span class="badge text-white fs-13px ls-xs bg-app-gradient py-2 px-3 rounded mb-4">About Us</span>
            <h6 class="text-dark fw-bold text-capitalize ls-xs">Empowering Secure Transactions with AI-Driven
              Innovation</h6>
          </div>
          <div class="about-info text-start px-1">
            <p class="text-dark fw-normal fs-13px ls-xs">At <strong>Arcveil AI</strong>, we are on a mission to
              redefine trust and security in decentralized finance. Our cutting-edge MEV (Miner Extractable Value)
              Protection Suite employs advanced AI algorithms and privacy-first infrastructure to safeguard users from
              frontrunning, sandwich attacks, and other forms of MEV exploitation. By combining DeFi with
              next-generation AI capabilities, we aim to create a seamless and secure transaction experience for all
              users.
              With <strong>Arcveil AI</strong>, you don’t just trade — you trade smarter, faster, and safer. We
              believe in democratizing financial security, ensuring that every transaction is optimized for your
              benefit, not the miners’.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-transparent pt-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-5">
        <div class="col-lg-8 m-auto">
          <h5 class="text-app fw-500 text-capitalize ls-xs">FEATURES</h5>
          <p class="text-dark fw-normal fs-13px">Advanced AI and blockchain-powered features delivering adaptive risk
            management, seamless claims, and cross-chain protection for a secure DeFi ecosystem</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-sm feature-card shadow h-100 card-fade-top">
              <div class="card-body text-start">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <h6 class="text-app fw-bold text-capitalize fs-14px mb-2">{{ feature.title }}</h6>
                <p class="text-dark fs-12px m-0">{{ feature.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-potential" class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-5">
        <div class="col-lg-8 m-auto">
          <h5 class="text-app fw-500 text-capitalize ls-xs">POTENTIAL USECASE</h5>
          <p class="text-dark fw-normal fs-13px">Comprehensive AI-driven solutions to mitigate risks across protocols,
            trades, liquidity pools, wallets, and multi-chain operations</p>
        </div>
      </div>
      <div class="container">
        <div class="col-lg-9 m-auto">
          <div v-for="(potential, idp) in potentialList" :key="idp"
            class="potential-item mb-2" data-aos="fade-up" data-aos-delay="100">
            <div class="card shadow rounded-sm border-0">
              <div class="card-body d-flex align-items-stretch mb-3 pb-0">
                <div
                  class="potential-badge bg-app-gradient d-inline-flex align-items-center ws-5 justify-content-center rounded-sm hs-40px">
                  <span class="badge fs-16px fw-bold">{{ idp + 1 }}</span>
                </div>
                <div class="potential-info ws-95 ps-3">
                  <h6 class="text-app fw-bold text-capitalize fs-14px mb-2">{{ potential.title }}</h6>
                  <p class="text-dark fs-12px m-0">{{ potential.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-different" class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-5">
        <div class="col-lg-8 m-auto">
          <h5 class="text-app fw-500 text-capitalize ls-xs">KEY DIFFERENT</h5>
          <p class="text-dark fw-normal fs-13px">Innovative AI, real-time claims, adaptive coverage, and scalable
            architecture redefining DeFi risk management</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(different, idd) in keyDifferentList" :key="idd" class="col-lg-6" data-aos="fade-up"
            data-aos-delay="100">
            <div class="different-item card rounded-sm h-100 border-0 shadow">
              <div class="card-body text-start">
                <div v-if="different.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${different.icon}.png`" />
                </div>
                <h6 class="text-app fw-bold text-capitalize fs-14px mb-2">{{ different.title }}</h6>
                <p class="text-dark fs-13px m-0" v-html="different.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>
