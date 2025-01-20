<script setup>
  import { onMounted, ref, reactive, watch } from 'vue'
  import { postMessage } from '@/controllers';
  import store from '@/configs/store';
  import { copyToClipboard } from '@/helpers';
  import { company } from '@/models';
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/TextPlugin";

  gsap.registerPlugin(TextPlugin);

  const typingText = ref(null);


  let keyCA = ref('7nu8ZgCMWgpdSN75bVoMedLckf17Mv4oZ7j1Ce6tpump')

  onMounted(() => {
    const textElement = typingText.value;

    gsap.fromTo(
      textElement,
      { 
        text: "" 
      },
      {
        text: "AI Insights",
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 1,
      }
    );
  })
</script>

<template>
  <section
    id="hero"
    class="main-hero hero section bg-transparent first-section d-flex align-items-center justify-content-center text-center vh-100 mt-5"
  >
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div class="col-12 col-lg-8 text-center">
          <div class="hero-text mb-5">
            <h2 class="ls-sm fw-bold text-white fs-36px mt-4 mb-2">The Future of DeFi, Powered</h2>
            <h2 class="ls-sm fw-bold text-white fs-36px">by <span ref="typingText" class="text-red">AI Insights</span></h2>
            <p class="mt-5 text-white text-center fw-normal ls-xs fs-16px hero-desc ">
              Harness the power of cutting-edge AI and the Solana blockchain to transform decentralized finance. Quantis Node delivers real-time,
              data-driven insights, advanced automation tools,
              and robust security features
            </p>
            <router-link class="fs-16px btn btn-danger" :to="{ name: 'ai' }">
             Getting Started
            </router-link>      
          </div>
          <div v-if="company.key_ca" class="copy-ca mb-5">
            <div class="col-12 col-lg-8 m-auto">
              <div class="input-group p-0 rounded-sm align-items-center justify-content-center custom-input-group">
                <div
                  class="form-control form-control-sm fs-13px ls-xs bg-transparent border-1 text-start ps-3 text-white">{{
                    company.key_ca }}</div>
                <a @click.prevent="copyToClipboard(company.key_ca)"
                  class="input-group-text btn btn-sm bg-white rounded-right rounded-sm text-app fw-bold fs-13px px-3 d-inline-flex align-items-center gap-2">
                  <i class="bi bi-copy"></i>
                  <span>Copy CA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>
<style scoped>
  .rounded-right {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .text-app {
    color: #5c1e20;

    &:hover {
      color: #111021;
    }
  }
  .btn-danger {
    background: #F21111!important;
    border-radius: 8px;
    padding:10px;
    letter-spacing: 1.5px;
    font-family:"Aldrich", serif;
  }
</style>

