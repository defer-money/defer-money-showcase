<script lang="ts">
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      },
      submitted: false,
    };
  },
  methods: {
    async handleSubmit() {
      console.log('Form Data:', this.formData);

      const data = {
        values: [this.formData.firstName, this.formData.lastName, this.formData.phoneNumber, this.formData.email],
      };
      let result = undefined;
      try {
          const response = await fetch(import.meta.env.VITE_GSHEET_URL, {
              method: 'POST',
              body: JSON.stringify(data)
          });

          result = await response.text();
          // alert(result);  // Show success message
      } catch (error) {
          alert('Error: ' + error);
      }

      this.submitted = result !== undefined; // Show submitted data
    },
  },
};
</script>

<template>
    <!-- Form -->
    <section id="early-access-form" class="flex flex-col gap-12 md:mx-12 md:mt-24 md:mb-12">
        <div class="flex flex-col items-center">
          <p class="font-extrabold text-[2rem] md:text-[4rem] text-white tracking-tight">Get Earl<span class="bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">y Access</span></p>
          <p class="font-medium text-base md:text-2xl text-center text-white text-opacity-70 tracking-tight">Join the waiting list to experience payment freedom with Defer.Money</p>
        </div>
        <div class="flex w-full bg-white bg-opacity-5 md:p-6 gap-6">
          <div class="flex flex-col w-full p-6 gap-10 justify-center">
            <div>
              <p class="text-white text-[1.90rem] font-semibold tracking-tight">Fill out the form below</p>
              <p class="text-gray-400 text-lg font-normal tracking-tight">We will get back to you once we are live!</p>
            </div>
            <form @submit.prevent="handleSubmit">
              <div class="flex flex-col gap-6">
                <div class="flex gap-4 w-full">
                  <input v-model="formData.firstName" placeholder="First Name" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" />
                  <input placeholder="Last Name" v-model="formData.lastName" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" />
                </div>
                <input id="phoneNumber" name="phoneNumber" placeholder="PhoneNumber" type="number" minlength="10" maxlength="10" v-model="formData.phoneNumber" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" />
                <input placeholder="Email Address" type="email" v-model="formData.email" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" />
                <button class="bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-full font-semibold text-[1.25rem]" type="submit">Submit</button>
              </div>
          </form>
          </div>
          <img src="../assets/early-access.png" alt="Background" class="hidden lg:block md:max-h-[35rem] md:w-full object-fill" />
        </div>
    </section>
</template>

<style scoped>
</style>
