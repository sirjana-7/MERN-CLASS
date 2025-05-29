// function-> reusable block of code
// Syntax
// function functionName(){}

// function greet(){
//     console.log('hello world')
// }
// greet()

// function with parameter
// function greet (name){
//     console.log('hello' + name)
// }
// greet('Alice')

// function isAge(age){
//     console.log(age>=18 ? 'you can vote':'you cant vote')
// }
// greet(17)

// function greet (name,age){
//     console.log(`iam ${name}, ${age}years old`)
// }
// greet( 10,'Alice')

// returntype
// function add(a,b){
//     let sum =a+b;
//     return sum

// }
// let result=add(10,20)
// console.log(result)

// function expression
// const add= function(a,b){
//     // console.log(a+b)
//     return a+b
// }
// const res=add(10,20)
// console.log(res)
// anonymous function-> function dont have name


// call back function
// const parent=function(name,action){
//     action(name)// action is function 
// }
// parent('alice',console.log)//console.log is call back

// const child=function(){
//     console.log('hello ,iam a callback')
// }

// const parent= function(name,x)
// {
//     console.log(name)
//     x()
// }
// parent('alice',child)

// const child=function(name){
//     console.log('hello ,iam a '+ name)
// }

// const parent= function(name,x)
// {
//     console.log(name)
//     x(name)
// }
// // parent('alice',child)

// const funcA=function(a,b){
//     return function(){
//         console.log(a+b)
//         return a
//     }
// }
// const add=funcA(10,20)//add is hof
// console.log(add())


// const add = function(factor){
//     return function(b){
//         return factor +b

//     }
// }
// const add5=add(5)
// console.log(add5(10))


// // hof ->function tthat takes function as argument or return function
// arrow function
// const add=(a,b)=> {
//     return a+b
// }
const add=(a,b)=> a+b// one liner
const result=add(10,20)
// console.log(result)

const square=a=>a*a//single parameter doest need bracketg
// console.log(square(2))

const multiply=factor=>Number=> factor*number//currying function
const multiplyBy10=multiply(10)
// console.log(multiplyBy10(6))

// currying function->the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

const func = () =>{
    return 5+6
}
const r = func()
console.log(r)
// account->class(accHolderName,initialAmount)
// class Account{
//     accHolderName;
//     initialAmount;

//     constructor(accHolderName,initialAmount){
//         this.accHolderName=accHolderName
//         this.initialAmount=initialAmount
//     }
//     deposit(){


//     }
//     withdraw(){

//     }
//     get



