<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList, useCaseList, keyDifferentList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

let differen_option = ref('potential')
const try_request = reactive({ email: '' })
onMounted(() => {

})

const sendRequestTry = () => {
  showAlert({ type: 'success', title: 'Thanks You!', text: 'Information has been send successfully.' });
}

const changeDifferentOption = (option = '') => {
  differen_option.value = option;
}
</script>

<template>
  <section class="main-hero hero section bg-transparent pb-5">
    <div class="hero-bg-2">
      <img src="/assets/img/bg-hero.png" />
    </div>
    <div class="col-12 col-lg-8 m-auto">
      <div class="container position-relative text-center mb-4" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-text text-center">
          <div class="hero-animation mt-4">
            <img src="/assets/img/logo-animation.gif" />
            <img class="logo" src="/assets/img/interlinc-lg.png" />
          </div>
          <h2 class="ls-sm fw-bold text-white fs-30px mb-4">Seamless Liquidity Convergence, DEFAI Engineered</h2>
          <div class="col-lg-10 m-auto">
            <p class="w-100 text-white fw-300 fs-13px ls-xs hero-desc m-0">Interlinc Protocol is a cutting-edge DEFAI-based
              cross-chain liquidity orchestrator. Leveraging decentralized AI, Interlinc abstracts operational
              complexity across fragmented ecosystems, delivering streamlined liquidity pathways and trustless
              interoperability. With unparalleled algorithmic precision and security-first architecture, Interlinc is
              redefining the DeFi paradigm</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="company.key_ca" id="section-ca" class="section bg-transparent pb-5 pt-0" data-aos="fade-down" data-aos-delay="100">
    <div class="col-lg-5 m-auto">
      <div class="container position-relative text-center mb-5">
        <div class="input-group input-group-lg bg-white rounded-sm">
          <input disabled :value="company.key_ca" class="form-control bg-transparent no-shadow fs-12px fw-300 ls-xs">
          <a @click.prevent="copyToClipboard(company.key_ca)"
            class="input-group-text bg-app text-white btn btn-sm fs-12px d-inline-flex align-items-center gap-2">
            <i class="bi bi-copy"></i>
            <span class="fw-300">Copy CA</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-white-app">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="col-lg-8 m-auto">
          <h5 class="text-dark fw-bold text-uppercase ls-xs">KEY FEATURES</h5>
          <p class="text-dark fw-300 fs-14px">Unlock the Power of Innovation with Interlinc Protocol’s Core Features</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-6" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-md bg-white h-100 shadow">
              <div class="card-body text-start">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <h6 class="text-dark fw-500 text-capitalize fs-14px mb-2">{{ feature.title }}</h6>
                <p class="text-dark fs-12px m-0">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-usecase" class="section bg-transparent has-content-bg is-relative py-5">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-5">
        <div class="col-lg-8 m-auto">
          <h5 class="text-white fw-bold text-uppercase ls-xs">POTENTIAL USE CASES</h5>
          <p class="text-light fw-300 fs-14px">Revolutionizing DeFi Applications with Interlinc Protocol</p>
        </div>
      </div>
      <div class="container my-4 is-relative">
        <div v-for="(usecase, idu) in useCaseList" :key="idu" :class="{ 'row-reverse': usecase.position == 'left' }"
          class="usecase-row d-flex align-items-center pb-5 justify-content-between">
          <div :class="{ 'text-end': usecase.position == 'right' }" class="ws-45" :data-aos="usecase.position == 'right' ? 'fade-right' : 'fade-left'" data-aos-delay="100">
            <div :class="usecase.position" class="px-5 usecase-number is-relative">
              <span class="badge usecase-item rounded fs-18px fw-300">{{ idu + 1 }}</span>
            </div>
          </div>
          <div :class="{ 'case-line': idu == 0 }" class="usecase-space ws-10 text-center p-0">
            <span class="icon"><i class="bi bi-circle-fill"></i></span>
          </div>
          <div class="ws-45 p-0" :data-aos="usecase.position == 'right' ? 'fade-left' : 'fade-right'" data-aos-delay="100">
            <div class="usecase-item card rounded-sm">
              <div class="card-body text-start">
                <div v-if="usecase.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${usecase.icon}.png`" />
                </div>
                <div class="usecase-title text-white fs-12px ls-xs fw-500 mb-2">{{ usecase.title }}</div>
                <p class="usecase-desc text-light fw-300 fs-11px ls-xs m-0">{{ usecase.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-interactive" class="section bg-white-app">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="interactive-info text-start">
              <h5 class="fw-300 text-dark fw-300">Interactive AI Chatbox Feature</h5>
              <h6 class="text-dark fw-bold text-capitalize ls-xs">Engage directly with Interlinc’s DEFAI-powered chat
                agent to:</h6>
              <div class="py-2 px-3">
                <div class="d-flex gap-2 align-items-center">
                  <i class="bi bi-check2-all"></i>
                  <p class="text-dark fw-300 fs-13px m-0">Explore advanced liquidity strategies</p>
                </div>
                <div class="d-flex gap-2 align-items-center">
                  <i class="bi bi-check2-all"></i>
                  <p class="text-dark fw-300 fs-13px m-0">Decode cross-chain complexities with tailored guidance.</p>
                </div>
                <div class="d-flex gap-2 align-items-center">
                  <i class="bi bi-check2-all"></i>
                  <p class="text-dark fw-300 fs-13px m-0">Receive instant troubleshooting for seamless user experiences
                  </p>
                </div>
              </div>
              <p class="text-dark fw-300 fs-13px ls-xs">Step into the future of liquidity aggregation with Interlinc
                Protocol — where innovation meets sophistication.</p>
              <a class="btn btn-sm py-1 px-3 fs-13px text-white bg-dark-light rounded mt-4 actived-orange"><span
                  class="me-2">Explore
                  Now</span><i class="bi bi-arrow-up-right"></i></a>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="about-img">
              <img src="/assets/img/interactive.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-different" class="section bg-transparent has-content-bg is-relative py-5">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="row align-items-baseline justify-content-between">
          <div class="col-12 col-lg-5 text-start">
            <h5 class="text-white text-capitalize ls-xs">KEY DIFFERENTIATORS</h5>
            <p class="text-light fw-300 fs-14px">Elevate your tokenization experience with Noveris, where cutting-edge
              innovation meets trustless decentralization.</p>
            <div class="different-img mt-3">
              <img src="/assets/img/different.gif" />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row gy-4 justify-content-center">
              <div v-for="(different, idc) in keyDifferentList" :key="idc" class="col-lg-12" data-aos="fade-right"
                data-aos-delay="100">
                <div class="different-item card rounded-sm">
                  <div class="card-body text-start">
                    <div v-if="different.icon" class="feature-icon mb-4">
                      <img :src="`/assets/img/${different.icon}.png`" />
                    </div>
                    <div class="different-title text-white fs-13px ls-xs fw-500 mb-2">{{ different.title }}</div>
                    <p class="different-desc text-light fw-300 fs-12px ls-xs m-0">{{ different.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="different-shape">
      <img src="/assets/img/different-shape.png" />
    </div>
  </section>

  <section id="section-try" class="section bg-white-app">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container pt-5">
        <div class="section-title pb-4">
          <div class="col-lg-7 m-auto">
            <h5 class="text-dark fw-bold text-capitalize ls-xs">TRY DEMO VERSION</h5>
            <p class="text-dark fw-300 fs-14px">Be the first to experience Interlinc Protocol. Enter your email to
              access our forthcoming demo and join the liquidity revolution</p>
          </div>
        </div>
        <div class="col-12 col-lg-5 m-auto try-request">
          <form @submit.prevent="sendRequestTry()">
            <div class="input-group input-group-lg rounded-sm">
              <input required type="email" v-model="try_request.email"
                class="form-control bg-transparent no-shadow fs-12px text-white" placeholder="Enter your email address">
              <button type="submit" class="input-group-text bg-app text-white btn btn-sm fs-12px">Send Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>
