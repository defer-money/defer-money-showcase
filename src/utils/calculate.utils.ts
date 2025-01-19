  export function calculateDeferAmount(value: number) {
    // Defer Percent 4%
    const deferMultiplier = 4 / 100;
    const gstMultiplier = 1 + (18 / 100);
    const fee = value * deferMultiplier * gstMultiplier;
    return { fee: currencyConversion(Math.round(fee)), interest: currencyConversion(0), totalRepayment:currencyConversion(Math.round(value + fee)), totalRepaymentAmount: Math.round(value + fee) }
  }
  
  export function calculateEmiAmount(value: number) {
    // Processing Fee (2%)
    const processingFeemultiplier = 2 / 100;
    const gstMultiplier = 1 + (18 / 100);
    const fee = value * processingFeemultiplier * gstMultiplier;

    // Monthly Interest (18%)
    const tenureMonths = 6;
    const monthlyRate = 18 / 100; // Convert annual rate to monthly and to decimal
    const numerator = value * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
    const interest = denominator > 0 ? (numerator / denominator) : 0;
    const interestWithGst = interest * gstMultiplier;
    const totalRepayment = Math.round(interestWithGst * 6 + fee);

    return { fee: currencyConversion(Math.round(fee)), interest: currencyConversion(Math.round(interest)), totalRepayment: currencyConversion(totalRepayment), totalRepaymentAmount: totalRepayment }
  }

  export function calculateMinDueAmount(value: number) {
    const processingFeePercent = 5;
    const multiplier = processingFeePercent / 100;
    const gstMultiplier = 1 + (18 / 100);
    const fee = (value * multiplier) * gstMultiplier;


    // Monthly Interest (18%)
    const tenureMonths = 6;
    const monthlyRate = 36 / 12 / 100; // Convert annual rate to monthly and to decimal
    const numerator = value * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
    const interest = denominator > 0 ? (numerator / denominator) : 0;
    const interestWithGst = interest * gstMultiplier;
    const totalRepayment = interestWithGst * 6 + fee;

    return { fee: currencyConversion(Math.round(fee)), interest: currencyConversion(Math.round(interest)), totalRepayment: currencyConversion(Math.round(totalRepayment)), totalRepaymentAmount: Math.round(totalRepayment)  }
  }

  export const currencyConversion = (amount: number, currencyIso = 'INR') => {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyIso,
      minimumFractionDigits: 0,
    }).format(amount); 
  };
