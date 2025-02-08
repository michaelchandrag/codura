<script setup>
import { defineProps, ref } from 'vue'
import { scrollToElement } from '@/helpers'

const { routeName, company } = defineProps({
  routeName: { type: String, default: 'home' },
  company: { type: Object, default: {} },
})
let is_menu = ref('home');
const changeMenu = (menu) => {
  is_menu.value = menu;
  scrollToElement(`section-${menu}`, 100);
}
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <div class="d-inline-flex align-items-center justify-content-between is-relative gap-4">
        <router-link @click.prevent="changeMenu('home')" :to="{ name: 'home' }"
          class="logo d-flex align-items-center pe-0">
          <img src="/assets/img/ecliptoris-icon@4x.png" class="lg m-0" alt="ECLIPTORIS" />
          <!-- <h1 class="sitename">ECLIPTORIS</h1> -->
        </router-link>
      </div>
      <nav id="navmenu-center" class="navmenu is-relative">
        <ul class="gap-3">
          <li>
            <router-link @click.prevent="changeMenu('home')" :class="{ 'is-active': is_menu == 'home' }"
              class="fs-14px ls-xs fw-bold" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <a @click.prevent="changeMenu('about')" :class="{ 'is-active': is_menu == 'about' }"
              class="fs-14px ls-xs fw-bold" href="#">About</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('feature')" :class="{ 'is-active': is_menu == 'feature' }"
              class="fs-14px ls-xs fw-bold" href="#">Features</a>
          </li>
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none">
            <router-link @click.prevent="changeMenu('home')" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('about')" class="fs-13px" href="#">About</a>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('feature')" class="fs-13px" href="#">Features</a>
          </li>
          <li class="d-inline-flex gap-3">
            <a target="_blank" :href="company.twitter_url" class="btn btn-sm social text-white border rounded-sm"><i
                class="bi bi-twitter-x fs-16px m-0"></i></a>
            <a target="_blank" :href="company.github_url" class="btn btn-sm social text-white border rounded-sm"><i
                class="bi bi-github fs-16px m-0"></i></a>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
