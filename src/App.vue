<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-dark flex flex-col">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>