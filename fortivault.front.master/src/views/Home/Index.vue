<script setup>
import { onMounted, ref, reactive } from 'vue'

onMounted(() => {

})
</script>

<template>
  <section id="hero" class="main-hero hero section p-0 bg-transparent">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="col-12 col-lg-8 m-auto text-center">
        <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-40px">Revolutionizing Smart Contract Security with AI</h2>
          <p class="mt-3 w-100 text-white fw-normal fs-14px hero-desc">Our mission is to make blockchain ecosystems
            safer
            by providing accessible, reliable, and efficient smart contract security audits powered by cutting-edge AI
            technology. We aim to prevent exploits and promote trust in decentralized systems</p>
        </div>
        <div class="hero-prompt mb-5">
          <div class="col-12 col-lg-8 m-auto">
            <form>
              <div class="input-group p-2 rounded-sm">
                <input required class="form-control form-control-sm text-white fs-13px bg-transparent"
                  placeholder="Type your Prompt" />
                <router-link :to="{ name: 'ai' }"
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
