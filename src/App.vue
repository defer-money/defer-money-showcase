<script setup lang="ts">
import DeferCalculationSection from './components/DeferCalculationSection.vue';
import DeferKeyFeatures from './components/DeferKeyFeatures.vue';
import DeferWorkSection from './components/DeferWorkSection.vue';
import EarlyAccessFormSection from './components/EarlyAccessForm.vue';
import FAQ from './components/FAQs.vue';
import WelcomeSection from './components/WelcomeSection.vue';

</script>

<template>
    <main class="flex flex-col w-full self-center max-w-[85rem]">
      <!-- Welcome -->
       <WelcomeSection />
      <!-- Introducing Section -->
      <section id="introduction" class="h-full md:min-h-full p-6 gap-12 bg-white bg-opacity-5 md:p-12 rounded-[1.25rem]">
        <div class="flex w-full flex-col justify-center items-center">
          <p class="font-extralight text-[1.25rem] md:text-[1.4rem] tracking-[0.25rem]">Introducing</p>
          <p class="font-extrabold text-[2rem] md:text-[4rem] text-white tracking-tight">defer.<span class="bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">money</span></p>
        </div>
        <!-- Introduction image -->
        <div class="w-full h-[20rem] md:h-[40rem]">
          <img src="./assets/bg-introduction.png" alt="Background" class="w-full h-full object-contain" />
        </div>
      </section>
      <!-- How defer work -->
      <DeferWorkSection />
      <!-- Why defer.money -->
       <DeferKeyFeatures />
      <!-- Defer Calculator -->
      <DeferCalculationSection />
      <!-- Early Access -->
      <EarlyAccessFormSection />
      <!-- FAQ -->
      <FAQ />
    </main>
    <footer class="text-center w-full p-0 md:p-12">
      <p>&copy;defer.money. all rights reserved</p>
    </footer>
</template>

<style scoped>
</style>
