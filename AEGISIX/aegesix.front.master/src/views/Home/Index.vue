<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList, potentialList, keyDifferentList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

const try_request = reactive({ email: '' })
onMounted(() => {

})

const sendRequestTry = () => {
  showAlert({ type: 'success', title: 'Thanks You!', text: 'Information has been send successfully.' });
}
</script>

<template>
  <section class="main-hero hero section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container position-relative text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7">
            <div class="hero-text text-start">
              <h2 class="ls-sm fw-bold text-dark fs-30px mb-4">Parametrically Insuring DeFi's Future with Autonomous
                Intelligence.</h2>
              <p class="w-100 text-dark fw-normal fs-14px hero-desc ls-xs m-0">Empowering the DeFi ecosystem with
                cutting-edge AI and blockchain technology to deliver real-time, adaptive risk management solutions that
                safeguard liquidity, secure capital, and optimize protocol integrity for a more resilient financial
                future</p>
              <div v-if="company.key_ca" class="col-lg-8 mt-5">
                <div class="input-group input-group-lg bg-white rounded-sm">
                  <input disabled :value="company.key_ca" class="form-control bg-transparent no-shadow fs-12px ls-xs">
                  <a @click.prevent="copyToClipboard(company.key_ca)"
                    class="input-group-text bg-dark text-white btn btn-sm fs-12px d-inline-flex align-items-center gap-2">
                    <i class="bi bi-copy"></i>
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
      <div class="container section-title">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="about-img">
              <img src="/assets/img/about-img.gif" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="about-info text-start">
              <span class="badge text-dark bg-light py-2 px-3 rounded mb-4">About Us</span>
              <h6 class="text-dark fw-bold text-capitalize ls-xs">AI-powered, adaptive risk management for DeFi.</h6>
              <p class="text-dark fw-normal fs-13px ls-xs">Aegisix redefines decentralized risk management by converging
                advanced AI algorithms with trustless blockchain infrastructure. Our protocol empowers users with
                dynamic,
                real-time, and adaptive coverage mechanisms that mitigate financial uncertainties across an evolving
                DeFi
                ecosystem. By leveraging predictive analytics and machine learning, Aegisix secures capital, safeguards
                liquidity, and optimizes protocol integrity with precision.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-transparent pt-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="col-lg-8 m-auto">
          <h5 class="text-dark fw-bold text-capitalize ls-xs">FEATURES</h5>
          <p class="text-dark fw-normal fs-13px">Advanced AI and blockchain-powered features delivering adaptive risk
            management, seamless claims, and cross-chain protection for a secure DeFi ecosystem</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-sm feature-card h-100">
              <div class="card-body text-center">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <h6 class="text-white fw-bold text-capitalize fs-14px mb-2">{{ feature.title }}</h6>
                <p class="text-light fw-300 fs-12px m-0">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-potential" class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="col-lg-8 m-auto">
          <h5 class="text-dark fw-bold text-capitalize ls-xs">POTENTIAL USECASE</h5>
          <p class="text-dark fw-normal fs-13px">Comprehensive AI-driven solutions to mitigate risks across protocols,
            trades, liquidity pools, wallets, and multi-chain operations</p>
        </div>
      </div>
      <div class="container">
        <div class="col-lg-9 m-auto">
          <div v-for="(potential, idp) in potentialList" :key="idp"
            class="potential-item d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="100">
            <div
              class="potential-badge bg-dark-lighter d-inline-flex align-items-center ws-5 justify-content-center rounded-sm hs-40px">
              <span class="badge fs-14px fw-bold">{{ idp + 1 }}</span>
            </div>
            <div class="potential-info ws-95 ps-3">
              <h6 class="text-dark fw-bold text-capitalize fs-14px mb-1">{{ potential.title }}</h6>
              <p class="text-dark fw-300 fs-12px m-0">{{ potential.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-different" class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="col-lg-8 m-auto">
          <h5 class="text-dark fw-bold text-capitalize ls-xs">KEY DIFFERENT</h5>
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
                <h6 class="text-dark fw-bold text-capitalize fs-14px mb-2">{{ different.title }}</h6>
                <p class="text-dark fw-300 fs-12px m-0">{{ different.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-try" class="section bg-transparent pb-5">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="card border-0 bg-dark rounded-md">
          <div class="card-body">
            <div class="section-title pb-4">
              <div class="col-lg-7 m-auto">
                <h5 class="text-white fw-bold text-capitalize ls-xs">TRY DEMO VERSION</h5>
                <p class="text-white fw-normal fs-13px">Sign up to experience the future of DeFi coverage. Enter your
                  email to access the beta dashboard of Aegisix. The demo is launching soon</p>
              </div>
            </div>
            <div class="col-12 col-lg-5 m-auto try-request">
              <form @submit.prevent="sendRequestTry()">
                <div class="input-group input-group-lg bg-white rounded-sm">
                  <input required type="email" v-model="try_request.email"
                    class="form-control bg-transparent no-shadow fs-12px" placeholder="Enter your email address">
                  <button type="submit" class="input-group-text text-white btn btn-sm fs-12px">Send Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
