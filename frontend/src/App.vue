<template>
  <div id="app">
    <Navbar />
    
    <main class="container mt-4">
      <router-view /> 
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style>
body {
  background-color: #f8f9fa; 
}
</style>