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
                        <img src="/assets/images/copy.png"/>
                        <span class="ps-2 text-white fs-15px">Copy CA</span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
