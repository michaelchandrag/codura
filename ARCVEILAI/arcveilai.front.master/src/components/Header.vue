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
      <router-link @click.prevent="changeMenu('home')" :to="{ name: 'home' }" class="logo d-flex align-items-center">
        <img src="/assets/img/arcveil@4x.png" class="lg" alt="arcveil" />
        <!-- <h1 class="sitename">arcveil</h1> -->
      </router-link>
      <nav id="navmenu-center" class="navmenu">
        <ul class="gap-3">
          <li>
            <router-link @click.prevent="changeMenu('home')" :class="{'is-active': is_menu == 'home'}" class="fs-13px" :to="{ name: 'home' }">HOME</router-link>
          </li>
          <li>
            <a @click.prevent="changeMenu('about')" :class="{'is-active': is_menu == 'about'}" class="fs-13px" href="#">ABOUT</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('feature')" :class="{'is-active': is_menu == 'feature'}" class="fs-13px" href="#">FEATURE</a>
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
            <a @click.prevent="changeMenu('feature')" class="fs-13px" href="#">Feature</a>
          </li>
          <li class="action"><router-link :to="{ name: 'ai' }"
              class="btn btn-sm bg-app-gradient text-white rounded fs-13px">Try Demo Version</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
