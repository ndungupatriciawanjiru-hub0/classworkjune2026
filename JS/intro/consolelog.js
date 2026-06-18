

const salaryGross=50000; 
console.log(salaryGross) 
console.log("Gross salary is ",salaryGross) 
//Tax calcultions
const paye=salaryGross*0.16
console.log("For gross salary of ",salaryGross," Paye is",paye)
//->
const nhif=2500
console.log("Nhif deduction ",nhif)
const sha=2500
console.log("SHA is ",sha)
const totalDeductions=paye+nhif+sha
console.log("Total deduction are ",totalDeductions)
const netSalary=salaryGross-totalDeductions
console.log("Your net salary is ",netSalary)