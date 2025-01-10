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
  <section id="hero" class="second-hero hero section">
    <div class="container position-relative">
      <div class="row gy-4 align-items-center justify-content-center">
        <div class="col-lg-6 content" data-aos="fade-right" data-aos-delay="100">
          <h2 class="ls-xs m-0">Empower Your</h2>
          <h2 class="ls-xs m-0">Conversations with</h2>
          <h2 class="ls-xs m-0 fw-normal">AI Excellence</h2>
          <p class="mt-3 w-100 text-white fw-normal fs-15px hero-desc">Whether it’s work or personal, our AI helps you speak,
            solve, and succeed effortlessly</p>
            <router-link :to="{ name: 'home' }" class="btn main-bg text-white fs-13px ls-xs py-2 px-3 hero-action">Get Started</router-link>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
          <img src="/assets/img/hero-img.png" alt="codura">
        </div>
      </div>
    </div>
  </section>
  <div class="section-body">
    <section class="section">
      <div class="container section-title">
        <h3 class="text-white text-capitalize ls-xs">Key Features</h3>
        <p class="text-semi-white fw-normal fs-15px">Discover how Codura transforms your daily tasks with intelligent
          assistance</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 align-items-center justify-content-center">
          <div class="col-lg-4">
            <img src="/assets/img/feature-img.png" alt="codura-feature">
          </div>
          <div class="col-lg-8 content">
            <div class="mb-4">
              <h6 class="text-white">Simplify Complex Tasks with Intelligent Assistance</h6>
              <p class="text-lighter fw-normal fs-13px">Codura streamlines your workflow by understanding and managing
                even the most challenging tasks, giving you smart, efficient solutions that save you time and energy.
              </p>
            </div>
            <div class="mb-4">
              <h6 class="text-white">Build Stronger Connections Through Personalized Interactions</h6>
              <p class="text-lighter fw-normal fs-13px">With Codura, every conversation feels natural and tailored. Our
                AI
                adapts to your style, fostering trust and making communication more impactful.</p>
            </div>
            <div class="mb-4">
              <h6 class="text-white">Save Time While Achieving More, Every Day</h6>
              <p class="text-lighter fw-normal fs-13px">Let Codura handle the details while you focus on what matters
                most. Boost your productivity and accomplish your goals effortlessly with intelligent, round-the-clock
                support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-up" data-aos-delay="100">
      <div class="container section-title text-start">
        <h3 class="text-white text-capitalize ls-xs">How Fortivault Works?</h3>
        <p class="text-semi-white fw-normal fs-15px">Simplifying Your Workflow in 3 Easy Steps</p>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <div class="card rounded-sm bg-transparent border h-100">
              <div class="card-body text-center">
                <h6 class="text-white">1. Tell Us What You Need</h6>
                <p class="text-lighter fw-normal fs-13px m-0">Start by sharing your tasks or goals. Whether it’s
                  scheduling,
                  managing data, or generating insights, Codura is ready to help.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card rounded-sm bg-transparent border h-100">
              <div class="card-body text-center">
                <h6 class="text-white">2. Let AI Do the Work</h6>
                <p class="text-lighter fw-normal fs-13px m-0">Behind the scenes, our intelligent system processes your
                  request with speed and precision, delivering results tailored to your needs.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card rounded-sm bg-transparent border h-100">
              <div class="card-body text-center">
                <h6 class="text-white">3. Get Results Effortlessly</h6>
                <p class="text-lighter fw-normal fs-13px m-0">Receive clear, actionable outcomes in moments—saving you
                  time, energy, and stress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="row gy-4 justify-content-center align-items-center">
          <div class="col-lg-8">
            <div class="section-title text-start mb-4">
              <h3 class="text-white text-capitalize ls-xs">Seamless, Fast, and Reliable</h3>
              <p class="text-semi-white fw-normal fs-15px">With Codura, every step is designed to be intuitive and
                hassle-free, so you can focus on what matters most. </p>
            </div>
            <a class="btn bg-transaprent border text-white fs-13px ls-xs py-2 px-3">Try Codura now and see how it works
              for you!</a>
          </div>
          <div class="col-lg-4">
            <img src="/assets/img/seamless-img.png" class="p-4" alt="codura-seamless">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-body {
  background: #10061E url('/assets/img/body-bg.png') center center no-repeat;
  background-size: cover;
}
</style>
