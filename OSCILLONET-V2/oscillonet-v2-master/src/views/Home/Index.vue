<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { featureList } from '@/models'
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
    <video autoplay muted loop playsinline>
      <source src="/assets/video/oscillo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-if="company.key_ca" class="container key-ca">
      <div class="col-lg-6 m-auto">
        <div class="input-group input-group-lg bg-white rounded-sm">
          <input disabled :value="company.key_ca" class="form-control text-white bg-transparent no-shadow fs-14px ls-xs no-border">
          <a @click.prevent="copyToClipboard(company.key_ca)"
            class="input-group-text text-white btn btn-sm fs-14px ls-xs d-inline-flex align-items-center gap-2">
            <img src="/assets/img/copy-white-sm.png" />
            <span class="text-white">Copy CA</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-transparent pt-5">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-5">
        <div class="col-lg-5 m-auto">
          <h6 class="text-app fw-bold text-capitalize ls-xs">Our Core Feature</h6>
          <p class="text-white fw-normal fs-15px ls-xs">Revolutionary Tools That Power the Future of Decentralized
            Intelligence</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-sm h-100 shadow bg-transparent card-fade-top">
              <div class="card-body text-center">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <h6 class="text-white fw-normal text-capitalize ls-xs mb-2">{{ feature.title }}</h6>
                <div class="card-body-content text-white fs-12px ls-xs fw-300" v-html="feature.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-explore" class="section bg-transparent pb-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="container section-title text-start pb-0">
              <h5 class="text-white fw-100 text-capitalize ls-xs">OscilloNet in Action: Technology That Shapes the
                Future</h5>
            </div>
            <div class="container">
              <p class="text-white fw-300 fs-13px ls-xs">Experience the power of adaptive fees, AI-driven liquidity, and
                seamless cross-chain integration through immersive demos</p>
              <div class="explore-item ps-3 pt-2 pb-3" data-aos="fade-right" data-aos-delay="100">
                <div class="d-flex gap-3 mb-1">
                  <i class="bi bi-check2-all text-app"></i>
                  <p class="m-0 text-white fs-13px fw-200 ls-xs">Explore advanced liquidity strategies</p>
                </div>
                <div class="d-flex gap-3 mb-1">
                  <i class="bi bi-check2-all text-app"></i>
                  <p class="m-0 text-white fs-13px fw-200 ls-xs">Decode cross-chain complexities with tailored guidance.
                  </p>
                </div>
                <div class="d-flex gap-3 mb-1">
                  <i class="bi bi-check2-all text-app"></i>
                  <p class="m-0 text-white fs-13px fw-200 ls-xs">Receive instant troubleshooting for seamless user
                    experiences
                  </p>
                </div>
              </div>
              <p class="text-white fw-300 fs-13px ls-xs">Dive into the groundbreaking features that redefine efficiency,
                scalability, and innovation in decentralized finance</p>
              <router-link :to="{ name: 'ai' }"
                class="custom-button btn btn-sm d-inline-flex align-items-center rounded px-3 py-2 gap-1 text-white fs-13px"><span>Join
                  Beta Version</span><i class="bi bi-arrow-up-right"></i></router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="explore-img">
              <img src="/assets/img/explore.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-empowering" class="section bg-transparent pt-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="empowering-img">
              <img src="/assets/img/empowering.gif" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="container section-title text-start pb-0">
              <h5 class="text-white fw-100 text-capitalize ls-xs">Empowering Every DeFi Player: Real Solutions for Real
                Opportunities</h5>
            </div>
            <div class="container">
              <p class="text-white fw-300 fs-13px ls-xs">Experience seamless liquidity and strategic opportunities
                tailored for every DeFi participant</p>
              <div class="empowering-item ps-3 pt-2 pb-3" data-aos="fade-left" data-aos-delay="100">
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-app"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Algorithmic Arbitrage</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">OscilloNet’s real-time fee recalibration enables
                      traders to exploit inter-market inefficiencies with algorithmic precision</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-app"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Institutional Yield Engineering</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">Institutional participants harness OscilloNet’s
                      AI-enhanced liquidity stratification for precision yield optimization and volatility control</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-app"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Inter-Chain Liquidity Arbitrage</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">OscilloNet unlocks unique opportunities across
                      blockchain networks, creating unparalleled liquidity pathways</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-app"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Enhanced Retail DeFi Experience</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">Retail traders gain streamlined access to advanced
                      DeFi trading tools with cost-efficient mechanisms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-benefit" class="section bg-transparent pt-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7">
            <div class="container section-title text-start pb-0">
              <h5 class="text-white fw-100 text-capitalize ls-xs">What Sets OscilloNet Apart: Innovation That Redefines
                DeFi</h5>
            </div>
            <div class="container">
              <p class="text-white fw-300 fs-13px ls-xs">Adaptive intelligence, seamless interoperability, and
                community-driven innovation—OscilloNet is the future of DeFi</p>
              <div class="benefit-item ps-3 pt-2 pb-3" data-aos="fade-right" data-aos-delay="100">
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Adaptive Market Intelligence</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">OscilloNet’s real-time dynamic fee mechanisms
                      redefine AMM operational efficiency, adjusting to live market conditions with precision</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Proprietary Liquidity Intelligence</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">AI-enhanced algorithms maximize liquidity depth and
                      reduce inefficiencies across token pairs, ensuring optimal market functioning</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Interoperability at Scale</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">OscilloNet’s seamless cross-chain capabilities
                      enhance liquidity access and asset composability across decentralized ecosystems</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-400 fs-13px text-white ls-xs">Decentralized Governance Framework</div>
                    <p class="m-0 text-white fs-13px fw-200 ls-xs">OscilloNet’s DAO empowers token holders to influence
                      protocol evolution, fostering a fully decentralized innovation environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="empowering-img">
              <img src="/assets/img/benefit.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-try" class="section bg-transparent pt-5 pb-4">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container py-5">
        <div class="section-title pb-4">
          <div class="col-lg-7 m-auto">
            <h5 class="text-white fw-bold text-capitalize ls-xs">Get Early Access</h5>
            <p class="text-white fw-normal fs-13px ls-xs">Be part of the OscilloNet revolution. Sign up now for
              exclusive beta demo access. Enter your email to join the forefront of DEFAI innovation</p>
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
  </section>

</template>
