<script setup>
import Header from './Header'
import Footer from './Footer'
</script>

<template>
  <Header></Header>
  <main class="main">
    <router-view></router-view>
  </main>
  <!--<Footer></Footer>-->
  <a
    href="#"
    id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center rounded"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
  <div id="preloader"></div>
</template>

<style scoped></style>
