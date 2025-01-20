<script setup>
import { defineProps } from 'vue'
const { routeName } = defineProps({
  routeName: { type: String, default: 'home' },
})
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-content container-fluid container-xl position-relative d-flex align-items-center justify-content-between px-5">
      <router-link :to="{ name: 'home' }" class="logo d-flex align-items-center">
        <img src="/assets/img/codura.png" class="lg p-1" alt="codura" />
        <!-- <h1 class="sitename">codura</h1> -->
      </router-link>
      <nav id="navmenu-center" class="navmenu">
        <ul>
          <li>
            <router-link :class="{'text-green': routeName == 'home'}" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :class="{'text-green': routeName == 'about'}" class="fs-13px" :to="{ name: 'about' }">About</router-link>
          </li>
          <li>
            <router-link :class="{'text-green': routeName == 'feature'}" class="fs-13px" :to="{ name: 'feature' }">Features</router-link>
          </li>
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none">
            <router-link class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="d-xl-none">
            <router-link class="fs-13px" :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="d-xl-none">
            <router-link  class="fs-13px" :to="{ name: 'feature' }">Features</router-link>
          </li>
          <li class="action"><router-link :to="{ name: 'ai' }"
              class="btn btn-sm bg-green py-1 px-3 rounded fs-13px 14px">Start with AI</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
