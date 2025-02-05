<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})

</script>

<template>
  <footer id="footer" class="footer dark-background bg-app red">
    <div class="footer-top pb-4 pt-5">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-12 col-md-12 footer-about mt-1">
          <div class="footer-contact pt-3">
            <h4 class="m-0 fs-16px ls-sm text-center text-white fw-normal text-uppercase pb-1">Follow Us :</h4>
            <div class="social-links d-flex justify-content-center">
              <a class="rounded-md fs-16px text-white border-0 fw-normal" target="_blank" :href="company.twitter_url"><i
                  class="bi bi-twitter-x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright text-center py-3">
      <p class="ls-xs fs-14px fw-normal text-uppercase">
        © <span>{{ new Date().getFullYear() }}</span>
        <span class="px-1 sitename">{{ `${company.copyright || company.name}.` }}</span>
        <span class="sitename">All rights reserved.</span>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>