<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { faqList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})
</script>

<template>
  <section class="section first-section">
    <div class="container bg-app-gold rounded-xl p-4">
      <div class="row justify-content-between mb-5">
        <div class="col-lg-6">
          <div class="card bg-transparent no-border h-100 is-relative">
            <div class="card-body">
              <div class="title">
                <h1 class="text-white fw-bold m-0 fs-48px">THE ONLY</h1>
                <h1 class="text-white fw-bold m-0 text-app-red fs-48px">OFFICIAL</h1>
                <h1 class="text-white fw-bold m-0 fs-48px">DAVID BECKHAM MEME</h1>
              </div>
              <div class="info join-info">
                <p class="m-0 text-white fw-300 fs-18px">Join the Becks Community!</p>
                <p class="m-0 text-white fw-300 fs-18px">Be part of a movement inspired by</p>
                <p class="m-0 text-white fw-300 fs-18px">Beckham’s
                  career and his influence beyond football</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card bg-transparent no-border h-100">
            <div class="card-body text-center">
              <div class="box-image mb-3 ps-4">
                <img src="/assets/images/backham-dream@4x.png" />
              </div>
              <p class="m-0 text-white fw-300 fs-18px text-start lh-normal"><i>“Don't be like most people, Most people
                  give up on their
                  dreams”</i>
              </p>
              <div class="box-image signature-info">
                <img src="/assets/images/signature.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center col-lg-6 m-auto mb-4">
        <h5 class="text-white mb-3">Solana Contract Address</h5>
        <div class="input-group">
          <input disabled class="form-control disabled">
          <a class="input-group-text btn btn-sm bg-app-red d-inline-flex align-items-center">
            <img src="/assets/images/copy-white.png" />
            <span class="ps-2 text-white">Copy CA</span>
          </a>
        </div>
      </div>
      <div class="text-center col-lg-10 m-auto">
        <p class="m-0 text-white fw-300 fs-14px">Becks Memes are intended to function as an expression of support for,
          and
          engagement with, the ideals and beliefs embodied by the symbol "$BECKS" and the associated artwork, and are
          not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of
          any type. Becks Meme is not political and has nothing to do with any political campaign or any political
          office or governmental agency. </p>
      </div>
    </div>
  </section>

</template>
