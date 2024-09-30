
function calculateNetSalary(basicSalary, benefits) {
    
    const nhifRate = 150; 
    const nssfRate = 0.06;
    const taxBrackets = [
        { limit: 24000, rate: 0.1 },
        { limit: 32333, rate: 0.15 },
        { limit: 40000, rate: 0.2 },
        { limit: 50000, rate: 0.25 },
        { limit: Infinity, rate: 0.3 }
    ];
    
    let grossSalary = basicSalary + benefits;
    let nhifDeduction = nhifRate;
    let nssfDeduction = grossSalary * nssfRate;
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

    
    let netSalary = grossSalary - (nhifDeduction + nssfDeduction + paye);
    
    
    console.log("Gross Salary: KSh " + grossSalary.toFixed(2));
    console.log("NHIF Deduction: KSh " + nhifDeduction.toFixed(2));
    console.log("NSSF Deduction: KSh " + nssfDeduction.toFixed(2));
    console.log("PAYE (Tax): KSh " + paye.toFixed(2));
    console.log("Net Salary: KSh " + netSalary.toFixed(2));
}


let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
let benefits = parseFloat(prompt("Enter Benefits:"));

calculateNetSalary(basicSalary, benefits);
