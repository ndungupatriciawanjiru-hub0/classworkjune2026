let numb1=749
console.log("numb1",numb1,"Its type is ",typeof numb1)
let strNumb="854"
console.log("strNumb",strNumb,"Its type is ",typeof strNumb)
let myName="john"
console.log("myName",myName,"Its type is ",typeof myName)
let isMarried=true
console.log("isMarried",isMarried,"Its type is ",typeof isMarried)
let nullVal1=null
console.log("nullVal1",nullVal1,"Its type is ",typeof nullVal1)
let unvalue;
console.log("unvalue",unvalue,"Its type is ",typeof unvalue)


const bonus="200"
const salary=50000

const salaryGross=bonus+salary; 

console.log("Gross salary is ",salaryGross," Its type is ",typeof salaryGross) 

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