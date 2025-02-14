<script setup lang="ts">
</script>

<template>
    <div class="flex w-full justify-center">
        <div class="flex justify-start items-start md:justify-between md:items-center h-fit md:h-[7rem] md:mx-6 px-[1.5rem] py-4 md:py-5 bg-white bg-opacity-5 max-w-[75rem] w-full rounded-full">
            <a href="/">
                <p class="font-bold text-[2rem] text-white tracking-tight">defer.<span class="bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">money</span></p>
            </a>
            <a href="/#early-access-form">
              <button class="group relative bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-[18rem] font-semibold text-[1.25rem] transition-all duration-300 overflow-hidden">
                <div class="flex items-center gap-2 justify-center">
                  <span class="transform group-hover:-translate-x-2 transition-transform duration-300">
                    Join the Waiting List
                  </span>
                  <vue-feather type="plus"></vue-feather>
                  <Plus class="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </button>
            </a>
        </div>
    </div>
</template>

<style scoped>
</style>
