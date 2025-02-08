<script setup lang="ts">

import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';

</script>

<template>
  <header>
    <HeaderSection />
  </header>
  <RouterView />
  <footer>
    <FooterSection />
  </footer>
</template>

<style scoped>
</style>
