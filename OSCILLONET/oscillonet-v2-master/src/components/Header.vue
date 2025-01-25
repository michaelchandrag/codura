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
        <router-link @click.prevent="changeMenu('home')" :to="{ name: 'home' }" class="logo d-flex align-items-center pe-0">
          <img src="/assets/img/oscillonet@4x.png" class="lg" alt="oscillonet" />
          <!-- <h1 class="sitename">oscillonet</h1> -->
        </router-link>
        <nav id="navmenu-center" class="navmenu has-space-vertical is-relative ps-4 ms-2">
          <ul class="gap-3">
            <li>
              <router-link @click.prevent="changeMenu('home')" :class="{ 'is-active': is_menu == 'home' }" class="fs-12px ls-xs fw-normal"
                :to="{ name: 'home' }">HOME</router-link>
            </li>
            <li>
              <a @click.prevent="changeMenu('feature')" :class="{ 'is-active': is_menu == 'feature' }" class="fs-12px ls-xs fw-normal"
                href="#">FEATURES</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none">
            <router-link @click.prevent="changeMenu('home')" class="fs-13px" :to="{ name: 'home' }">HOME</router-link>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('feature')" class="fs-13px" href="#">FEATURES</a>
          </li>
          <li class="action d-none">
            <router-link :to="{ name: 'ai' }" class="btn btn-sm rounded fs-13px">
              <span>Join Beta Version</span>
              <i class="bi bi-arrow-up-right"></i>
            </router-link>
          </li>
          <li class="d-inline-flex">
              <a v-if="company.twitter_url || company.tw" target="_blank"
              :href="company.twitter_url || company.tw" class="btn btn-sm"><i class="bi bi-twitter-x fs-22px"></i></a>
              <a v-if="company.github_url || company.github" target="_blank"
              :href="company.github_url || company.github" class="btn btn-sm"><i class="bi bi-github fs-22px"></i></a>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
