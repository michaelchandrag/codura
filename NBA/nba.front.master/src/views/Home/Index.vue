<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})
</script>

<template>
  <section id="main-section" class="section">
    
  </section>
</template>
