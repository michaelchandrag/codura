<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})

</script>

<template>
  <footer id="footer" class="footer dark-background bg-dark">
    <div class="container footer-top pb-3">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-12 col-md-12 footer-about mt-1">
          <div class="footer-contact pt-3">
            <h4 class="m-0 fw-bold fs-13px ls-xs text-center text-app-gold">Follow Us :</h4>
            <div class="social-links d-flex justify-content-center">
              <a class="rounded-sm fs-18px text-app-gold border-app-gold" v-if="company.tw" target="_blank" :href="company.tw"><i
                  class="bi bi-twitter-x"></i></a>
              <a class="rounded-sm fs-18px text-app-gold border-app-gold" v-if="company.github" target="_blank" :href="company.github"><i
                  class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container copyright text-center py-2">
      <p class="ls-xs fs-12px fw-normal">
        © <span>{{ new Date().getFullYear() }}</span>
        <span class="px-1 sitename">{{ `${company.name}.` }}</span>
        <span class="sitename">All rights reserved.</span>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>