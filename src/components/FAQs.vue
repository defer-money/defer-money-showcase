<script setup lang="ts">
  let openFaqId: null|number = null;

  function toggleFaq(id: number):void {
    const faq = document.getElementById(`faq-${id}`);
    const button = document.getElementById(`button-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const title = document.getElementById(`title-${id}`);
    const isOpen = faq?.classList.contains('h-auto');

    // Close the currently open FAQ if it's different
    if (openFaqId && openFaqId !== id) {
      const openFaq = document.getElementById(`faq-${openFaqId}`);
      const openButton = document.getElementById(`button-${openFaqId}`);
      const openedIcon = document.getElementById(`icon-${openFaqId}`);
      const openedTitle = document.getElementById(`title-${openFaqId}`);
      
      openFaq?.classList.remove('h-auto', 'opacity-100', 'translate-y-0');
      openFaq?.classList.add('h-0', 'opacity-0', 'translate-y-[-8px]');
      // openButton?.classList.remove('bg-gradient-to-r', 'from-[#763AF5]', 'to-[#A604F2]');
      openedTitle?.classList.remove('text-white');
      openedIcon?.classList.remove('-rotate-180');
    }

    // Toggle the clicked FAQ
    if (isOpen) {
      faq?.classList.remove('h-auto', 'opacity-100', 'translate-y-0');
      faq?.classList.add('h-0', 'opacity-0', 'translate-y-[-8px]');
      // button?.classList.remove('bg-gradient-to-r', 'from-[#763AF5]', 'to-[#A604F2]');
      title?.classList.remove('text-white');
      icon?.classList.remove('-rotate-180');
    } else {
      faq?.classList.remove('h-0', 'opacity-0', 'translate-y-[-8px]');
      faq?.classList.add('h-auto', 'opacity-100', 'translate-y-0');
      // button?.classList.add('bg-gradient-to-r', 'from-[#763AF5]', 'to-[#A604F2]');
      title?.classList.add('text-white');
      icon?.classList.add('-rotate-180');
    }

    // Update the open FAQ ID
    openFaqId = isOpen ? null : id;
  }
</script>

<template>
  <!-- FAQ -->
  <section class="flex flex-col my-12 md:mx-12 md:mb-12 md:mt-24 gap-12">
    <div class="flex flex-col items-center">
      <p class="font-extrabold text-[3rem]">FAQs</p>
      <p class="font-medium text-white text-opacity-70 tracking-[-.025]">Here are some frequently asked questions</p>
    </div>
    <div class="flex flex-col w-full gap-4">
      <!-- FAQ Item 1 -->
      <div id="button-1" 
        class="group w-full cursor-pointer rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        @click="toggleFaq(1)"
      >
        <div class="flex w-full justify-between items-center p-6 transition-all duration-300">
          <div id="title-1" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
            Will using defer.money affect my credit score?
          </div>
          <svg id="icon-1" class="h-6 w-6 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div id="faq-1" class="h-0 opacity-0 translate-y-[-8px] transition-all duration-300 ease-out px-6 pb-6">
          <p class="text-white text-opacity-70">No, as long as you repay the deferred amount on time, your credit score will not be negatively impacted. In fact, we help you avoid late payments.</p>
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div id="button-2" 
        class="group w-full cursor-pointer rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        @click="toggleFaq(2)"
      >
        <div class="flex w-full justify-between items-center p-6 transition-all duration-300">
          <div id="title-2" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
            Will defer.money appear as a loan in my credit history?
          </div>
          <svg id="icon-2" class="h-6 w-6 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div id="faq-2" class="h-0 opacity-0 translate-y-[-8px] transition-all duration-300 ease-out px-6 pb-6">
          <p class="text-white text-opacity-70">Yes, deferring a payment through defer.money will be reflected as a short-term loan in your credit history, as required by regulations.</p>
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div id="button-3" 
        class="group w-full cursor-pointer rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        @click="toggleFaq(3)"
      >
        <div class="flex w-full justify-between items-center p-6 transition-all duration-300">
          <div id="title-3" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
            What is the maximum amount I can defer?
          </div>
          <svg id="icon-3" class="h-6 w-6 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div id="faq-3" class="h-0 opacity-0 translate-y-[-8px] transition-all duration-300 ease-out px-6 pb-6">
          <p class="text-white text-opacity-70">This will depend on your credit score and overall credit card limit.</p>
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div id="button-4" 
        class="group w-full cursor-pointer rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        @click="toggleFaq(4)"
      >
        <div class="flex w-full justify-between items-center p-6 transition-all duration-300">
          <div id="title-4" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
            Will I still earn rewards or cashback on deferred payments?
          </div>
          <svg id="icon-4" class="h-6 w-6 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div id="faq-4" class="h-0 opacity-0 translate-y-[-8px] transition-all duration-300 ease-out px-6 pb-6">
          <p class="text-white text-opacity-70">Yes, rewards or cashback on the original transaction will remain unaffected.</p>
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div id="button-5" 
        class="group w-full cursor-pointer rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
        @click="toggleFaq(5)"
      >
        <div class="flex w-full justify-between items-center p-6 transition-all duration-300">
          <div id="title-5" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
            Can I defer the same payment twice?
          </div>
          <svg id="icon-5" class="h-6 w-6 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div id="faq-5" class="h-0 opacity-0 translate-y-[-8px] transition-all duration-300 ease-out px-6 pb-6">
          <p class="text-white text-opacity-70">No, you can only defer a payment once. The amount you can defer will be decided based on the credit card statement.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover {
  background: linear-gradient(90deg, rgba(118, 58, 245, 0.1) 0%, rgba(166, 4, 242, 0.1) 100%);
}
</style>