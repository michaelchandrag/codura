<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList, howItWorkList, whyChooseList, faqList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

let hoverdLine = ref(-1)
onMounted(() => {

})

const changeHoveredLine = (index) => {
  hoverdLine.value = index;
}
</script>

<template>
  <section class="main-hero hero section">
    <video autoplay muted loop playsinline>
      <source src="/assets/video/orbifi.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-if="company.key_ca" class="container key-ca">
      <div class="col-lg-6 m-auto">
        <div class="input-group input-group-lg bg-white rounded-sm">
          <input disabled :value="company.key_ca"
            class="form-control text-white bg-transparent no-shadow fs-14px ls-xs no-border">
          <a @click.prevent="copyToClipboard(company.key_ca)"
            class="input-group-text text-white btn btn-sm fs-13px d-inline-flex align-items-center gap-2">
            <img src="/assets/img/copy-white-sm.png" />
            <span class="text-white">Copy CA</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="section-has-bg">
    <div class="section-bg">
      <img src="/assets/img/bg-section.png" />
    </div>
    <section id="section-about" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-7">
              <div class="container section-title text-start pb-2">
                <h2 class="text-white fw-bold text-capitalize ls-xs pb-4 mb-0">About Us</h2>
                <h5 class="text-white fw-bold text-capitalize ls-xs">Weaving the Future of Decentralized AI-Driven
                  Finance
                </h5>
              </div>
              <div class="container">
                <p class="text-white fw-200 fs-14px text-justify">At OrbiFi, we are pioneering the infrastructure for
                  the
                  next
                  wave of DeFi innovation by seamlessly integrating Artificial Intelligence into the decentralized
                  finance
                  ecosystem. As a robust AI-powered middleware, OrbiFi empowers developers, protocols, and institutions
                  with tools to build scalable, interoperable, and efficient DeFAI solutions. We aim to redefine
                  financial
                  autonomy by simplifying complex operations, enhancing security, and delivering unparalleled
                  intelligence
                  across decentralized networks.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="about-img">
                <img src="/assets/img/about.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-feature" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container mb-4">
          <div class="row align-items-start justify-content-between">
            <div class="col-lg-6">
              <div class="container section-title text-start pb-2">
                <h2 class="text-white fw-bold text-capitalize ls-xs pb-0 mb-0">PowerFull</h2>
                <h2 class="text-white fw-bold text-capitalize ls-xs pb-3 mb-0">Features</h2>
                <h6 class="text-white fw-normal text-capitalize ls-xs text-justify">Empowering DeFi Innovation with
                  AI-driven Frameworks,
                  Decentralized Computing, Cross-Chain Orchestration, and Developer-Friendly Tools</h6>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="feature-item card rounded-sm feature-card h-100 card-fade-top">
                <div class="card-body text-start">
                  <div class="feature-icon mb-4">
                    <img :src="`/assets/img/storage.png`" />
                  </div>
                  <div class="text-white fs-13px ls-xs fw-bold mb-0">Decentralized Compute Layer for AI</div>
                  <p class="text-white fw-300 fs-12px ls-xs m-0">Leveraging decentralized computing, OrbiFi democratizes
                    access to AI model training and execution by:</p>
                  <div class="card-list mt-3">
                    <div class="d-flex gap-2 align-items-start mb-2">
                      <img src="/assets/img/check-circle-light.png" />
                      <p class="m-0 text-white fs-12px fs-300 pt-1">Creating a distributed GPU/TPU network for executing
                        compute-heavy AI tasks</p>
                    </div>
                    <div class="d-flex gap-2 align-items-start mb-2">
                      <img src="/assets/img/check-circle-light.png" />
                      <p class="m-0 text-white fs-12px fs-300 pt-1">Incentivizing node operators with $ORBFAI, our
                        native
                        utility token</p>
                    </div>
                    <div class="d-flex gap-2 align-items-start mb-2">
                      <img src="/assets/img/check-circle-light.png" />
                      <p class="m-0 text-white fs-12px fs-300 pt-1">Enabling developers to deploy AI-driven financial
                        models with minimal overhead
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row gy-4 justify-content-center">
            <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-6" data-aos="fade-up"
              data-aos-delay="100">
              <div class="feature-item card rounded-sm feature-card h-100 card-fade-top">
                <div class="card-body text-start">
                  <div v-if="feature.icon" class="feature-icon mb-4">
                    <img :src="`/assets/img/${feature.icon}.png`" />
                  </div>
                  <div class="text-white fs-14px ls-xs fw-bold mb-0">{{ feature.title }}</div>
                  <p class="text-white fw-300 fs-13px ls-xs m-0">{{ feature.description }}</p>
                  <div v-if="feature.content.length" class="card-list mt-3">
                    <div v-for="content in feature.content" class="d-flex gap-2 align-items-start mb-2">
                      <img src="/assets/img/check-circle-light.png" />
                      <p class="m-0 text-white fs-12px fs-300 pt-1">{{ content }}</p>
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

  <div class="section-has-bg">
    <div class="section-bg">
      <img src="/assets/img/bg-section.png" />
    </div>
    <section id="section-work" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container section-title pb-4">
          <h6 class="text-light text-capitalize ls-xs">HOW IT WORKS?</h6>
          <p class="text-white fw-normal fs-16px ls-xs">Effortless Automation in Four Simple Steps:</p>
          <p class="text-white fw-normal fs-16px ls-xs">From Wallet Connection to Optimized Yield</p>
        </div>
        <div class="container">
          <div class="work-row row gy-4 justify-content-center">
            <div v-for="(work, idw) in howItWorkList" :key="idw" class="col-lg-3 p-0" data-aos="fade-right"
              data-aos-delay="100">
              <div class="work-item card rounded-sm h-100 bg-transparent border-0">
                <div @mouseover="changeHoveredLine(idw)" @mouseout="changeHoveredLine(-1)"
                  class="card-body text-center px-0">
                  <div v-if="work.icon" class="feature-icon">
                    <img :src="`/assets/img/${work.icon}.png`" />
                  </div>
                  <div class="work-line py-3">
                    <div :class="{ 'has-line': work.line }" class="icon">
                      <span class="is-icon">
                        <i v-if="idw == hoverdLine" class="bi bi-circle-fill text-dark fs-14px"></i>
                        <img v-else src="/assets/img/circle-work.png"/>
                      </span>
                    </div>
                  </div>
                  <div class="px-3">
                    <div class="text-white fs-14px ls-xs fw-bold mb-2">{{ work.title }}</div>
                    <p class="text-white fw-300 fs-13px ls-xs m-0">{{ work.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-choose" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container section-title pb-4">
          <div class="row align-items-baseline justify-content-between">
            <div class="col-12 col-lg-3 text-start">
              <h2 class="text-light text-capitalize ls-xs">WHY CHOOSE US?</h2>
              <p class="text-white fw-normal fs-16px ls-xs">Discover Unmatched Reliability: Innovation, Security,
                and
                Simplicity for Every DeFi User</p>
            </div>
            <div class="col-12 col-lg-6">
              <div class="row gy-4 justify-content-center">
                <div v-for="(choose, idc) in whyChooseList" :key="idc" class="col-lg-12" data-aos="fade-right"
                  data-aos-delay="100">
                  <div class="why-choose-item card rounded-sm feature-card">
                    <div class="card-body text-start">
                      <div v-if="choose.icon" class="feature-icon mb-4">
                        <img :src="`/assets/img/${choose.icon}.png`" />
                      </div>
                      <div class="text-white fs-14px ls-xs fw-bold mb-2">{{ choose.title }}</div>
                      <p class="text-white fw-300 fs-13px ls-xs m-0">{{ choose.description }}</p>
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
  <section id="section-faq" class="section bg-transparent">
    <div class="col-12 col-lg-6 m-auto">
      <div class="container section-title pb-4">
        <h6 class="text-light text-capitalize ls-xs">FAQ</h6>
        <p class="text-white fw-normal text-uppercase fs-16px ls-xs">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <div class="container">
        <div class="accordion" id="accordionFaq">
          <div v-for="(faq, idfq) in faqList" :key="idfq" class="accordion-item mb-2 rounded-sm">
            <h2 class="accordion-header rounded-sm border-0" :id="`headingFaq${idfq}`">
              <button class="collapsed accordion-button rounded-sm border-0 text-white fs-15px ls-xs py-3" type="button"
                data-bs-toggle="collapse" :data-bs-target="`#collapseFaq${idfq}`" aria-expanded="false"
                :aria-controls="`collapseFaq${idfq}`">{{ faq.title }}</button>
            </h2>
            <div :id="`collapseFaq${idfq}`" class="accordion-collapse collapse" :aria-labelledby="`headingFaq${idfq}`"
              data-bs-parent="#accordionFaq">
              <div class="accordion-body text-white fs-13px ls-xs fw-300 pt-0" v-html="faq.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
