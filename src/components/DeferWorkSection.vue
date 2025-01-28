<script setup lang="ts">

</script>

<template>
    <!-- How defer work section -->
    <section id="how-defer-works" class="flex relative items-center">
        <img class="hidden md:flex absolute min-w-full min-h-full w-[50rem] object-cover -top-[40%] -right-[52%]" src="../assets/bg-ellipse.png" />
        <div class="flex flex-col w-full md:mx-12 my-12 md:my-24 gap-12 self-center">
            <p class="font-extrabold text-[2rem] md:text-[2.7rem] text-white text-center">How does defer.money work?</p>
            <div class="w-full flex md:flex-row flex-col justify-center items-center md:gap-0 gap-12">
                <!-- Working Step 1 -->
                <div class="flex flex-col text-center items-center min-w-72 gap-8">
                <div class="w-[5.5rem] h-[5.5rem] m-0 p-0">
                    <img src="../assets/shop-credit-card.png" alt="Background" class="w-full h-full object-cover" />
                </div>
                <div>
                    <p class="font-semibold text-[1.5rem] md:text-[2rem] text-white tracking-normal">Shop with your credit card</p>
                    <p class="font-normal text-[1rem] md:text-[1.25rem] text-gray-400 tracking-[-0.06rem]">Make your payments using your credit card as usual</p>
                </div>
                </div>
                <!-- horizontal dotted line 1-->
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
                <!-- Working Step 2 -->
                <div class="flex flex-col items-center text-center min-w-72 gap-8">
                <div class="w-[5.5rem] h-[5.5rem] m-0 p-0">
                    <img src="../assets/defer-payments.png" alt="Background" class="w-full h-full object-cover" />
                </div>
                <div>
                    <p class="font-semibold text-[1.5rem] md:text-[2rem] text-white tracking-normal">Defer your payments</p>
                    <p class="font-normal text-[1rem] md:text-[1.25rem] text-gray-400 tracking-[-0.06rem]">The  payments are moved to the next billing cycle.</p>
                </div>
                </div>
                <!-- horizontal dotted line 2-->
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
                <!-- Working Step 3 -->
                <div class="flex flex-col text-center items-center min-w-72 gap-8">
                <div class="w-[5.5rem] h-[5.5rem] m-0 p-0">
                    <img src="../assets/repay-next-cycle.png" alt="Background" class="w-full h-full object-cover" />
                </div>
                <div>
                    <p class="font-semibold text-[1.5rem] md:text-[2rem] text-white tracking-normal">Repay in the next cycle</p>
                    <p class="font-normal text-[1rem] md:text-[1.25rem] text-gray-400 tracking-[-0.06rem]">Repay the transaction when the next cycle is due.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
