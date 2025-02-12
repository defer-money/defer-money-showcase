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
      errors: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      },
      submitted: false,
      loading: false,
    };
  },
  methods: {
    validateForm ()  {
      this.errors.firstName = this.formData.firstName.length >= 3 ? '' : 'First name must be at least 3 characters long';
      this.errors.lastName = this.formData.lastName.length >= 1 ? '' : 'Last name must be at least 1 character long';
      this.errors.phoneNumber = /^\d{10}$/.test(this.formData.phoneNumber) ? '' : 'Phone number must be exactly 10 digits';
      this.errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email) ? '' : 'Enter a valid email address';
    },

    async handleSubmit() {
      this.validateForm();
      console.log('Form Data:', this.formData);

      if(Object.values(this.errors).filter(each => each !== '').length > 0) {
        return;
      }

      const data = {
        values: [this.formData.firstName, this.formData.lastName, this.formData.phoneNumber, this.formData.email],
      };
      let result = undefined;
      this.loading = true;

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
      this.loading = false;

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
          <p class="font-medium text-base md:text-2xl text-center text-white text-opacity-70 tracking-tight">Join the waiting list to experience payment freedom with defer.money</p>
        </div>
        <div class="flex w-full bg-white bg-opacity-5 md:p-6 gap-6 rounded-[1.25rem]">
          <div v-if="submitted" class="flex flex-col w-full p-5 gap-5 md:p-6 md:gap-10 justify-center items-center">
             <img src="/assets/form-submitted.png" alt="Background" class="h-16 w-16 md:h-24 md:w-24 mt-6" />
              <p class="font-regular text-center md:max-w-[30rem] mb-6">Awesome! Thanks for joining the <span class="font-bold">defer.money </span>community. We're thrilled to have you! We'll be in touch soon with the next steps.</p>
          </div>
          <div v-else class="flex flex-col w-full p-6 gap-10 justify-center">
            <div>
              <p class="text-white text-[1.90rem] font-semibold tracking-tight">Fill out the form below</p>
              <p class="text-gray-400 text-lg font-normal tracking-tight">We will get back to you once we are live!</p>
            </div>
            <form @submit.prevent="handleSubmit">
              <div class="flex flex-col gap-6">
                <div class="flex gap-4 w-full justify-evenly">
                  <div class="w-full">
                    <input v-model="formData.firstName" placeholder="First Name" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" :disabled="loading" />
                    <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
                  </div>
                  <div class="w-full">
                    <input placeholder="Last Name" v-model="formData.lastName" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" :disabled="loading" />
                    <p v-if="errors.lastName" class="error">{{ errors.lastName }}</p>
                  </div>
                </div>
                <div>
                  <input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" type="number" minlength="10" maxlength="10" v-model="formData.phoneNumber" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" :disabled="loading" />
                  <p v-if="errors.phoneNumber" class="error">{{ errors.phoneNumber }}</p>
                </div>
                <div>
                  <input placeholder="Email Address" type="email" v-model="formData.email" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" :disabled="loading" />
                  <p v-if="errors.email" class="error">{{ errors.email }}</p>
                </div>
                <span v-if="loading" class="flex justify-center" >
                  <dotlottie-vue class="h-48 w-48" autoplay loop src="https://lottie.host/45197d44-0c5c-4306-827d-bd5275c91263/bYmYXLtpbw.lottie" />
                </span>
                <button v-else class="bg-gradient-to-r from-[#763AF5] to-[#A604F2] rounded-full h-[4.5rem] w-full font-semibold text-[1.25rem]" type="submit" :disabled="loading">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <img src="/assets/early-access.png" alt="Background" class="hidden lg:block md:max-h-[35rem] md:w-full object-fill" />
        </div>
    </section>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}
</style>
