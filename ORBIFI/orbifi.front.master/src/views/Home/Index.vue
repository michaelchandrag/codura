<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList, useCaseList, keyDifferentList } from '@/models'
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
  <section class="main-hero hero section">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container position-relative text-center mb-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7" data-aos="fade-right" data-aos-delay="100">
            <div class="hero-text text-start">
              <h2 class="ls-sm fw-bold text-white fs-30px mb-4">Weaving the Future of Decentralized AI-Driven Finance
              </h2>
              <p class="w-100 text-white fw-normal fs-14px hero-desc ls-xs m-0">Empowering DeFi with AI-driven tools and
                infrastructure, OrbiFi simplifies complexity, enhances security, and enables intelligent, scalable, and
                interoperable financial solutions.</p>
              <div v-if="company.key_ca" class="col-lg-8 mt-5">
                <div class="input-group input-group-lg bg-white rounded-sm">
                  <input disabled :value="company.key_ca" class="form-control bg-transparent no-shadow fs-12px ls-xs">
                  <a @click.prevent="copyToClipboard(company.key_ca)"
                    class="input-group-text bg-light text-white fw-bold btn btn-sm fs-12px d-inline-flex align-items-center gap-2">
                    <img src="/assets/img/copy-dark-sm.png" />
                    <span class="text-dark">Copy CA</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-left" data-aos-delay="100">
            <div class="hero-img">
              <img src="/assets/img/hero-img.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-about" class="section bg-white-lighter mt-5 pt-0 pb-0 border-bottom">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-4">
            <div class="about-img">
              <img src="/assets/img/about-img.png" />
            </div>
          </div>
          <div class="col-lg-8">
            <div class="container section-title text-start pb-2">
              <span class="badge text-white fs-13px ls-xs fw-300 bg-orange py-2 px-3 rounded-sm mb-4">About Us</span>
              <h5 class="text-dark fw-bold text-capitalize ls-xs">Revolutionizing DeFi with AI-Powered Intelligence
              </h5>
            </div>
            <div class="container">
              <p class="text-dark fw-normal fs-13px ls-xs">At OrbiFi, we are pioneering the infrastructure for the next
                wave of DeFi innovation by seamlessly integrating Artificial Intelligence into the decentralized finance
                ecosystem. As a robust AI-powered middleware, OrbiFi empowers developers, protocols, and institutions
                with tools to build scalable, interoperable, and efficient DeFAI solutions. We aim to redefine financial
                autonomy by simplifying complex operations, enhancing security, and delivering unparalleled intelligence
                across decentralized networks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-white-light">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="feature-img">
              <img src="/assets/img/feature-img.gif" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="container section-title text-start">
              <h5 class="text-dark fw-bold text-capitalize ls-xs mb-2">Look into Our <span class="text-app">Core</span>
                Feature</h5>
              <p class="text-dark fw-normal fs-13px ls-xs">Empowering DeFi Innovation with AI-driven Frameworks,
                Decentralized Computing, Cross-Chain Orchestration, and Developer-Friendly Tools</p>
            </div>
            <div class="container">
              <div class="accordion accordion-light" id="accordionFeature">
                <div v-for="(feature, idf) in featureList" :key="idf" class="accordion-item mb-2 rounded-sm border" data-aos="fade-up" data-aos-delay="100">
                  <h2 class="accordion-header rounded-sm border-0" :id="`headingFeature${idf}`">
                    <button class="collapsed accordion-button rounded-sm border-0 text-dark fw-bold fs-14px ls-xs pb-3"
                      type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseFeature${idf}`"
                      aria-expanded="false" :aria-controls="`collapseFeature${idf}`">{{ feature.title }}</button>
                  </h2>
                  <div :id="`collapseFeature${idf}`" class="accordion-collapse collapse"
                    :aria-labelledby="`headingFeature${idf}`" data-bs-parent="#accordionFeature">
                    <div class="accordion-body text-dark fs-13px ls-xs fw-300 pt-0" v-html="feature.content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-usecase" class="section bg-transparent pt-5">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="row align-items-start justify-content-between">
          <div class="col-lg-5">
            <div class="container section-title text-start">
              <h5 class="text-white fw-bold text-capitalize ls-xs mb-2">Potential Use Cases</h5>
              <p class="text-white fw-normal fs-13px ls-xs">Transforming DeFi with AI-Driven Automation, Treasury Optimization, Risk Mitigation, and Seamless Compliance Solutions</p>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="container">
              <div class="accordion accordion-dark" id="accordionUseCase">
                <div v-for="(usecase, idu) in useCaseList" :key="idu" class="accordion-item mb-2 rounded-sm border" data-aos="fade-down" data-aos-delay="100">
                  <h2 class="accordion-header rounded-sm border-0" :id="`headingUseCase${idu}`">
                    <button class="collapsed accordion-button rounded-sm border-0 text-white fw-bold fs-14px ls-xs pb-3"
                      type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseUseCase${idu}`"
                      aria-expanded="false" :aria-controls="`collapseUseCase${idu}`">{{ usecase.title }}</button>
                  </h2>
                  <div :id="`collapseUseCase${idu}`" class="accordion-collapse collapse"
                    :aria-labelledby="`headingUseCase${idu}`" data-bs-parent="#accordionUseCase">
                    <div class="accordion-body text-white fs-13px ls-xs fw-300 pt-0" v-html="usecase.content"></div>
                  </div>
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
      <div class="container section-title pb-4">
        <div class="col-lg-7 m-auto">
          <h5 class="text-white fw-bold text-capitalize ls-xs">Key Differentiators</h5>
          <p class="text-white fw-normal fs-13px ls-xs">AI-native design, scalable interoperability, community governance, and developer-centric tools for unmatched DeFi innovation</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(different, idd) in keyDifferentList" :key="idd" class="col-lg-6" data-aos="fade-up"
            data-aos-delay="100">
            <div class="different-item card rounded-sm h-100 border shadow bg-app-gradient">
              <div class="card-body text-start has-bg-particles">
                <div v-if="different.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${different.icon}.png`" />
                </div>
                <h6 class="text-white fw-bold text-capitalize ls-xs mb-3">{{ different.title }}</h6>
                <div class="card-body-content text-white fs-12px ls-xs fw-normal" v-html="different.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-try" class="section bg-transparent pt-5 pb-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container pt-4">
        <div class="card border-0 bg-dark rounded-md">
          <div class="card-body">
            <div class="section-title pb-4">
              <div class="col-lg-7 m-auto">
                <h5 class="text-white fw-bold text-capitalize ls-xs">Try the Demo Version</h5>
                <p class="text-white fw-normal fs-13px ls-xs">Curious to see OrbiFi in action? Sign up now to get early access to our demo version!</p>
              </div>
            </div>
            <div class="col-12 col-lg-5 m-auto try-request">
              <form @submit.prevent="sendRequestTry()">
                <div class="input-group input-group-lg bg-white rounded-sm">
                  <input required type="email" v-model="try_request.email"
                    class="form-control bg-transparent no-shadow fs-12px" placeholder="Enter your email address">
                  <button type="submit" class="input-group-text text-white btn btn-sm fs-12px">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
