// function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
//    constants for deductions 
    const nhifRate = 150; 
    const nssfRate = 0.06;
    const taxBrackets = [
        { limit: 24000, rate: 0.1 },
        { limit: 32333, rate: 0.15 },
        { limit: 40000, rate: 0.2 },
        { limit: 50000, rate: 0.25 },
        { limit: Infinity, rate: 0.3 }
    ];
    // calculate grossSalary
    let grossSalary = basicSalary + benefits;
// calculate  deductions
    let nhifDeduction = nhifRate;
    let nssfDeduction = grossSalary * nssfRate;

    // calculate TaxableIncome
    let taxableIncome = grossSalary - (nhifDeduction + nssfDeduction);
    let paye = 0;
    let previousLimit = 0;

    for (let bracket of taxBrackets) {
        if (taxableIncome > previousLimit) {
            let taxableAmount = Math.min(taxableIncome, bracket.limit) - previousLimit;
            paye += taxableAmount * bracket.rate;
            previousLimit = bracket.limit;
        } else {
            break;
        }
    }

//    calculate NetSalary
    let netSalary = grossSalary - (nhifDeduction + nssfDeduction + paye);
    const roundToTwoDecimals = (num) => Math.round(num * 100) / 100;
    console.log(`Gross Salary: KSh ${roundToTwoDecimals(grossSalary)}`);
    console.log(`NHIF Deduction: KSh ${roundToTwoDecimals(nhifDeduction)}`);
    console.log(`NSSF Deduction: KSh ${roundToTwoDecimals(nssfDeduction)}`);
    console.log(`PAYE (Tax): KSh ${roundToTwoDecimals(paye)}`);
    console.log(`Net Salary: KSh ${roundToTwoDecimals(netSalary)}`);
   

}
