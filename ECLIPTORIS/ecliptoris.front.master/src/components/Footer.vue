<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})

</script>

<template>
  <footer id="footer" class="footer dark-background">
    <div class="container footer-top py-5">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-4">
                <img src="/assets/img/ecliptoris@4x.png"/>
            </div>
            <div class="col-lg-4 text-center">
             <p class="m-0">Unifying the Cosmos of DeFi with AI Precision</p>
            </div>
            <div class="col-lg-2 text-center">
                <p class="m-0 text-secondary fs-13px">Follow Us on X</p>
                <p class="m-0">@ecliptoris</p>
            </div>
        </div>
    </div>
    <div class="container copyright d-flex align-items-center justify-content-center">
      <div class="copyright-info">
        <p class="ls-xs fs-12px fw-300">
          Copyright © <span>2024-25</span>
          <span class="px-1 sitename">{{ `${company.copyright}.` }}</span>
          <span class="sitename d-none">All rights reserved.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>