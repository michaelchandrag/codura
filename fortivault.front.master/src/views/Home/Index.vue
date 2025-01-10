<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {
  changeBg();
})

function changeBg() {
  const newBackgroundUrl = `url("/assets/img/hero.png")`;
  const styleRule = `#hero { background-image: ${newBackgroundUrl}; }`;
  let styleElement = document.querySelector('style[data-bg="hero-bg"]');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.setAttribute('data-bg', 'hero-bg');
    document.head.appendChild(styleElement);
  }
  if (!styleElement.innerHTML.includes(styleRule)) {
    styleElement.innerHTML = styleRule;
  }
}
</script>

<template>
  <section id="hero" class="main-hero hero section p-0">
    <div class="container position-relative">
      <div class="row gy-4 align-items-center justify-content-center">
        <div class="col-lg-6 content" data-aos="fade-right" data-aos-delay="100">
          <h2 class="ls-xs m-0">Empower Your</h2>
          <h2 class="ls-xs m-0">Conversations with</h2>
          <h2 class="ls-xs m-0 fw-normal">AI Excellence</h2>
          <p class="mt-3 w-100 text-white fw-normal fs-15px hero-desc">Whether it’s work or personal, our AI helps you speak,
            solve, and succeed effortlessly</p>
          <router-link :to="{ name: 'feature' }" class="btn main-bg text-white fs-13px ls-xs py-2 px-3 hero-action">Get Started</router-link>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
          <img src="/assets/img/hero-img.png" alt="codura">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
