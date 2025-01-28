<script lang="ts">
export default {
  methods: {
    dragging:function(event: DragEvent)  {
        if(event.pageY > 800) {
            window.location.href = "#introduction"
        }
    },
  },
};
</script>

<template>
    <!-- Welcome Section -->
    <section id="welcome" class="flex flex-col items-center h-full md:min-h-screen bg-[url('src/assets/bg-welcome.png')] bg-contain bg-no-repeat bg-center">
          <div class="flex justify-start items-start md:justify-between md:items-center h-fit md:h-[7rem] md:mx-6 px-[1.5rem] py-4 md:py-5 bg-white bg-opacity-5 max-w-[75rem] w-full rounded-full">
            <p class="text-center font-bold text-[2rem]">defer.money</p>
            <a href="#early-access-form"><button class="hidden md:block bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem]">Join the Waiting List</button></a>
          </div>
          <div class="flex flex-grow flex-col w-full h-full items-center mt-24 mb-12 md:mb-0 md:mt-0 justify-items-start md:justify-center gap-12">
            <div class="gap-4 items-center justify-center flex flex-col">
              <p class="font-normal text-[1rem] md:text-[1.4rem] tracking-[0.25rem]">Welcome to new era</p>
              <h1 class="font-extrabold text-[2rem] md:text-[3.5rem] text-center leading-tight">Take Control of Your Payments</h1>
              <p class="font-normal text-[1rem] md:text-[1.25rem] leading-normal text-center text-white text-opacity-70">Defer your payments to the next billing cycle.
                <span class="md:font-bold md:block">Save interest, avoid fees, and stay stress-free.</span>
              </p>
            </div>
            <a href="#early-access-form"><button class="bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem]">Join the Waiting List</button></a>
            <div class="h-full mt-40 hidden md:flex gap-6 flex-col">
              <a href="#"><img width="40px" height="40px" draggable="true" class="animate-bounce cursor-pointer" v-on:drag="dragging" src="../assets/drag-button.png" /></a>
              <img width="18px" height="2px" class="self-center" src="../assets/drag-arrow.png" />
            </div>
           </div>
      </section>
</template>

<style scoped>
</style>
