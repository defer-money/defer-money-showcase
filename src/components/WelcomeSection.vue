<script setup lang="ts">
</script>

<template>
    <!-- Welcome Section -->
    <section id="welcome" class="flex flex-col items-center h-full md:min-h-screen bg-[url('../assets/bg-welcome.png')] bg-contain bg-no-repeat bg-center">
          <div class="flex justify-start items-start md:justify-between md:items-center h-fit md:h-[7rem] md:mx-6 px-[1.5rem] py-4 md:py-5 bg-white bg-opacity-5 max-w-[75rem] w-full rounded-full">
            <p class="text-center font-bold text-[2rem]">defer.money</p>
            <a href="#early-access-form"><button class="hidden md:block bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem]">Join the Waiting List</button></a>
          </div>
          <div class="flex flex-grow flex-col w-full h-full items-center mt-24 mb-12 md:mb-0 md:mt-0 justify-items-center md:justify-center gap-12">
            <div class="gap-4 items-center justify-center flex flex-col">
              <p class="font-normal text-[1rem] md:text-[1.4rem] tracking-[0.25rem]">Welcome to new era</p>
              <h1 class="font-extrabold text-[2rem] md:text-[3.5rem] text-center leading-tight">Take Control of Your Payments</h1>
              <p class="font-normal text-[1rem] md:text-[1.25rem] leading-normal text-center text-white text-opacity-70">Defer your payments to the next billing cycle.
                <span class="md:font-bold md:block">Save interest, avoid fees, and stay stress-free.</span>
              </p>
            </div>
            <a href="#early-access-form"><button class="bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem]">Join the Waiting List</button></a>
           </div>
            <a href="#introduction" class="md:block hidden">
              <dotlottie-vue style="height: 250px; width: 250px;" autoplay loop src="https://lottie.host/2290360a-74a6-4273-9a73-0fbd20487173/HNXiIqpYh4.lottie" />
            </a>
      </section>
</template>

<style scoped>
</style>
