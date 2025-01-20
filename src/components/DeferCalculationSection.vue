<script lang="ts">
import Slider from '@vueform/slider';
import { calculateDeferAmount, calculateEmiAmount, calculateMinDueAmount, currencyConversion } from '../utils/calculate.utils.ts';
import { reactive } from 'vue';

const vueformSliderState = reactive({
  value: 30
})
  export default {
    components: {
          Slider,
        },
    data() {
        return {
        vueformSliderState,
        amount: 1000,
        emiDifference : '₹782',
        minDueDifference: '₹423',
        deferResult: {
            fee: '₹47',
            interest: '₹0',
            totalRepayment: '₹1,047',
            totalRepaymentAmount: 1047,
        },
        emiResult: {
            fee: '₹24',
            interest: '₹286',
            totalRepayment: '₹2,048',
            totalRepaymentAmount: 2048,
        },
        minDueResult: {
            fee: '₹59',
            interest: '₹186',
            totalRepayment: '₹1,366',
            totalRepaymentAmount: 1366,
        },
        };
    },
    methods: {
        calculate() {
            // Input value from range type is string parse value before calc
            const amount = parseInt(this.amount.toString(), 10);
            this.deferResult = calculateDeferAmount(amount);
            this.emiResult = calculateEmiAmount(amount);
            this.minDueResult = calculateMinDueAmount(amount);
            this.emiDifference = currencyConversion(this.emiResult.totalRepaymentAmount - this.deferResult.totalRepaymentAmount);
            this.minDueDifference = currencyConversion(this.minDueResult.totalRepaymentAmount - this.deferResult.totalRepaymentAmount)
        },
    },
    };
</script>

<template>
    <!-- Defer Calculation section -->
    <section id="defer-calculator" class="flex flex-col w-full md:mx-12 my-12 md:my-24 gap-12 self-center">
    <p class="font-extrabold text-[2rem] md:text-[2.7rem] text-white text-center">Let&apos;s Do the Maths</p>
    <div class="w-full flex md:flex-row flex-col justify-between md:gap-12 gap-0">
        <!-- Amount Input -->
        <div class="flex flex-col text-center items-center min-w-[28rem] gap-6 p-6 bg-white bg-opacity-5">
            <div class="w-full flex flex-col md:items-start items-center">
                <p class="font-semibold text-[1.25rem] text-white">Your Bill Amount</p>
                <p class="font-regular text-[.75rem] text-gray">Enter the amount or use the slider to adjust the value</p>
            </div>
            <input id="amount" name="amount" @input="calculate" placeholder="Enter Amount" type="number" min="1000" max="100000" v-model="amount" class="bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60" />
            <input
                id="slider"
                type="range"
                min="1000"
                max="100000"
                v-model="amount"
                @input="calculate"
                class="w-full"
                />
            <div class="flex flex-col gap-4">
              <p class="font-semibold text-[1.25rem] text-white tracking-tight">Defer.Mone<span class="bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">y Advantage</span></p>
              <div class="gap-4 flex flex-row">
                <div class="flex flex-col items-center gap-3">
                    <img src="../assets/discount.png" alt="Background" class="w-6 h-6 object-cover" />
                    <p class="text-center">Interest-Free Purchases Stay Intact</p>
                </div>
                <div  class="flex flex-col items-center gap-3">
                    <img src="../assets/lock.png" alt="Background" class="w-6 h-6 object-cover" />
                    <p>No Long-Term Credit Lock-Up</p>
                </div>
                <div  class="flex flex-col items-center gap-3">
                    <img src="../assets/bill.png" alt="Background" class="w-6 h-6 object-cover" />
                    <p>Simple, Transparent Fees</p>
                </div>
              </div>
            </div>
        </div>
        <!-- Amount Comparsion-->
        <div class="flex flex-col w-full gap-8 p-6">
            <table>
                <thead class="bg-white bg-opacity-5">
                    <tr class="font-semibold">
                        <th></th>
                        <th>Defer.Money</th>
                        <th>6-Month EMI</th>
                        <th>Minimum Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="font-medium">
                        <td class="text-gray-400 font-normal">Upfront Fees</td>
                        <td>{{ deferResult.fee }}<span class="block w-fit font-semibold bg-[#4A3AFF] py-[2px] px-2 rounded-2xl text-xs">4% flat fee + GST</span></td>
                        <td>{{ emiResult.fee }}<span class="block font-medium text-[.65rem] text-gray-400">(2% Processing Fee + GST)</span></td>
                        <td>{{ minDueResult.fee }}<span class="block font-medium text-[.65rem] text-gray-400">(5% minimum due amount)</span></td>
                    </tr>
                    <tr class="font-medium">
                        <td class="text-gray-400 font-normal">Interest Charged</td>
                        <td>{{ deferResult.interest }}</td>
                        <td>{{ emiResult.interest }}<span class="block font-medium text-[.65rem] text-gray-400">(18% interest + GST)</span></td>
                        <td>{{ minDueResult.interest }}<span class="block font-medium text-[.65rem] text-gray-400">(36% interest + GST)</span></td>
                    </tr>
                    <tr class="font-medium">
                        <td class="text-gray-400 font-normal">Total Repayment</td>
                        <td>{{ deferResult.totalRepayment }}</td>
                        <td>{{ emiResult.totalRepayment }}</td>
                        <td>{{ minDueResult.totalRepayment }}</td>
                    </tr>
                    <tr class="lastrow bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-semibold">
                        <td class="rounded-l-xl">Savings with <span class="block">Defer.Money</span></td>
                        <td>{{ }}</td>
                        <td>Save {{ emiDifference }}<span class="block"> with defer.money</span></td>
                        <td class="rounded-r-xl">Save {{ minDueDifference }}<span class="block">with defer.money</span></td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>
    </section>
</template>

<style scoped>
table thead, table tbody {
    padding: 0px 16px;
}
table th, table tr {
  height: 4rem;
  text-align: left;
}
table th, table td {
  max-width: 1rem;
  padding: 0px 16px;
}
lastrow {
  text-align: center;
  border-radius: 12px;
}
</style>
