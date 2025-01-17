<script setup>
import { company } from '@/models';
</script>

<template>
  <footer id="footer" class="footer dark-background">
    <div class="footer-newsletter bg-transparent">
      <div class="col-12 col-lg-8 m-auto">
        <div class="container section-title pb-4">
          <div class="card bg-card-secondary">
            <div class="card-body text-start">
              <div class="row align-items-center justify-content-between">
                <div class="col-12 col-lg-8">
                  <h5 class="text-white text-capitalize ls-xs">AI TECHNOLOGY</h5>
                  <p class="text-light fw-normal fs-13px">Oracium leverages machine learning algorithms and natural
                    language
                    processing (NLP) to analyze governance proposals, historical voting trends, and social sentiment.
                    The
                    AI
                    continuously learns from new data, improving its accuracy in scoring proposals and identifying
                    governance
                    threats over time.</p>
                  <router-link :to="{ name: 'home' }"
                    class="btn btn-try border-0 text-white fs-13px d-inline-flex px-3 py-2 align-items-center mt-3">
                    <span>Try it for Free</span>
                  </router-link>
                </div>
                <div class="col-12 col-lg-3">
                  <div class="technology-img">
                    <img src="/assets/img/cat.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container footer-top pb-3">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-12 col-md-12 footer-about mt-1">
          <router-link :to="{ name: 'home' }" class="d-flex align-items-center justify-content-center">
            <img class="lg" src="/assets/img/oracium-icon.png" />
          </router-link>
          <div class="footer-contact pt-4">
            <h4 class="m-0 fw-normal fs-14px ls-xs text-center">Follow Us :</h4>
            <div class="social-links d-flex justify-content-center">
              <a class="rounded-sm fs-18px" v-if="company.fb" target="_blank" :href="company.fb"><i
                  class="bi bi-facebook"></i></a>
              <a class="rounded-sm fs-18px" v-if="company.ig" target="_blank" :href="company.ig"><i
                  class="bi bi-instagram"></i></a>
              <a class="rounded-sm fs-18px" v-if="company.tw" target="_blank" :href="company.tw"><i
                  class="bi bi-twitter-x"></i></a>
              <a class="rounded-sm fs-18px" v-if="company.tw" target="_blank" :href="company.github"><i
                  class="bi bi-github"></i></a>
              <a class="rounded-sm fs-18px" v-if="company.linkedin" target="_blank" :href="company.linkedin"><i
                  class="bi bi-linkedin"></i></a>
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