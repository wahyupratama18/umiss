<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>
