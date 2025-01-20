<script setup>
import { defineProps } from 'vue'

const { routeName } = defineProps({
  routeName: { type: String, default: 'home' },
})
</script>

<template>
  <header id="header" class="header d-flex align-items-start fixed-top">
    <div class="header-content container-fluid d-flex align-items-start justify-content-left text-left">
      <nav id="navmenu-center" class="navmenu d-flex flex-column align-items-start">
        <router-link :to="{ name: 'home' }" class="logo d-flex align-items-left">
          <img src="/assets/img/quantisnode-logo-fix.png" class="lg p-1" alt="QuantisNode" />
        </router-link>
      </nav>
      
    </div>
  </header>
</template>

<style scoped></style>
