  export function calculateDeferAmount(value: number) {
    // Defer Percent 4%
    const deferMultiplier = 4 / 100;
    const gstMultiplier = 1 + (18 / 100);
    const fee = Math.round(value * deferMultiplier * gstMultiplier);
    const totalRepayment = value + fee;

    return { fee: currencyConversion(fee), interest: currencyConversion(0), totalRepayment:currencyConversion(totalRepayment), totalRepaymentAmount: totalRepayment }
  }
  
  export function calculateEmiAmount(value: number) {
    // Processing Fee (2%)
    const processingFeemultiplier = 2 / 100;
    const gstRate = 18 / 100;
    const fee = value * processingFeemultiplier * (1 + gstRate);

    // Monthly Interest (18%)
    const tenureMonths = 6;
    const monthlyRate = 18 / 100 / 12; // Convert annual rate to monthly and to decimal
    const numerator = value * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
    const monthlyInterest = denominator > 0 ? (numerator / denominator) : 0;
    const princialWithInterest = monthlyInterest * tenureMonths;
    const interest = princialWithInterest - value;
    const interestGstAmount = interest * gstRate;
    const totalRepayment = princialWithInterest + fee + interestGstAmount;

    return { fee: currencyConversion(Math.round(fee)), interest: currencyConversion(Math.round(interest)), totalRepayment: currencyConversion(Math.round(totalRepayment)), totalRepaymentAmount: Math.round(totalRepayment) }
  }

  export function calculateMinDueAmount(value: number) {
    const processingFeePercent = 5;
    const multiplier = processingFeePercent / 100;
    const gstRate = 18 / 100;
    const fee = (value * multiplier);

    // Monthly Interest (36%)
    const tenureDays = 60;
    const dailyRate = 36 / 365 / 100; // Convert annual rate to monthly and to decimal
    const remaingAmount = value - fee;
    const remaingAmountRepayment = remaingAmount * Math.pow(1 + dailyRate, tenureDays);
    const interest = remaingAmountRepayment + fee - value;
    const interestGstAmount = interest * gstRate;
    const interestWithGst = interest + interestGstAmount;
    const totalRepayment = remaingAmountRepayment + fee + interestGstAmount;

    return { fee: currencyConversion(Math.round(fee)), interest: currencyConversion(Math.round(interestWithGst)), totalRepayment: currencyConversion(Math.round(totalRepayment)), totalRepaymentAmount: Math.round(totalRepayment)  }
  }

  export const currencyConversion = (amount: number, currencyIso = 'INR') => {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyIso,
      minimumFractionDigits: 0,
    }).format(amount); 
  };
