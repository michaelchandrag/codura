<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})
</script>

<template>
  <section id="main-section" class="section bg-app dark">
    <div class="container container-section">
      <div class="col-lg-6 m-auto">
        <div class="text-center">
          <h1 class="text-white fw-700 ls-sm fs-70px m-0">NBA MEME</h1>
          <h1 class="text-white ls-sm fs-70px m-0">COIN</h1>
          <h1 class="text-white fw-700 ls-sm fs-70px m-0">($NBA)</h1>
          <p class="text-white fs-20px ls-xs">THE FUTURE OF FAN ENGAGEMENT</p>
        </div>
        <div class="container-ca mt-5">
          <div class="input-group input-group-lg">
            <input value="9kEcnFj9vwjUkjdsL89fGhKloP76qseTuv7" class="form-control ls-sm fs-15px">
            <a class="input-group-text px-3 d-inline-flex align-items-center bg-app pink border-0">
              <img src="/assets/images/copy.png" />
              <span class="ps-2 text-white fs-15px">Copy CA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section nba-run py-4">
    <div class="row align-items-center nba-run-content">
      <div v-for="rn in 10" class="d-inline-flex nba-run-item">
        <div class="nba-run-img px-2">
          <img src="/assets/images/nba-black@4x.png" />
        </div>
        <div class="nba-run-line d-inline-flex align-items-center px-3">
          <hr>
        </div>
      </div>
    </div>
  </section>
  <section id="section-video" class="section py-4 bg-app dark">
    <div class="container video-content is-relative">
      <video class="d-none">
        <source src="/assets/videos/nba.mp4" />
      </video>
    </div>
  </section>
  <section class="section nba-run py-4">
    <div class="row align-items-center nba-run-content">
      <div v-for="rn in 10" class="d-inline-flex nba-run-item">
        <div class="nba-run-img px-2">
          <img src="/assets/images/nba-black@4x.png" />
        </div>
        <div class="nba-run-line d-inline-flex align-items-center px-3">
          <hr>
        </div>
      </div>
    </div>
  </section>
  <section id="section-player" class="section py-0 bg-app dark">
    <div class="row">
      <div class="col-lg-6 p-0">
        <div class="info card border-0 bg-transparent h-100">
          <div class="card-body bg-transparent p-5 content">
            <div class="title pb-5">
              <h1 class="text-white ls-sm fs-75px m-0">INTRODUCING</h1>
              <h1 class="text-white ls-sm fs-75px m-0">$NBA</h1>
            </div>
            <div class="sub-title py-4">
              <h2 class="text-app red ls-xs fs-45px m-0">The Official Fun-Powered Crypto</h2>
              <h2 class="text-app red ls-xs fs-45px m-0">by the NBA</h2>
            </div>
            <div class="desc pt-5">
              <p class="text-white text-justify text-uppercase fs-22px">
                The NBA Meme Coin ($NBA) is the official digital currency designed to revolutionize fan engagement,
                bringing the excitement of basketball into the Web3 era. Built on the Solana blockchain for its
                high-speed transactions and low fees, $NBA ensures seamless and efficient digital interactions for fans
                worldwide. As a pioneer in sports innovation, the NBA is expanding beyond the court into
                blockchain-powered fan experiences, allowing supporters to interact with the game like never before.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <div class="car border-0 h-100">
          <img class="ws-100" src="/assets/images/nba-player@4x.png" />
        </div>
      </div>
    </div>
  </section>
  <section id="section-player-2" class="section py-0 bg-app dark">
    <div class="row">
      <div class="col-lg-6 p-0">
        <div class="crad h-100 border-0">
          <img class="ws-100" src="/assets/images/nba-player-2@4x.png" />
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <div class="info card border-0 bg-transparent h-100">
          <div class="card-body bg-transparent p-5 content">
            <div class="title mb-5">
              <h1 class="text-white ls-sm fs-75px m-0">Why the NBA is</h1>
              <h1 class="text-white ls-sm fs-75px m-0">Launching <span class="text-app red">$NBA</span></h1>
            </div>
            <div class="desc pt-5">
              <p class="text-white text-justify text-uppercase fs-30px">
                The NBA has always been at the forefront of digital transformation, from global broadcasts to
                groundbreaking projects like NBA Top Shot. Now, with the launch of $NBA, we’re ushering in the next
                phase: a community-driven currency that rewards passionate fans and creates new ways to experience the
                game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
