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
      <div class="d-inline-flex align-items-center gap-2">
        <a :href="company.twitter_url || company.tw" target="_blank"
          class="btn btn-sm rounded-sm fs-12px text-white social border"><i class="bi bi-twitter-x m-0"></i></a>
        <a :href="company.github_url || company.github" target="_blank"
          class="btn btn-sm rounded-sm fs-12px text-white social border"><i class="bi bi-github m-0"></i></a>
      </div>
      <nav id="navmenu-center" class="navmenu">
        <ul class="gap-2">
          <li>
            <router-link @click.prevent="changeMenu('home')" :class="{ 'is-active': is_menu == 'home' }" class="fs-13px"
              :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <a @click.prevent="changeMenu('feature')" :class="{ 'is-active': is_menu == 'feature' }" class="fs-13px"
              href="#">Features</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('usecase')" :class="{ 'is-active': is_menu == 'usecase' }" class="fs-13px"
              href="#">Use Case</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('differentiator')" :class="{ 'is-active': is_menu == 'differentiator' }" class="fs-13px"
              href="#">Differentiators</a>
          </li>
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none">
            <router-link @click.prevent="changeMenu('home')" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('feature')" class="fs-13px" href="#">Features</a>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('usecase')" class="fs-13px" href="#">Use Case</a>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('differentiator')" class="fs-13px" href="#">Differentiators</a>
          </li>
          <li class="action">
            <router-link :to="{ name: 'ai' }" class="btn btn-sm rounded actived-orange fs-13px py-1 px-2 14px border rounded">
              <span class="me-1">Try Demo Version</span>
              <i class="bi bi-arrow-up-right"></i>
            </router-link>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
