<script setup>
import { onMounted, ref, reactive } from 'vue'
import { copyToClipboard } from '@/controllers';

let prompText = ref('')
onMounted(() => {

})
let addressToCopy = ref('7nu8ZgCMWgpdSN75bVoMedLckf17Mv4oZ7j1Ce6tpump')
</script>

<template>
  <section class="main-hero hero section bg-transparent first-section d-block">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container position-relative text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-50px">Oracium: AI-Powered Oracle for Decentralized Governance Insights
          </h2>
          <p class="w-100 text-white fw-normal fs-15px hero-desc ls-xs">Oracium is an AI-powered oracle service that
            analyzes on-chain data to provide real-time insights for decentralized governance. It aids organizations in
            proposal evaluation, voter behavior analysis, and risk assessment, enhancing transparency and
            decision-making
            efficiency.</p>
        </div>
        <div class="mt-2">
          <router-link :to="{ name: 'feature' }"
            class="btn btn-try border-0 text-white fs-13px ls-xs hero-action d-inline-flex px-3 py-2 align-items-center">
            <span>Try it for Free</span>
          </router-link>
        </div>
      </div>
      <div class="container bg-transparent">
        <div class="preview-img">
          <img src="/assets/img/preview.png" />
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-transparent pb-2">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container section-title pb-4">
        <h3 class="text-capitalize ls-xs text-orange ls-xs">About Oracium</h3>
        <p class="text-light fw-normal fs-14px ls-xs">Oracium (AI Governance Oracle) is a decentralized, AI-powered
          oracle
          designed to enhance decision-making for DAOs and decentralized protocols. It provides on-chain governance
          intelligence by analyzing historical voting patterns, proposal effectiveness, and market sentiment, enabling
          more informed governance decisions.</p>
      </div>
    </div>
  </section>
  <section class="section bg-transparent">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container section-title pb-4">
        <h3 class="text-orange text-capitalize ls-xs">Our Core Features</h3>
        <p class="text-light fw-normal fs-14px ls-xs">Empowering Decentralized Governance with Advanced Analytics and
          Real-Time Insights</p>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/aggregation.png" />
                </div>
                <h6 class="text-white">Data Aggregation</h6>
                <p class="text-light fw-normal fs-13px m-0">Collects on-chain governance data, historical voting
                  patterns, and external market trends.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-left" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/analysis.png" />
                </div>
                <h6 class="text-white">AI Analysis Layer</h6>
                <p class="text-light fw-normal fs-13px m-0">Uses advanced AI models to assess proposal effectiveness,
                  governance behavior, and voter sentiment.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-start">
                <div class="feature-icon mb-4">
                  <img src="/assets/img/decentralized.png" />
                </div>
                <h6 class="text-white">Decentralized Oracle Layer</h6>
                <p class="text-light fw-normal fs-13px m-0">Delivers analyzed data to DAOs through a decentralized
                  network for unbiased insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
