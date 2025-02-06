<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

const showBgVideo = ref(true);
//const videoPlayer = ref(null);
const video_url = ref('https://www.youtube.com/embed/SRdCOG2bcn0?rel=0&modestbranding=1&controls=1');

onMounted(() => {

})

const hideBackgroundAndPlayVideo = () => {
  video_url.value += "&autoplay=1";
  showBgVideo.value = false;
  //videoPlayer.value.play();
};

/*
const togglePlayPause = () => {
  if (!videoPlayer.value.paused) {
    videoPlayer.value.pause();
    showBgVideo.value = true;
  }
};*/
</script>

<template>
  <section id="main-section" class="section bg-app dark">
    <div class="container container-section is-relative">
      <div class="info pb-5 on-grow" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-5 m-auto">
          <div class="text-center title">
            <h1 class="text-white fw-700 ls-sm fs-70px m-0">NBA MEME</h1>
            <h1 class="text-white ls-sm fs-70px fw-400 m-0">COIN</h1>
            <h1 class="text-white fw-700 ls-sm fs-70px m-0">($NBA)</h1>
            <p class="text-white fs-20px ls-xs pt-2">THE FUTURE OF FAN ENGAGEMENT</p>
          </div>
          <div v-if="company.key_ca" class="container-ca mt-5">
            <div class="input-group input-group-lg bg-white rounded-md">
              <input :value="company.key_ca" class="form-control ls-sm fs-15px">
              <a @click.prevent="copyToClipboard(company.key_ca)"
                class="input-group-text px-3 d-inline-flex align-items-center bg-app pink border-0 on-shink">
                <img src="/assets/images/copy.png" />
                <span class="ps-2 text-white ls-xs fs-15px">Copy CA</span>
              </a>
            </div>
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
  <section id="section-video" class="section p-0 bg-app dark">
    <div class="video-content is-relative">
      <iframe :src="video_url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div @click.prevent="hideBackgroundAndPlayVideo" v-if="showBgVideo" class="video-play h-100 w-100 on-grow"></div>
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
    <div class="row row-custom section-player-content align-items-center">
      <div class="col-lg-6 p-0">
        <div class="info card border-0 bg-transparent h-100">
          <div class="card-body bg-transparent p-5 content">
            <div class="title pb-5">
              <h1 class="text-white ls-sm fs-75px m-0 has-red-text-glow">INTRODUCING</h1>
              <h1 class="text-white ls-sm fs-75px m-0">$NBA</h1>
            </div>
            <div class="sub-title py-2">
              <h2 class="text-app red ls-xs fs-45px m-0">The Official Fun-Powered Crypto</h2>
              <h2 class="text-app red ls-xs fs-45px m-0">by the NBA</h2>
            </div>
            <div class="desc pt-5" data-aos="fade-right" data-aos-delay="100">
              <p class="text-white text-justify text-uppercase fs-20px has-pink-glow has-box-hover">
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
        <div class=" card border-0 bg-transparent h-100">
          <div class="card-image on-shake"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="section-player-2" class="section py-0 bg-app dark">
    <div class="row row-custom section-player-2-content align-items-center">
      <div class="col-lg-6 p-0">
        <div class="card border-0 bg-transparent h-100">
          <div class="card-image on-shake"></div>
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <div class="info card border-0 bg-transparent h-100">
          <div class="card-body bg-transparent p-0 pe-5 content">
            <div class="title mb-4">
              <h1 class="text-white ls-sm fs-70px m-0 has-red-text-glow">Why the NBA is</h1>
              <h1 class="text-white ls-sm fs-70px m-0">Launching <span class="text-app red">$NBA</span></h1>
            </div>
            <div class="desc pt-5" data-aos="fade-left" data-aos-delay="100">
              <p class="text-white text-justify text-uppercase fs-22px m-0 has-pink-glow has-box-hover">
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
    <div class="row align-items-center justify-content-between row-custom">
      <div class="col-lg-6 p-0">
        <div class="info card border-0 bg-transparent h-100">
          <div class="card-body bg-transparent content d-flex justify-content-end">
            <div class="title pb-5 on-grow">
              <h1 class="text-app dark ls-sm fs-80px m-0 text-uppercase">what makes</h1>
              <h1 class="text-app dark ls-sm fs-80px m-0 text-uppercase"><span class="text-app red fw-bold">$nba</span>
                special?</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 p-0">
        <div class="car border-0 h-100">
          <img class="ws-100 on-bounce" src="/assets/images/nba-special@4x.png" />
        </div>
      </div>
    </div>
  </section>
  <section id="section-feature" class="section py-4 bg-white">
    <div class="container">
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-3">
          <div class="card border-0 h-100 has-red-glow">
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
          <div class="card border-0 h-100 has-red-glow">
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
          <div class="card border-0 h-100 has-red-glow">
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
          <div class="card border-0 h-100 has-red-glow">
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
      <div class="container py-5 on-grow">
        <div class="title text-white ls-sm fs-30px fw-500 text-uppercase mb-1">JOIN THE future of the nba</div>
        <div class="desc text-white text-uppercase fs-20px ls-xs mb-5">$NBA isn’t just a meme coin—it’s the future of
          sports fandom.
          Whether you’re a casual fan or a die-hard supporter, this is your chance to be part of an exclusive digital
          economy built by the NBA, for the fans.</div>
        <div class="desc text-white text-uppercase ls-xs fs-20px">
          Get ready to <b>earn, trade, and play with $NBA!</b>
        </div>
      </div>
    </div>
  </section>
</template>
