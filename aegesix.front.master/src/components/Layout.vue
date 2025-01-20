<script setup>
import { useRoute  } from 'vue-router';
import Header from './Header';
import Footer from './Footer';

const route = useRoute();
</script>

<template>
  <Header :routeName="route.name"></Header>
  <main :class="{'is-home' : route.name == 'home'}" class="main">
    <router-view></router-view>
  </main>
  <Footer></Footer>
  <a
    href="#"
    id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center rounded"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
  <div id="preloader"></div>
</template>

<style scoped></style>
