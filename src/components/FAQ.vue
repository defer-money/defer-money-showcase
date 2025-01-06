<template>
      <!-- FAQ -->
       <section class="flex flex-col my-12 md:mx-12 md:mb-12 md:mt-24 gap-12">
        <div class="flex flex-col items-center">
          <p class="font-extrabold text-[3rem]">FAQs</p>
          <p class="font-medium text-white text-opacity-70 tracking-[-.025]">Here are some frequently asked questions</p>
        </div>
        <div class="flex flex-col w-full bg-white bg-opacity-5 rounded-3xl md:p-6">
        <!-- FAQ Item 1 -->
          <div id="button-1" class="flex flex-col w-full cursor-pointer rounded-lg p-6 gap-6" @click="toggleFaq(1)">
            <div
              class="flex w-full justify-between items-center gap-6"
              >
              <div id="title-1" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
                Will using Defer.Money affect my credit score?
              </div>
              <svg id="icon-1" class="h-12 w-12 transition-transform transform" viewBox="0 0 48 49">
                <rect id="icon-bg-1" y="0.195312" width="48" height="48" rx="24" fill="#F3F5F6"/>
                <path id="icon-path-1" fill-rule="evenodd" clip-rule="evenodd" d="M25 17.1953H23V23.1953H17V25.1953H23V31.1953H25V25.1953H31V23.1953H25V17.1953Z" fill="#050020"/>
              </svg>
            </div>
            <div id="faq-1" class="hidden text-dark-custom-blue text-base md:text-lg">
              No, as long as you repay the deferred amount on time, your credit score will not be negatively impacted. In fact,we help you avoid late payments.
            </div>
          </div>
          <!-- FAQ Item 2 -->
          <div id="button-2" class="flex flex-col w-full cursor-pointer rounded-lg p-6 gap-6" @click="toggleFaq(2)">
            <div
              class="flex w-full justify-between items-center gap-6"
              >
              <div id="title-2" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
                Will Defer.Money appear as a loan in my credit history?
              </div>
              <svg id="icon-2" class="h-12 w-12 transition-transform transform" viewBox="0 0 48 49">
                <rect id="icon-bg-2" y="0.195312" width="48" height="48" rx="24" fill="#F3F5F6"/>
                <path id="icon-path-2" fill-rule="evenodd" clip-rule="evenodd" d="M25 17.1953H23V23.1953H17V25.1953H23V31.1953H25V25.1953H31V23.1953H25V17.1953Z" fill="#050020"/>
              </svg>
            </div>
            <div id="faq-2" class="hidden text-dark-custom-blue text-base md:text-lg">
                Yes, deferring a payment through Defer.Money will be reflected as a short-term loan in your credit history, as required by regulations.
            </div>
          </div>
          <!-- FAQ Item 3 -->
          <div id="button-3" class="flex flex-col w-full cursor-pointer rounded-lg p-6 gap-6" @click="toggleFaq(3)">
            <div
              class="flex w-full justify-between items-center gap-6"
              >
              <div id="title-3" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
                What is the maximum amount I can defer?
              </div>
              <svg id="icon-3" class="h-12 w-12 transition-transform transform" viewBox="0 0 48 49">
                <rect id="icon-bg-3" y="0.195312" width="48" height="48" rx="24" fill="#F3F5F6"/>
                <path id="icon-path-3" fill-rule="evenodd" clip-rule="evenodd" d="M25 17.1953H23V23.1953H17V25.1953H23V31.1953H25V25.1953H31V23.1953H25V17.1953Z" fill="#050020"/>
              </svg>
            </div>
            <div id="faq-3" class="hidden text-dark-custom-blue text-base md:text-lg">
                This will depend on your credit score and overall credit card limit.
            </div>
          </div>
          <!-- FAQ Item 4 -->
          <div id="button-4" class="flex flex-col w-full cursor-pointer rounded-lg p-6 gap-6" @click="toggleFaq(4)">
            <div
              class="flex w-full justify-between items-center gap-6"
              >
              <div id="title-4" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
                Will using Defer.Money impact my credit card's limit?
              </div>
              <svg id="icon-4" class="h-12 w-12 transition-transform transform" viewBox="0 0 48 49">
                <rect id="icon-bg-4" y="0.195312" width="48" height="48" rx="24" fill="#F3F5F6"/>
                <path id="icon-path-4" fill-rule="evenodd" clip-rule="evenodd" d="M25 17.1953H23V23.1953H17V25.1953H23V31.1953H25V25.1953H31V23.1953H25V17.1953Z" fill="#050020"/>
              </svg>
            </div>
            <div id="faq-4" class="hidden text-dark-custom-blue text-base md:text-lg">
                Yes, the deferred amount will remain blocked against your credit limit until it’s repaid.
            </div>
          </div>
          <!-- FAQ Item 5 -->
          <div id="button-5" class="flex flex-col w-full cursor-pointer rounded-lg p-6 gap-6" @click="toggleFaq(5)">
            <div
              class="flex w-full justify-between items-center gap-6"
              >
              <div id="title-5" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
                Will I still earn rewards or cashback on deferred payments?
              </div>
              <svg id="icon-5" class="h-12 w-12 transition-transform transform" viewBox="0 0 48 49">
                <rect id="icon-bg-5" y="0.195312" width="48" height="48" rx="24" fill="#F3F5F6"/>
                <path id="icon-path-5" fill-rule="evenodd" clip-rule="evenodd" d="M25 17.1953H23V23.1953H17V25.1953H23V31.1953H25V25.1953H31V23.1953H25V17.1953Z" fill="#050020"/>
              </svg>
            </div>
            <div id="faq-5" class="hidden text-dark-custom-blue text-base md:text-lg">
                Yes, rewards or cashback on the original transaction will remain unaffected.
            </div>
          </div>
          <!-- FAQ Item 6 -->
          <div id="button-6" class="flex flex-col w-full cursor-pointer rounded-lg p-6 gap-6" @click="toggleFaq(6)">
            <div
              class="flex w-full justify-between items-center gap-6"
              >
              <div id="title-6" class="w-fit font-semibold text-xl md:text-2xl text-white text-opacity-80">
                Can I defer the same payment twice?
              </div>
              <svg id="icon-6" class="h-12 w-12 transition-transform transform" viewBox="0 0 48 49">
                <rect id="icon-bg-6" y="0.195312" width="48" height="48" rx="24" fill="#F3F5F6"/>
                <path id="icon-path-6" fill-rule="evenodd" clip-rule="evenodd" d="M25 17.1953H23V23.1953H17V25.1953H23V31.1953H25V25.1953H31V23.1953H25V17.1953Z" fill="#050020"/>
              </svg>
            </div>
            <div id="faq-6" class="hidden text-dark-custom-blue text-base md:text-lg">
                No, you can only defer a payment once. The amount you can defer will be decided based on the credit card statement.
            </div>
          </div>
        </div>
       </section>
</template>

<style scoped>
</style>

<script setup>
  let openFaqId = null;  // To track the currently open FAQ

  function toggleFaq(id) {
    const faq = document.getElementById(`faq-${id}`);
    const button = document.getElementById(`button-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const iconBg = document.getElementById(`icon-bg-${id}`);
    const iconPath = document.getElementById(`icon-path-${id}`);
    const title = document.getElementById(`title-${id}`);
    const isOpen = !!faq.style.display && faq.style.display !== "none";
    button.style.backgroundColor = isOpen ? 'transparent' : '#F2EBFD';
    title.style.color = isOpen ? 'white' : '#050020';
    title.style.opacity = isOpen ? '80%' : '100%';
    iconBg.style.fill = isOpen ? '#F3F5F6' : '#050020';
    iconPath.style.fill = isOpen ? "#050020" : '#F3F5F6';

    // Close the currently open FAQ if it's different
    if (openFaqId && openFaqId !== id) {
      const openFaq = document.getElementById(`faq-${openFaqId}`);
      const openButton = document.getElementById(`button-${openFaqId}`);
      const openedIcon = document.getElementById(`icon-${openFaqId}`);
      const openedtitle = document.getElementById(`title-${openFaqId}`);
      const openedIconBg = document.getElementById(`icon-bg-${openFaqId}`);
      const openedIconPath = document.getElementById(`icon-path-${openFaqId}`);
      openButton.style.backgroundColor = 'transparent';
      openedtitle.style.color = 'white';
      openedtitle.style.opacity = '80%';
      openFaq.style.display = "none";
      openedIconBg.style.fill = '#F3F5F6';
      openedIconPath.style.fill = '#050020';
      openedIcon.classList.remove("rotate-45");
    }

    // Toggle the clicked FAQ
    faq.style.display = isOpen ? 'none' : 'block';
    icon.classList.toggle("rotate-45");

    // Update the open FAQ ID
    openFaqId = isOpen ? null : id;
  }
</script>
