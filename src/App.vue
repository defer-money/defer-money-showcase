<script setup lang="ts">
import DeferCalculationSection from './components/DeferCalculationSection.vue';
import DeferKeyFeatures from './components/DeferKeyFeatures.vue';
import DeferWorkSection from './components/DeferWorkSection.vue';
import EarlyAccessFormSection from './components/EarlyAccessForm.vue';
import FAQ from './components/FAQs.vue';

</script>

<template>
    <main class="flex flex-col w-full self-center max-w-[85rem]">
      <!-- Welcome -->
      <section id="welcome" class="flex flex-col items-center md:h-screen bg-[url('src/assets/bg-welcome.png')]">
          <div class="flex justify-start items-start md:justify-between md:items-center md:h-[7rem] md:mx-6 px-[1.5rem] py-4 md:py-5 bg-white bg-opacity-5 max-w-[75rem] w-full rounded-full">
            <p class="text-center font-bold text-[2rem]">defer.money</p>
            <button class="hidden md:block bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem]">Join the Waiting List</button>
          </div>
          <div class="flex flex-col w-full h-[24rem] md:h-screen items-center mt-24 md:mt-0 justify-items-start md:justify-center gap-12">
            <div class="gap-4 items-center justify-center flex flex-col">
              <p class="font-normal text-[1rem] md:text-[1.4rem] tracking-[0.25rem]">Welcome to new era</p>
              <h1 class="font-extrabold text-[2rem] md:text-[3.5rem] text-center leading-tight">Take Control of Your Payments</h1>
              <p class="font-normal text-[1rem] md:text-[1.25rem] leading-normal text-center text-white text-opacity-70">Defer your payments to the next billing cycle.
                <span class="md:font-bold md:block">Save interest, avoid fees, and stay stress-free.</span>
              </p>
            </div>
            <button class="bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem]">Join the Waiting List</button>
        </div>
      </section>
      <!-- Introducing Section -->
      <section id="introduction" class="md:h-screen px-6 md:mx-24 md:my-12 gap-12 bg-white bg-opacity-5 md:p-12 rounded-[1.25rem]">
        <div class="flex w-full flex-col justify-center items-center">
          <p class="font-extralight text-[1.25rem] md:text-[1.4rem] tracking-[0.25rem]">Introducing</p>
          <p class="font-extrabold text-[2rem] md:text-[4rem] tracking-[-0.10rem] text-white">Defer.<span class="text-white bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">Money</span></p>
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
