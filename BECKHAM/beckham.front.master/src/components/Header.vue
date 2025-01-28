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
    <div class="container-fluid header-container col-lg-8 m-auto container-xl position-relative d-flex align-items-center justify-content-between py-2 px-4">
      <router-link @click.prevent="changeMenu('home')" :to="{ name: 'home' }" class="logo d-flex align-items-center">
        <img src="/assets/images/$becks-lg.png" class="lg m-0" alt="$becks" />
        <!-- <h1 class="sitename">$becks</h1> -->
      </router-link>
      <nav id="navmenu-center" class="navmenu">
        <ul>
          <li>
            <router-link @click.prevent="changeMenu('home')" :class="{ 'is-active': is_menu == 'home' }" class="fs-13px"
              :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <a @click.prevent="changeMenu('contact')" :class="{ 'is-active': is_menu == 'contact' }" class="fs-13px"
              href="#">Contact</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('address')" :class="{ 'is-active': is_menu == 'address' }" class="fs-13px"
              href="#">Address</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('howbuy')" :class="{ 'is-active': is_menu == 'howbuy' }" class="fs-13px"
              href="#">How To Buy</a>
          </li>
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none d-lg-none">
            <router-link @click.prevent="changeMenu('home')" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="d-xl-none d-lg-none">
            <a @click.prevent="changeMenu('contact')" class="fs-13px" href="#">Contact</a>
          </li>
          <li class="d-xl-none d-lg-none">
            <a @click.prevent="changeMenu('address')" class="fs-13px" href="#">Address</a>
          </li>
          <li class="d-xl-none d-lg-none">
            <a @click.prevent="changeMenu('howbuy')" class="fs-13px" href="#">How To Buy</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('buynow')" class="btn btn-sm rounded bg-app-red py-2 px-4 fs-14px">Buy Now</a>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
