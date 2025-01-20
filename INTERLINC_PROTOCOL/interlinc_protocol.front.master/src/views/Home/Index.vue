<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList, potentialList, keyDifferentList } from '@/models'
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
  <section class="main-hero hero section bg-transparent">
    <div class="hero-bg-2">
      <img src="/assets/img/bg-hero-2.png" />
    </div>
    <div class="col-12 col-lg-8 m-auto">
      <div class="container position-relative text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-text text-center">
          <div class="text-center fs-13px text-white mb-5 pt-5">Bridging DeFi with the Power of AI</div>
          <h2 class="ls-sm fw-bold text-white fs-30px mb-4">Connecting DeFi and AI to Simplify, Optimize, and Empower
            Financial Innovation for Everyone.</h2>
          <div class="col-lg-10 m-auto">
            <p class="w-100 text-white fw-normal fs-14px hero-desc m-0">Aurasis.Ai is a revolutionary platform
              designed to abstract the complexities of decentralized finance (DeFi) through a modular, AI-powered
              framework. Our mission is to enable businesses, developers, and users to seamlessly integrate DeFi
              functionalities into their ecosystems without needing specialized blockchain knowledge. Aurasis.Ai
              empowers
              innovation by simplifying the architecture of DeFi and unlocking its full potential for everyone.</p>
          </div>
          <div v-if="company.key_ca" class="col-lg-7 m-auto mt-5">
            <div class="input-group input-group-lg bg-white rounded-sm">
              <input disabled :value="company.key_ca" class="form-control bg-transparent no-shadow fs-12px ls-xs"
                placeholder="Enter your email address">
              <a @click.prevent="copyToClipboard(company.key_ca)"
                class="input-group-text bg-app text-white btn btn-sm fs-12px d-inline-flex align-items-center gap-2">
                <i class="bi bi-copy"></i>
                <span class="fw-300">Copy CA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="col-lg-8 m-auto">
          <h6 class="text-app fw-bold text-capitalize ls-xs">KEY FEATURES</h6>
          <p class="text-white fw-normal fs-16px">Unlock the Power of Innovation:</p>
          <p class="text-white fw-normal fs-16px">Transformative Features for Smarter DeFi</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-md feature-card h-100">
              <div class="card-body text-start">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <h6 class="text-white fw-500 text-capitalize fs-14px mb-3">{{ feature.title }}</h6>
                <div class="feature-info-list">
                  <div v-for="(desc, idd) in feature.description" :key="idd"
                    class="d-flex align-items-start gap-2 mb-2">
                    <img src="/assets/img/tick-circle.png" />
                    <p class="text-light fw-300 fs-12px m-0">{{ desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="has-content-bg">
    <section id="section-about" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container">
          <div class="card border-app bg-transparent rounded-md">
            <div class="card-body p-5">
              <h6 class="text-white fw-500 text-capitalize fs-14px mb-3">Interactive AI Assistant</h6>
              <div class="d-flex align-items-start gap-2 mb-2">
                <img src="/assets/img/tick-circle.png" />
                <p class="text-light fw-300 fs-12px m-0 mt-1">The website includes a live AI chat box to guide users,
                  answer
                  questions, and provide personalized recommendations</p>
              </div>
              <div class="d-flex align-items-start gap-2 mb-0">
                <img src="/assets/img/tick-circle.png" />
                <div class="sub-info-description mt-1">
                  <p class="text-light fw-300 fs-12px m-0 mb-2">Features include</p>
                  <ul class="decimal ps-3 m-0">
                    <li class="text-light fw-300 fs-12px mb-1">Guidance on integrating Aurasis.Ai modules</li>
                    <li class="text-light fw-300 fs-12px mb-1">Educational resources about DeFi and blockchain.</li>
                    <li class="text-light fw-300 fs-12px mb-0">Technical support for developers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-potential-different" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container section-title pb-4">
          <div class="col-lg-8 m-auto">
            <div class="different-option rounded p-2 d-inline-flex gap-1">
              <a @click.prevent="changeDifferentOption('potential')"
                :class="{ 'bg-app': differen_option == 'potential' }"
                class="btn btn-sm rounded text-white fs-12px py-2 px-3">Potential Use Cases</a>
              <a @click.prevent="changeDifferentOption()" :class="{ 'bg-app': !differen_option }"
                class="btn btn-sm rounded text-white fs-12px py-2 px-3">Key Differentiators</a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row gy-4 justify-content-start">
            <div v-for="(different, idd) in (differen_option == 'potential') ? potentialList : keyDifferentList"
              :key="idd" class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="different-item card rounded-sm h-100 border bg-transparent shadow">
                <div class="card-body text-start">
                  <div v-if="different.icon" class="feature-icon mb-4">
                    <img :src="`/assets/img/${different.icon}.png`" />
                  </div>
                  <div class="d-flex align-items-start gap-2">
                    <img src="/assets/img/tick-circle.png" />
                    <div class="different-info">
                      <h6 class="text-white fw-500 text-capitalize fs-14px mb-2">{{ different.title }}</h6>
                      <p class="text-white fw-300 fs-12px m-0">{{ different.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section id="section-try" class="section bg-transparent py-5">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container pt-5">
        <div class="section-title pb-4">
          <div class="col-lg-7 m-auto">
            <h5 class="text-white fw-bold text-capitalize ls-xs">TRY DEMO VERSION</h5>
            <p class="text-white fw-normal fs-13px">"Get Early Access": Users can sign up with their email address to
              request access to the demo version of Aurasis.Ai. The demo is currently under development and will be
              available soon.</p>
          </div>
        </div>
        <div class="col-12 col-lg-5 m-auto try-request">
          <form @submit.prevent="sendRequestTry()">
            <div class="input-group input-group-lg bg-white rounded-sm">
              <input required type="email" v-model="try_request.email"
                class="form-control bg-transparent no-shadow fs-12px" placeholder="Enter your email address">
              <button type="submit" class="input-group-text bg-app text-white btn btn-sm fs-12px">Send Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>
