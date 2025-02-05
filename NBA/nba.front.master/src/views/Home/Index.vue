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
  <section id="section-special" class="section py-0 bg-white">
    <div class="row align-items-center justify-content-between">
      <div class="col-lg-6 p-0">
        <div class="info card border-0 bg-transparent h-100">
          <div class="card-body bg-transparent content d-flex justify-content-end">
            <div class="title pb-5">
              <h1 class="text-app dark ls-sm fs-80px m-0 text-uppercase">what makes</h1>
              <h1 class="text-app dark ls-sm fs-80px m-0 text-uppercase"><span class="text-app red fw-bold">$nba</span>
                special?</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 p-0">
        <div class="car border-0 h-100">
          <img class="ws-100" src="/assets/images/nba-special@4x.png" />
        </div>
      </div>
    </div>
  </section>
  <section id="section-feature" class="section py-4 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <div class="title fw-bold text-app dark fs-18px ls-xs text-uppercase mb-4">A Coin for the Culture</div>
              <div class="desc px-3">
                <p class="text-uppercase fs-16px">More than just a cryptocurrency, $NBA is a movement. It's a tribute to
                  legendary moments, viral highlights, and the global basketball community.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <div class="title fw-bold text-app dark fs-18px ls-xs text-uppercase mb-4">Exclusive Fan Rewards</div>
              <div class="desc px-3">
                <p class="text-uppercase fs-16px">Holding $NBA unlocks benefits like game tickets, signed merchandise,
                  premium content, and meet-and-greets with NBA players.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <div class="title fw-bold text-app dark fs-18px ls-xs text-uppercase mb-4">Decentralized &
                Community-Driven</div>
              <div class="desc px-3">
                <p class="text-uppercase fs-16px">This is not just another rewards program; it’s a blockchain-powered
                  ecosystem where fans have a voice.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card border-0 h-100">
            <div class="card-body text-center">
              <div class="title fw-bold text-app dark fs-18px ls-xs text-uppercase mb-4">Fantasy & Gaming Utility</div>
              <div class="desc px-3">
                <p class="text-uppercase fs-16px">Use $NBA for fantasy leagues, on-chain game betting, virtual
                  collectibles, and Web3-powered gaming experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="section-join" class="section py-0 is-relative">
    <div class="join-img w-100">
      <img class="w-100" src="/assets/images/join-img.jfif" />
    </div>
    <div class="join-bg"></div>
    <div class="join-info text-center">
      <div class="container py-5">
        <div class="title text-white ls-sm fs-30px fw-500 text-uppercase mb-1">JOIN THE future of the nba</div>
        <div class="desc text-white text-uppercase fs-20px ls-xs mb-5">$NBA isn’t just a meme coin—it’s the future of sports fandom.
          Whether you’re a casual fan or a die-hard supporter, this is your chance to be part of an exclusive digital
          economy built by the NBA, for the fans.</div>
        <div class="desc text-white text-uppercase ls-xs fs-20px">
          Get ready to <b>earn, trade, and play with $NBA!</b>
        </div>
      </div>
    </div>
  </section>
</template>
