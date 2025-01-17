<script setup>
import { onMounted, ref, reactive } from 'vue'
import { featureList, howItWorkList, whyChooseList, faqList } from '@/models'

onMounted(() => {

})
</script>

<template>
  <section class="main-hero hero section bg-transparent first-section d-block">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container position-relative text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-40px mb-0">Unleash the Future of DeFi with</h2>
          <h2 class="ls-sm fw-bold text-white fs-40px">AI-Powered Automation</h2>
          <p class="w-100 text-white fw-normal fs-15px hero-desc ls-xs">Unleash the Power of Automated DeFi Protocols
            with AI Synergy Implement autonomous, self-executing smart contract strategies and amplify portfolio
            efficiency through cutting-edge, AI-enhanced automation solutions.</p>
        </div>
      </div>
      <div class="container bg-transparent">
        <div class="preview-img">
          <img src="/assets/img/preview.png" />
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-transparent">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container section-title pb-4">
        <h6 class="text-app text-capitalize ls-xs">KEY FEATURES</h6>
        <p class="text-light fw-normal fs-16px ls-xs">Unlock the Power of Innovation:</p>
        <p class="text-light fw-normal fs-16px ls-xs">Transformative Features for
          Smarter DeFi</p>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-right"
            data-aos-delay="100">
            <div class="feature-item card rounded-sm feature-card h-100">
              <div class="card-body text-center">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <div class="text-white fs-13px ls-xs fw-bold mb-2">{{ feature.title }}</div>
                <p class="text-light fw-300 fs-12px ls-xs m-0">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <h6 class="text-app text-capitalize ls-xs">HOW IT WORKS?</h6>
        <p class="text-light fw-normal fs-16px ls-xs">Effortless Automation in Four Simple Steps:</p>
        <p class="text-light fw-normal fs-16px ls-xs">From Wallet Connection to Optimized Yield</p>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div v-for="(work, idw) in howItWorkList" :key="idw" class="col-lg-3" data-aos="fade-right"
            data-aos-delay="100">
            <div class="card rounded-sm feature-card h-100">
              <div class="card-body text-center">
                <div v-if="work.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${work.icon}.png`" />
                </div>
                <div class="text-white fs-13px ls-xs fw-bold mb-2">{{ work.title }}</div>
                <p class="text-light fw-300 fs-12px ls-xs m-0">{{ work.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="card bg-transparent">
          <div class="card-body text-start">
            <div class="row align-items-baseline justify-content-between">
              <div class="col-12 col-lg-4">
                <h6 class="text-app text-capitalize ls-xs">WHY CHOOSE US?</h6>
                <p class="text-light fw-normal fs-16px ls-xs">Discover Unmatched Reliability: Innovation, Security, and
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
                        <div class="text-white fs-13px ls-xs fw-bold mb-2">{{ choose.title }}</div>
                        <p class="text-light fw-300 fs-12px ls-xs m-0">{{ choose.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-transparent">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <h6 class="text-app text-capitalize ls-xs">FAQ</h6>
        <p class="text-light fw-normal text-uppercase fs-16px ls-xs">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <div class="container">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
