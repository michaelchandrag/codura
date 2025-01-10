<script setup>
import { company } from '@/models';
</script>

<template>
  <footer id="footer" class="footer dark-background bg-dark">
    <div class="container copyright text-center">
      <p class="ls-xs">
        © <span>{{ new Date().getFullYear() }}</span>
        <strong class="px-1 sitename">{{ `${company.name}.` }}</strong>
        <span class="sitename">All rights reserved.</span>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>