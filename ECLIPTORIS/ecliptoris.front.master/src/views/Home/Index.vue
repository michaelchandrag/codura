<script setup>
import { defineProps, onMounted, onUnmounted, ref, reactive } from 'vue'
import { Modal } from 'bootstrap';
import { featureList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

const modalTryInstance = ref(null);
const modalTryRef = ref(null);
const modalTryElement = ref(null);
const try_request = reactive({ email: '' })
onMounted(() => {
  modalTryElement.value = document.getElementById('tryModal');
  modalTryInstance.value = new Modal(modalTryElement.value);
  modalTryElement.value.addEventListener('hidden.bs.modal', closeTryModal);
})

onUnmounted(() => {
  if (modalTryElement.value) {
    modalTryElement.value.removeEventListener('hidden.bs.modal', closeTryModal);
  }
});

const sendRequestTry = () => {
  closeTryModal();
  showAlert({ type: 'success', title: 'Thanks You!', text: 'Information has been send successfully.' });
}
const closeTryModal = () => {
  modalTryInstance.value.hide();
};
const openTryModal = () => {
  modalTryInstance.value.show();
};
</script>

<template>
  <section class="main-hero hero section">
    <video autoplay muted loop playsinline>
      <source src="/assets/video/ecliptoris.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-if="company.key_ca" class="container key-ca">
      <div class="col-lg-6 m-auto">
        <div class="input-group input-group-lg bg-white rounded-sm">
          <input disabled :value="company.key_ca"
            class="form-control text-white bg-transparent no-shadow fs-14px ls-xs no-border">
          <a @click.prevent="copyToClipboard(company.key_ca)"
            class="input-group-text text-white btn btn-sm fs-14px ls-xs d-inline-flex align-items-center gap-2">
            <img src="/assets/img/copy-white-sm.png" />
            <span class="text-white">Copy CA</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="section-about" class="section py-5">
    <div class="container">
      <div class="container section-title text-start pb-2 on-bounce">
        <h1 class="text-dark fw-bold text-capitalize ls-xs mb-0 fs-50px ls-xs">OUR</h1>
        <h1 class="text-dark fw-bold text-capitalize ls-xs mb-0 fs-50px ls-xs">MISSION</h1>
      </div>
      <div class="container on-grow">
        <p class="text-dark fs-35px text-end m-0 fw-500">Our mission is to empower users to</p>
        <p class="text-dark fs-35px text-justify m-0 fw-500 lh-normal">seamlessly navigate the <strong>DeFi</strong>
          multiverse, eliminating barriers and enhancing financial opportunities. Leveraging advanced AI technologies,
          Ecliptoris delivers intuitive cross-chain capabilities, ensuring that the power of blockchain is accessible to
          all.
        </p>
      </div>
    </div>
  </section>

  <section id="section-feature" class="section bg-transparent py-5 has-bg-content">
    <div class="has-blur-content">
      <div class="container pb-5">
        <div class="row gy-4 justify-content-start">
          <div class="col-lg-6">
            <h1 class="text-white fw-bold text-capitalize ls-xs text-left mb-3">Our Core Feature</h1>
            <p class="text-white fs-24px ls-xs text-justify lh-normal">Simplify your DeFi experience with advanced AI,
              cross-chain connectivity, and robust security features</p>
          </div>
          <div class="col-lg-6">
            <div class="feature-item card border-0 rounded-sm h-100 bg-transparent card-fade-top">
              <div class="card-body">
                <div class="feature-icon mb-4">
                  <img :src="`/assets/img/chain.png`" />
                </div>
                <h6 class="text-white fs-20px fw-500 text-capitalize ls-xs mb-3">Cross-Chain Harmonization</h6>
                <div class="card-body-content text-white fs-16px ls-xs fw-300">
                  Ecliptoris bridges over 200 Layer 1 and Layer 2 blockchains, allowing users to transact, stake, and
                  swap
                  assets across ecosystems effortlessly. Through dynamic liquidity orchestration, we provide the most
                  efficient routing and lowest slippage for every transaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-start">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-6" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card border-0 rounded-sm h-100 bg-transparent card-fade-top">
              <div class="card-body">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <h6 class="text-white fs-20px fw-500 text-capitalize ls-xs mb-3">{{ feature.title }}</h6>
                <div class="card-body-content text-white fs-16px ls-xs fw-300" v-html="feature.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-try" class="section bg-transparent py-5">
    <div class="container">
      <div class="col-lg-6 mb-5 on-shake">
        <h1 class="text-white fw-bold text-capitalize ls-xs text-left mb-0 fs-45px">Try It Yourself:</h1>
        <h1 class="text-white fw-bold text-capitalize ls-xs text-left mb-0 fs-45px">Interactive Walkthroughs of Our DeFi
          Platform</h1>
      </div>
      <div class="col-lg-6 m-auto pt-5">
        <h1 class="text-white fw-normal text-capitalize ls-xs text-left mb-0 fs-28px mb-5 on-shake">The beta demo is
          launching
          soon! Join our early access program to be the first to experience the future of DeFi strategy-building.</h1>
        <div class="btn-join">
          <a @click.prebent="openTryModal"
            class="btn btn-lg rounded d-inline-flex gap-2 text-white border fs-18px on-shink">
            <span>Join Beta Version</span>
            <i class="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <div id="tryModal" class="modal fade modal-data" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered modal-slide">
      <div class="modal-content shadow">
        <div class="modal-header py-3 px-3 pb-0 align-items-center justify-content-between border-0">
          <h5 class="modal-title fs-14px fw-bold ws-90 text-center text-dark ls-xs fs-16px">GET EARLY ACCESS</h5>
          <button type="button" class="btn btn-sm p-0 lh-normal" data-bs-dismiss="modal"
            @click.prevnt="closeDocumentModal" aria-label="Close"><i class="bi bi-x fs-26px text-dark"></i></button>
        </div>
        <div class="modal-body">
          <div class="text-center fs-13px mb-4">Thank you for your interest in EclipseToris AI ! We're currently
            developing the beta version. Please enter your email below to gain access to our exclusive demo as soon as
            it's ready!</div>
          <form @submit.prevent="sendRequestTry">
            <div class="form-group mb-3">
              <input v-model="try_request.email" type="email" required class="form-control form-control-lg fs-13px"
                placeholder="Enter your email address">
            </div>
            <div class="form-group mb-2">
              <button type="submit" class="bg-app-pink btn btn-md ws-100 text-white ls-xs">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
