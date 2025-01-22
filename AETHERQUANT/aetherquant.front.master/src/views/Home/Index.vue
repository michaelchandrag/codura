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
              <h2 class="ls-sm fw-bold text-white fs-35px mb-4">Decoding Market Chaos through <span
                  class="text-orange">Decentralized Intelligence</span></h2>
              <p class="w-100 text-white fw-normal fs-14px hero-desc ls-xs m-0">AetherQuant redefines predictive
                analytics via DEFAI—merging decentralized intelligence with blockchain’s immutability. Our platform
                empowers global data scientists to optimize financial forecasting securely and transparently</p>
              <div v-if="company.key_ca" class="col-lg-8 mt-5">
                <div class="input-group input-group-lg bg-white rounded-sm">
                  <input disabled :value="company.key_ca" class="form-control bg-transparent no-shadow fs-12px ls-xs">
                  <a @click.prevent="copyToClipboard(company.key_ca)"
                    class="input-group-text bg-orange text-white btn btn-sm fs-12px d-inline-flex align-items-center gap-2">
                    <img src="/assets/img/copy-white-sm.png" />
                    <span class="text-white">Copy CA</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-left" data-aos-delay="100">
            <div class="hero-img">
              <img src="/assets/img/hero-img.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-transparent pt-0">
    <div class="col-12 col-lg-10 m-auto">
      <div class="container section-title pb-4">
        <div class="col-lg-5 m-auto">
          <h6 class="text-orange fw-bold text-capitalize ls-xs">Our Core Feature</h6>
          <p class="text-white fw-normal fs-16px ls-xs">Revolutionary Tools That Power the Future of Decentralized
            Intelligence</p>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-sm h-100 border-orange shadow bg-transparent car-fade-top">
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
              <h5 class="text-white fw-100 text-capitalize ls-xs">Explore Our Powerful Demo and Live Analytics</h5>
            </div>
            <div class="container">
              <p class="text-white fw-300 fs-13px">Discover the magic behind our platform with model coding snapshots
                and real-time on-chain analytics. Dive into the performance dashboards for live insights and see how our
                cutting-edge technology powers seamless experiences</p>
              <div class="explore-item ps-3 pt-2 pb-3" data-aos="fade-right" data-aos-delay="100">
                <div class="d-flex gap-3 mb-1">
                  <i class="bi bi-check2-all text-orange"></i>
                  <p class="m-0 text-white fs-13px fw-300">Explore advanced liquidity strategies</p>
                </div>
                <div class="d-flex gap-3 mb-1">
                  <i class="bi bi-check2-all text-orange"></i>
                  <p class="m-0 text-white fs-13px fw-300">Decode cross-chain complexities with tailored guidance.</p>
                </div>
                <div class="d-flex gap-3 mb-1">
                  <i class="bi bi-check2-all text-orange"></i>
                  <p class="m-0 text-white fs-13px fw-300">Receive instant troubleshooting for seamless user experiences
                  </p>
                </div>
              </div>
              <p class="text-white fw-300 fs-13px">Step into the future of liquidity aggregation with Interlinc Protocol
                — where innovation meets sophistication.</p>
              <a
                class="btn btn-sm bg-orange d-inline-flex align-items-center rounded px-3 py-2 gap-1 text-white fs-13px"><span>Join
                  Beta Version</span><i class="bi bi-arrow-up-right"></i></a>
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
              <h5 class="text-white fw-100 text-capitalize ls-xs">Empowering Financial Intelligence with Advanced Use
                Cases</h5>
            </div>
            <div class="container">
              <p class="text-white fw-300 fs-13px">Unlock institutional-grade predictions, DeFi optimization,
                community-driven signals, and performance rewards to elevate your trading and investment strategies</p>
              <div class="empowering-item ps-3 pt-2 pb-3" data-aos="fade-left" data-aos-delay="100">
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">Institutional-Grade Predictions</div>
                    <p class="m-0 text-white fs-13px fw-300">On-chain financial intelligence for hedge funds and traders
                    </p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">DeFi Optimization</div>
                    <p class="m-0 text-white fs-13px fw-300">Hyper-accurate models for liquidity, farming, and risk
                      analysis</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">Community Signals</div>
                    <p class="m-0 text-white fs-13px fw-300">Tokenized incentives fuel user-driven financial insights
                    </p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">Performance Rewards</div>
                    <p class="m-0 text-white fs-13px fw-300">Earn through staking and deploying high-performing models
                    </p>
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
              <h5 class="text-white fw-100 text-capitalize ls-xs">Revolutionizing Finance with Cutting-Edge Key
                Differentiators</h5>
            </div>
            <div class="container">
              <p class="text-white fw-300 fs-13px">From zk-security to AI-powered blockchain fusion, experience
                trustless automation, enhanced prediction accuracy, and adaptive governance in the evolving world of
                decentralized finance</p>
              <div class="benefit-item ps-3 pt-2 pb-3" data-aos="fade-right" data-aos-delay="100">
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">zk-Security</div>
                    <p class="m-0 text-white fs-13px fw-300">zk-proofs ensure uncompromised data privacy</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">Smart Contract Automation</div>
                    <p class="m-0 text-white fs-13px fw-300">Trustless reward distribution via immutable contracts</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">AI x Blockchain Fusion</div>
                    <p class="m-0 text-white fs-13px fw-300">DEFAI enhances prediction accuracy and transparency</p>
                  </div>
                </div>
                <div class="d-flex gap-3 mb-2">
                  <i class="bi bi-check2-all text-orange"></i>
                  <div>
                    <div class="fw-500 fs-13px text-white ls-xs">DAO Evolution</div>
                    <p class="m-0 text-white fs-13px fw-300">Governance adapts to the decentralized financial landscape
                    </p>
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
      <div class="container py-5 has-bg-shape">
        <div class="section-title pb-4">
          <div class="col-lg-7 m-auto">
            <h5 class="text-white fw-bold text-capitalize ls-xs">Experience DEFAI Innovation</h5>
            <p class="text-white fw-normal fs-13px ls-xs">Curious to see OrbiFi in action? Sign up now to get early
              access to our demo version!</p>
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
