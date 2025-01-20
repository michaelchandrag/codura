<script setup>
import { defineProps } from 'vue'

const { routeName } = defineProps({
  routeName: { type: String, default: 'home' },
})
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-content container-fluid container-xl d-flex align-items-center justify-content-center text-center">
      <nav id="navmenu-center" class="navmenu d-flex flex-column align-items-center">
        <router-link :to="{ name: 'home' }" class="logo d-flex align-items-center">
          <img src="/assets/img/quantisnode-logo-fix.png" class="lg p-1" alt="QuantisNode" />
        </router-link>
        <ul>
          <li>
            <router-link :class="{'active': routeName == 'home'}" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :class="{'active': routeName == 'about'}" class="fs-13px" :to="{ name: 'about' }">About</router-link>
          </li>
          <li>
            <router-link :class="{'active': routeName == 'feature'}" class="fs-13px" :to="{ name: 'feature' }">Features</router-link>
          </li>
          <!-- <li class="action"><router-link :to="{ name: 'ai' }"
              class="btn btn-sm bg-green py-1 px-3 rounded fs-13px 14px">Start with AI</router-link>
          </li> -->
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu d-flex flex-column align-items-center">
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
          <li class="action d-lg-none"><router-link :to="{ name: 'ai' }"
              class="btn btn-sm bg-green py-1 px-3 rounded fs-13px 14px">Start with AI</router-link>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
