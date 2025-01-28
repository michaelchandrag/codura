<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue'
import { faqList } from '@/models'
import { copyToClipboard, showAlert } from '@/helpers';

const { company } = defineProps({
  company: { type: Object, default: {} },
})

onMounted(() => {

})
</script>

<template>
  <section class="main-hero hero section">
    
  </section>

</template>
