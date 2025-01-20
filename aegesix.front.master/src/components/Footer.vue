<script setup>
import { onMounted, ref, reactive } from 'vue'
import { company } from '@/models';
import { getInfo } from '@/controllers';

let companyInfo = ref(company)
onMounted(() => {
  fetchInfo();
})

const fetchInfo = async () => {
  const result = await getInfo();
  if(result && result.success && result.data){
    companyInfo.value = { ...company, ...result.data };
  }
}
</script>

<template>
  <footer id="footer" class="footer dark-background">
    <div class="container footer-top pb-3">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-12 col-md-12 footer-about mt-1">
          <div class="footer-contact pt-3">
            <h4 class="m-0 fw-normal fs-14px ls-xs text-center">Follow Us :</h4>
            <div class="social-links d-flex justify-content-center">
              <a class="rounded-sm fs-18px" v-if="companyInfo.twitter_url || companyInfo.tw" target="_blank" :href="companyInfo.twitter_url || companyInfo.tw"><i
                  class="bi bi-twitter-x"></i></a>
              <a class="rounded-sm fs-18px" v-if="companyInfo.github_url || companyInfo.github" target="_blank" :href="companyInfo.github_url || companyInfo.github"><i
                  class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 footer-links mb-0 d-none">
          <!-- <h4>Support</h4>
          <ul>
            <li>
              <i class="bi bi-chevron-right pe-2"></i>
              <router-link :to="{ name: 'home' }">Walkthrough</router-link>
            </li>
            <li>
              <i class="bi bi-chevron-right pe-2"></i>
              <router-link :to="{ name: 'home' }">Blog</router-link>
            </li>
            <li>
              <i class="bi bi-chevron-right pe-2"></i>
              <router-link :to="{ name: 'home' }">Contact</router-link>
            </li>
          </ul> -->
        </div>
        <div class="col-lg-3 col-md-3 footer-links mb-0 d-none">
          <!-- <h4>Legal</h4>
          <ul>
            <li>
              <i class="bi bi-chevron-right pe-2"></i>
              <router-link :to="{ name: 'home' }">Terms of Service</router-link>
            </li>
            <li>
              <i class="bi bi-chevron-right pe-2"></i>
              <router-link :to="{ name: 'home' }">Refung Policy</router-link>
            </li>
            <li>
              <i class="bi bi-chevron-right pe-2"></i>
              <router-link :to="{ name: 'home' }">Privacy Policy</router-link>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
    <div class="container copyright text-center">
      <p class="ls-xs">
        © <span>{{ new Date().getFullYear() }}</span>
        <strong class="px-1 sitename">{{ `${company.name}.` }}</strong>
        <span class="sitename">All rights reserved.</span>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>