<script setup>
import { useRoute  } from 'vue-router';
import Header from './Header';
import HeaderAI from './HeaderAI'
import Footer from './Footer';

const route = useRoute();
</script>

<template>
  <Header v-if="route.name !== 'ai'" :routeName="route.name" />
  <HeaderAI v-else />
  <main :class="{'is-home': route.name === 'home', 'not-home': route.name !== 'home'}" class="main">
    <router-view></router-view>
  </main>
  <Footer :id="route.name === 'home' ? 'footer-home' : 'footer'" />
  <a
    href="#"
    id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center rounded"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
  <div id="preloader"></div>
</template>

<style scoped></style>
