<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'

const { company } = defineProps({
  company: { type: Object, default: {} },
})
const try_request = reactive({ email: '' })

onMounted(() => {

})

const sendRequestTry = () => {
  showAlert({ type: 'success', title: 'Thanks You!', text: 'Information has been send successfully.' });
}

</script>

<template>
  <footer id="footer" class="footer dark-background">
    <section id="section-try" class="section bg-transparent p-0">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container">
          <div class="card border-0 rounded-md bg-white shadow">
            <div class="card-body rounded-md">
              <div class="section-title pb-4">
                <div class="col-lg-7 m-auto">
                  <h5 class="text-dark fw-500 text-capitalize ls-xs">TRY DEMO VERSION</h5>
                  <p class="text-dark fw-normal fs-13px">Experience the future of DeFi security with Arcveil AI! While our demo is currently in development, you can register your interest today. Enter your email below to be notified as soon as it’s live</p>
                </div>
              </div>
              <div class="col-12 col-lg-5 m-auto try-request">
                <form @submit.prevent="sendRequestTry()">
                  <div class="input-group input-group-lg bg-white rounded-sm">
                    <input required type="email" v-model="try_request.email"
                      class="form-control bg-transparent no-shadow fs-12px" placeholder="Enter your email address">
                    <button type="submit" class="input-group-text text-white btn btn-sm fs-12px">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-content">
      <div class="container footer-top pb-3">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-12 col-md-12 footer-about mt-1">
            <div class="footer-contact pt-3">
              <h4 class="m-0 fw-normal fs-14px ls-xs text-center">Follow Us :</h4>
              <div class="social-links d-flex justify-content-center">
                <a class="rounded-sm fs-18px" v-if="company.twitter_url || company.tw" target="_blank"
                  :href="company.twitter_url || company.tw"><i class="bi bi-twitter-x"></i></a>
                <a class="rounded-sm fs-18px" v-if="company.github_url || company.github" target="_blank"
                  :href="company.github_url || company.github"><i class="bi bi-github"></i></a>
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
        <p class="ls-xs fs-12px">
          © <span>{{ new Date().getFullYear() }}</span>
          <span class="px-1 sitename">{{ `${company.name}.` }}</span>
          <span class="sitename">All rights reserved.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>