<script setup>
import { onMounted, ref, reactive } from 'vue'
import { copyToClipboard } from '@/controllers';

let prompText = ref('')
onMounted(() => {

})
let addressToCopy = ref('7nu8ZgCMWgpdSN75bVoMedLckf17Mv4oZ7j1Ce6tpump')
</script>

<template>
  <section id="hero" class="main-hero hero section bg-transparent first-section">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="col-12 col-lg-8 m-auto text-center has-bg-container">
        <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-40px">Revolutionizing Smart Contract Security with AI</h2>
          <p class="mt-3 w-100 text-white fw-normal fs-14px hero-desc">Our mission is to make blockchain ecosystems
            safer
            by providing accessible, reliable, and efficient smart contract security audits powered by cutting-edge AI
            technology. We aim to prevent exploits and promote trust in decentralized systems</p>
        </div>
        <!-- <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-40px">CA:</h2>
          <p class="mt-3 w-100 text-white fw-normal fs-24px hero-desc">{{addressToCopy}}</p>
          <div class="btn btn-lg bg-green py-1 px-3 rounded fs-24px 14px" @click="copyToClipboard(addressToCopy)"><b>Click Here to Copy CA!</b></div>
        </div> -->
        <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-40px">Get Started (BETA Version)</h2>
          <div class="row gy-4 justify-content-center" data-aos="fade-right" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="card rounded-sm feature-card h-100">
                <div class="card-body text-start">
                  <h6 class="text-white">1. Sign Up</h6>
                  <p class="text-light fw-normal fs-13px m-0">Create your account and connect your Web3 wallet.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card rounded-sm feature-card h-100">
                <div class="card-body text-start">
                  <h6 class="text-white">2. Run a Basic Scan through our AI chat box</h6>
                  <p class="text-light fw-normal fs-13px m-0">Test your smart contract for free.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card rounded-sm feature-card h-100">
                <div class="card-body text-start">
                  <h6 class="text-white">3. Unlock Advanced Features</h6>
                  <p class="text-light fw-normal fs-13px m-0">Stake your tokens for premium audits.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card rounded-sm feature-card h-100">
                <div class="card-body text-start">
                  <h6 class="text-white">4. Receive Security Reports</h6>
                  <p class="text-light fw-normal fs-13px m-0">Get a comprehensive security score and fix recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-prompt mb-4">
          <div class="col-12 col-lg-8 m-auto">
            <form>
              <div class="input-group p-2 rounded-sm">
                <input required v-model="prompText" class="form-control form-control-sm text-white fs-13px bg-transparent"
                  placeholder="Type your Prompt" />
                <router-link :to="{ name: 'ai', query:{text: prompText} }"
                  class="input-group-text btn btn-sm bg-green rounded-sm text-white fs-13px px-3 d-inline-flex align-items-center">Start
                  with AI</router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="pt-3">
          <router-link :to="{ name: 'feature' }"
            class="btn bg-transparent border rounded text-white fs-13px ls-xs hero-action d-inline-flex gap-2 align-items-center">
            <span>Learn More</span>
            <i class="bi bi-chevron-down"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
