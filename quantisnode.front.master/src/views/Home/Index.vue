<script setup>
import { onMounted, ref, reactive, watch } from 'vue'
import { postMessage } from '@/controllers';
import store from '@/configs/store';
import { copyToClipboard } from '@/helpers';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const typingText = ref(null);


// let keyCA = ref('7nu8ZgCMWgpdSN75bVoMedLckf17Mv4oZ7j1Ce6tpump')

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
  <section id="hero" class="main-hero hero section bg-transparent first-section pb-2 d-flex align-items-center">
    <div class="container text-center" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div class="col-12 col-lg-8">
          <div class="hero-text mb-5">
            <h2 class="ls-sm fw-bold text-white fs-50px mb-2">The Future of DeFi, Powered</h2>
            <h2 class="ls-sm fw-bold text-white fs-50px">by <span ref="typingText" class="text-red">AI Insights</span></h2>
            <p class="mt-5 w-100 text-white fw-normal ls-xs fs-16px hero-desc">Harness the power of cutting-edge AI and the Solana blockchain to transform decentralized finance. Quantis Node delivers real-time, 
              data-driven insights, advanced automation tools, 
              and robust security features</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
