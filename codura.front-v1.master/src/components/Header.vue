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
        <img src="/assets/img/codura.png" class="lg p-1" alt="codura" />
        <!-- <h1 class="sitename">CODURA</h1> -->
      </router-link>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <router-link class="fs-14px" :to="{ name: 'feature' }">Features</router-link>
          </li>
          <li>
            <a class="fs-14px" href="#">Docs</a>
          </li>
          <li class="action"><router-link :to="{ name: routeName == 'feature' ? 'home' : 'feature' }"
              class="btn btn-sm to-auth py-1 px-3 rounded-sm 14px">Get Started</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
