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
            amount: 10000,
            deferResult: {
                fee: 472,
                interest: 0,
                totalRepayment: 10472,
            },
            emiResult: {
                fee: 236,
                interest: 532,
                totalRepayment: 10863,
            },
            emiPercentDiff: 45,
            minDuePercentDiff: 31,
            minDueResult: {
                fee: 500,
                interest: 683,
                totalRepayment: 10683,
            },
            currencyConversion,
        };
    },
    methods: {
        calculate() {
            // Input value from range type is string parse value before calc
            const amount = parseInt((this.amount || '0').toString(), 10);
            this.deferResult = calculateDeferAmount(amount);
            this.emiResult = calculateEmiAmount(amount);
            this.minDueResult = calculateMinDueAmount(amount);
            this.emiPercentDiff = Math.round(100 * (this.emiResult.totalRepayment - this.deferResult.totalRepayment) / (this.emiResult.totalRepayment - amount));
            this.minDuePercentDiff = Math.round(100 * (this.minDueResult.totalRepayment - this.deferResult.totalRepayment) / (this.minDueResult.totalRepayment - amount));
        },
    },
};
</script>

<template>
    <!-- Defer Calculation section -->
    <section id="defer-calculator" class="flex flex-col w-full md:px-12 py-12 md:py-24 gap-12 self-center">
        <p class="font-extrabold text-[2rem] md:text-[2.7rem] text-white text-center">Let&apos;s Do the Math</p>
        <div class="w-full flex lg:flex-row flex-col justify-between gap-12">
            <!-- Amount Input -->
            <div
                class="flex flex-col text-center items-center w-fit lg:max-w-[28rem] gap-6 px-0 md:p-6 md:bg-white md:bg-opacity-5 border-dark-custom-blue rounded-[1.25rem]">
                <div class="w-full flex flex-col md:items-start items-center">
                    <p class="font-semibold text-[1.25rem] text-white">Your Bill Amount</p>
                    <p class="font-regular text-[.75rem] text-gray">Enter the amount or use the slider to adjust the
                        value</p>
                </div>
                <input 
                    id="amount"
                    name="amount"
                    @input="calculate"
                    placeholder="Enter Amount"
                    type="number"
                    min="10000" 
                    max="500000" 
                    v-model="amount"
                    class="block bg-white bg-opacity-5 p-3 w-full rounded-lg text-white text-opacity-60 border-white border-opacity-20 border-[0.064rem]" 
                />
                <input 
                    id="slider" 
                    type="range" 
                    min="10000" 
                    max="500000" 
                    v-model="amount"
                    @input="calculate" 
                    class="w-full"
                />
                <div class="flex flex-col gap-4">
                    <p class="font-semibold text-[1.25rem] text-white tracking-tight">defer.mone<span
                            class="bg-gradient-to-r from-[#FFFFFF] from-0% via-[#763AF5] via-48% to-[#A604F2] to-99% bg-clip-text text-transparent">y
                            Advantage</span></p>
                    <div class="gap-4 flex flex-row">
                        <div class="flex flex-col items-center gap-3">
                            <img src="../assets/discount.png" alt="Background" class="w-6 h-6 object-cover" />
                            <p class="text-center">Interest-Free Purchases Stay Intact</p>
                        </div>
                        <div class="flex flex-col items-center gap-3">
                            <img src="../assets/lock.png" alt="Background" class="w-6 h-6 object-cover" />
                            <p>No Long-Term Credit Lock-Up</p>
                        </div>
                        <div class="flex flex-col items-center gap-3">
                            <img src="../assets/bill.png" alt="Background" class="w-6 h-6 object-cover" />
                            <p>Simple, Transparent Fees</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Amount Comparsion Web-->
            <div class="flex-col w-full gap-8 md:p-6 bg-white bg-opacity-5 rounded-2xl hidden lg:flex">
                <table>
                    <thead class="bg-white bg-opacity-5">
                        <tr class="font-semibold">
                            <th class="rounded-l-xl"></th>
                            <th>defer.money</th>
                            <th>6-Month EMI</th>
                            <th class="rounded-r-xl">Minimum Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="font-medium">
                            <td class="text-white text-opacity-50 font-normal">Upfront Fees</td>
                            <td>{{ currencyConversion(deferResult.fee) }}<span
                                    class="block w-fit font-semibold bg-[#4A3AFF] py-[2px] px-2 rounded-2xl text-xs">4%
                                    flat fee + GST</span></td>
                            <td>{{ currencyConversion(emiResult.fee) }}<span class="block font-medium text-[.65rem] text-gray-400">(2%
                                    Processing Fee + GST)</span></td>
                            <td>{{ currencyConversion(minDueResult.fee) }}<span class="block font-medium text-[.65rem] text-gray-400">(5%
                                    minimum due amount)</span></td>
                        </tr>
                        <tr class="font-medium">
                            <td class="text-white text-opacity-50 font-normal">Interest Charged</td>
                            <td>{{ currencyConversion(deferResult.interest) }}</td>
                            <td>{{ currencyConversion(emiResult.interest) }}<span class="block font-medium text-[.65rem] text-gray-400">(18%
                                    interest + GST)</span></td>
                            <td>{{ currencyConversion(minDueResult.interest) }}<span
                                    class="block font-medium text-[.65rem] text-gray-400">(36% interest + GST)</span>
                            </td>
                        </tr>
                        <tr class="font-medium">
                            <td class="text-white text-opacity-50 font-normal">Total Repayment</td>
                            <td>{{ currencyConversion(deferResult.totalRepayment) }}</td>
                            <td>{{ currencyConversion(emiResult.totalRepayment) }}</td>
                            <td>{{ currencyConversion(minDueResult.totalRepayment) }}</td>
                        </tr>
                        <tr class="lastrow bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-semibold">
                            <td class="rounded-l-xl">Savings with <span class="block">defer.money</span></td>
                            <td>{{ }}</td>
                            <td>Save {{ currencyConversion(emiResult.totalRepayment - deferResult.totalRepayment) }} ({{ emiPercentDiff }}%)</td>
                            <td class="rounded-r-xl">Save {{ currencyConversion(minDueResult.totalRepayment - deferResult.totalRepayment) }} ({{ minDuePercentDiff  }}%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Amount Comparsion Mobile-->
            <div class="flex-col w-full gap-6 flex lg:hidden">
                <table>
                    <thead class="bg-white bg-opacity-5">
                        <tr class="font-semibold p-2">
                            <th class="rounded-l-xl">Scenario #1</th>
                            <th class="rounded-r-xl">defer.money</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Amount Deferred</td>
                            <td>{{ amount }}</td>
                        </tr>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Fee/Interest Charged</td>
                            <td>{{ deferResult.fee }}<span
                                    class="block w-fit font-semibold bg-[#4A3AFF] py-[2px] px-2 rounded-2xl text-xs">4%
                                    flat fee + GST</span></td>
                        </tr>
                        <tr class=" bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-semibold">
                            <td class="rounded-l-xl border-0">Total Repayment</td>
                            <td class="rounded-r-xl border-0">{{ currencyConversion(deferResult.totalRepayment) }}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead class="bg-white bg-opacity-5">
                        <tr class="font-semibold p-2">
                            <th class="rounded-l-xl">Scenario #2</th>
                            <th class="rounded-r-xl">6-Month EMI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Amount Deferred</td>
                            <td>{{ currencyConversion(amount) }}</td>
                        </tr>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Fee/Interest Charged</td>
                            <td>{{ currencyConversion(emiResult.interest) }}<span
                                    class="block w-fit font-semibold text-gray-400 text-xs">(18% annual interest) + {{ currencyConversion(emiResult.fee) }} platform fees</span></td>
                        </tr>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Total Repayment</td>
                            <td>{{ currencyConversion(emiResult.totalRepayment) }}</td>
                        </tr>
                        <tr class=" bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-semibold">
                            <td class="rounded-l-xl border-0">Savings with defer.money</td>
                            <td class="rounded-r-xl border-0">Save {{ currencyConversion(emiResult.totalRepayment - deferResult.totalRepayment) }} ({{ emiPercentDiff }}%)</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead class="bg-white bg-opacity-5">
                        <tr class="font-semibold p-2">
                            <th class="rounded-l-xl">Scenario #3</th>
                            <th class="rounded-r-xl">Minimum Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Amount Deferred</td>
                            <td>{{ currencyConversion(amount) }}</td>
                        </tr>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Fee/Interest Charged</td>
                            <td>{{ currencyConversion(minDueResult.interest) }}<span
                                    class="block w-fit font-semibold text-gray-400 rounded-2xl text-xs">(interest at 36% APR for 6 months)</span></td>
                        </tr>
                        <tr class="font-medium py-2">
                            <td class="text-white text-opacity-50 font-normal">Total Repayment</td>
                            <td>{{ currencyConversion(minDueResult.totalRepayment) }}</td>
                        </tr>
                        <tr class=" bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-semibold">
                            <td class="rounded-l-xl border-0">Savings with defer.money</td>
                            <td class="rounded-r-xl border-0">Save {{ currencyConversion(minDueResult.totalRepayment - deferResult.totalRepayment) }} ({{ minDuePercentDiff }}%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<style scoped>
table thead,
table tbody {
    padding: 0px 16px;
}

table th,
table tr {
    height: 4rem;
    text-align: left;
    padding: 16px;
    border: none;
}

table th,
table td {
    max-width: 1rem;
    padding: 16px;
    border: none;
}

lastrow {
    text-align: center;
    border-radius: 12px;
}
</style>
