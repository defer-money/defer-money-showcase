<script setup lang="ts">
</script>

<template>
    <main class="flex flex-col">
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
      <section id="introduction" class="md:h-screen px-6 md:mx-24 md:my-12 gap-12 bg-white bg-opacity-5 md:p-12 rounded-lg">
        <div class="flex w-full flex-col justify-center items-center">
          <p class="font-extralight text-[1.25rem] md:text-[1.4rem] tracking-[0.25rem]">Introducing</p>
          <p class="font-extrabold text-[2rem] md:text-[4rem] tracking-[-0.10rem] text-white">Defer.<span class="text-white bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">Money</span></p>
        </div>
        <div class="w-full h-[20rem] md:h-[40rem]">
          <img src="./assets/bg-introduction.png" alt="Background" class="w-full h-full object-contain" />
        </div>
      </section>
      <section id="how-defer-works" class="flex flex-col w-fit md:mx-12 my-12 md:my-24 gap-12 self-center">
        <p class="font-extrabold text-[2rem] md:text-[2.7rem] text-white text-center">How does defer.money work?</p>
        <div class="w-full flex md:flex-row flex-col justify-center items-center md:gap-0 gap-12">
          <div class="flex flex-col text-center items-center min-w-72 gap-8">
            <div class="w-[5.5rem] h-[5.5rem] m-0 p-0">
              <img src="./assets/shop-credit-card.png" alt="Background" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="font-semibold text-[1.5rem] md:text-[2rem] text-white tracking-normal">Shop with your credit card</p>
              <p class="font-normal text-[1rem] md:text-[1.25rem] text-gray-400 tracking-[-0.06rem]">Make your payments using your credit card as usual</p>
            </div>
          </div>
          <div class="w-full hidden md:flex ml-[-.75rem] mr-3 self-start mt-10">
            <div class="h-3 w-3 rounded-full bg-[#9672FF]"></div>
            <div 
                class="w-full mt-1" 
                style="height: 3px;
                background-image: linear-gradient(90deg, transparent, transparent 50%, #050020 50%, #050020 100%),
                 linear-gradient(90deg, #9672FF, #4DDFFD);
                background-size: 20px 2px, 100% 2px;
                border: none;">
            </div>
            <div class="h-3 w-3 rounded-full bg-[#4DDFFD]"></div>
          </div>
          <div class="flex flex-col items-center text-center min-w-72 gap-8">
            <div class="w-[5.5rem] h-[5.5rem] m-0 p-0">
              <img src="./assets/defer-payments.png" alt="Background" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="font-semibold text-[1.5rem] md:text-[2rem] text-white tracking-normal">Defer your payments</p>
              <p class="font-normal text-[1rem] md:text-[1.25rem] text-gray-400 tracking-[-0.06rem]">The  payments are moved to the next billing cycle.</p>
            </div>
          </div>
          <div class="w-full hidden md:flex ml-[-.75rem] mr-3 self-start mt-10">
            <div class="h-3 w-3 rounded-full bg-[#4DDFFD]"></div>
            <div 
                class="w-full mt-1" 
                style="height: 3px;
                background-image: linear-gradient(90deg, transparent, transparent 50%, #050020 50%, #050020 100%),
                 linear-gradient(90deg, #4DDFFD, #9672FF);
                background-size: 20px 2px, 100% 2px;
                border: none;">
            </div>
            <div class="h-3 w-3 rounded-full bg-[#9672FF]"></div>
          </div>
          <div class="flex flex-col text-center items-center min-w-72 gap-8">
            <div class="w-[5.5rem] h-[5.5rem] m-0 p-0">
              <img src="./assets/repay-next-cycle.png" alt="Background" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="font-semibold text-[1.5rem] md:text-[2rem] text-white tracking-normal">Repay in the next cycle</p>
              <p class="font-normal text-[1rem] md:text-[1.25rem] text-gray-400 tracking-[-0.06rem]">Repay the transaction when the next cycle is due.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="text-center w-full p-0 md:p-12">
      <p>&copy;defer.money. all rights reserved</p>
    </footer>
</template>

<style scoped>
</style>
