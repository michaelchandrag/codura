<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router';
import { company } from '@/models';
import { getInfo } from '@/controllers';
import Header from './Header';
import Footer from './Footer';

const route = useRoute();
let companyInfo = ref(company)
onMounted(() => {
  fetchInfo();
})

const fetchInfo = async () => {
  const result = await getInfo();
  if(result && result.success && result.data){
    companyInfo.value = { ...company, ...result.data };
  }
}

</script>

<template>
  <Header v-if="route.name != 'ai'" :routeName="route.name" :company="companyInfo"></Header>
  <main class="main">
    <router-view :company="companyInfo"></router-view>
  </main>
  <Footer v-if="route.name != 'ai'" :company="companyInfo"></Footer>
  <a :class="{ 'd-none': route.name == 'ai' }" href="#" id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center rounded"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>
</template>

<style scoped></style>
