/*
    Simple Tax Calculator
    How we check if the person typed a real number:
    1. Is it really a number?
    2. Turn it into a proper number
    3. Make sure it's more than zero
*/

// Keep asking until they type the correct salary
let grossMonthlySalary = null;

while (true) {
    let gross = prompt("Enter your gross salary");

    // Check if what they typed is a real number
    if (!isNaN(gross)) {
        gross = Number(gross);

        // Only accept positive numbers
        if (gross > 0) {
            grossMonthlySalary = gross;
            break;   // Stop asking for number 
        }
    }

    // alert the user that they typed an invalid number
    alert(`Oops! That's not a valid amount.
Please enter a number bigger than 0`);
}


//NSSF CALCULATION 

let nssftier = null;
let nssf = 0;

if (grossMonthlySalary <= 9000) {
    //tier 1
    nssf = grossMonthlySalary * 0.06; // earning below 9000
    console.log("nssf ", nssf);
    nssftier = "nssf tier 1 below 9,000 KSH";
} else if (grossMonthlySalary <= 108000) {
    //tier 1 and tier2
    let rem = grossMonthlySalary - 9000;
    let tier1 = 9000 * 0.06;
    console.log("Tier 1 ", tier1);
    let tier2 = rem * 0.06;
    nssf = tier1 + tier2;
    console.log("tier2 nssf ", tier2);
    nssftier = "nssf tier 2 between 9,000 KSH - 108,000";
} else {
    nssf = 6480; 
    nssftier = "nssf tier 3 above 108,000";
}

 console.log("nssf contribution", nssf);
alert(`nssf is ${nssf} and tier level is ${nssftier}`);

// Calculate PAYE Tax: Starting from LOW to HIGH

let taxableIncome = grossMonthlySalary - nssf;
let payeTier = null;
let paye = null;

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1;
const band2 = (bracket2 - bracket1) * 0.25;
const band3 = (bracket3 - bracket2) * 0.3;
const band4 = (bracket4 - bracket3) * 0.325;

const personalRelief = 2400;

if (taxableIncome <= 24000) {
    paye = taxableIncome * 0.1;
    payeTier = "Paye 0-24000 KES";
} else if (taxableIncome <= 32333) {
    let diff = taxableIncome - 24000;
    let tax = diff * 0.25;
    paye = tax + band1;
    payeTier = "Paye 24000-32333 KES";
} else if (taxableIncome <= 500000) {
    let diff = taxableIncome - 32333;
    let tax = diff * 0.3;
    paye = tax + band1 + band2;
    payeTier = "Paye 32333-500000 KES";
} else if (taxableIncome <= 800000) {
    let diff = taxableIncome - 500000;
    let tax = diff * 0.325;
    paye = tax + band1 + band2 + band3;
    payeTier = "Paye 500000-800000 KES";
} else {
    let diff = taxableIncome - 800000;
    let tax = diff * 0.35;
    paye = tax + band1 + band2 + band3 + band4;
    payeTier = "Paye 800000 to infinity KES";
}

const finalPaye = Math.max(0, paye - personalRelief);

// SHIF & Housing Levy
const shif = grossMonthlySalary * 0.0275;
const housingLevy = grossMonthlySalary * 0.015;

// Net Pay
const netPay = grossMonthlySalary - nssf - finalPaye - shif - housingLevy;

alert(`Taxable Income: ${taxableIncome}
    Paye: ${paye}
    Personal Relief: ${personalRelief}
    Final Paye: ${finalPaye}
    Tier: ${payeTier}
    SHIF: ${shif}
    Housing Levy: ${housingLevy}
    Net Pay: ${netPay}
  `);

console.log(`Gross: ${grossMonthlySalary} | PAYE: ${finalPaye} | NSSF: ${nssf} | SHIF: ${shif} | Housing Levy: ${housingLevy} | Net Pay: ${netPay}`);