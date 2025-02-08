<script setup>
import AlertContent from '@/components/AlertContent';
</script>

<template>
    <div class="section-content">
        <div class="page-title dark-background bg-transparent">
            <div class="container position-relative">
                <h1>4 0 4</h1>
                <nav class="breadcrumbs">
                    <ol>
                        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li class="current">404</li>
                    </ol>
                </nav>
            </div>
        </div>
        <section id="starter-section" class="starter-section section">
            <div class="container section-title aos-init aos-animate" data-aos="fade-up">
                <AlertContent :type="'danger'" :title="'Page Not Found!'"
                    :msg="`Sorry, we couldn't find the page you were looking for. The page may no longer be available or may be under construction.`"
                    :info="''" />
            </div>
        </section>
    </div>
</template>

<style scoped></style>
