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
  <header id="header" class="header d-flex align-items-center fixed-top py-3">
    <div class="container d-flex align-items-center justify-content-between">
      <a class="btn btn-sm text-white ls-sm fs-16px">ABOUT</a>
      <router-link @click.prevent="changeMenu('home')" :to="{ name: 'home' }" class="logo d-flex align-items-center">
        <img src="/assets/images/nba@4x.png" class="lg m-0" :alt="company.slug" />
      </router-link>
      <a class="btn btn-sm text-white fs-16px"><i class="bi bi-twitter-x"></i></a>
    </div>
  </header>
</template>

<style scoped></style>
