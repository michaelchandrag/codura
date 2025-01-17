<script setup>
import { defineProps } from 'vue'
const { routeName } = defineProps({
  routeName: { type: String, default: 'home' },
})
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <router-link :to="{ name: 'home' }" class="logo d-flex align-items-center">
        <img src="/assets/img/fluxheaven.png" class="lg" alt="fluxheaven" />
        <!-- <h1 class="sitename">fluxheaven</h1> -->
      </router-link>
      <nav id="navmenu-center" class="navmenu">
        <ul class="gap-3">
          <li>
            <router-link :class="{'is-active': routeName == 'home'}" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <a :class="{'is-active': routeName == 'about'}" class="fs-13px" href="#">Feature</a>
          </li>
          <li>
            <a :class="{'is-active': routeName == 'feature'}" class="fs-13px" href="#">Faq</a>
          </li>
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none">
            <router-link class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="d-xl-none">
            <a class="fs-13px" href="#">Feature</a>
          </li>
          <li class="d-xl-none">
            <a class="fs-13px" href="#">Faq</a>
          </li>
          <li class="action"><router-link :to="{ name: 'home' }"
              class="btn btn-sm bg-app rounded fs-13px 14px text-white">Getting Started</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
