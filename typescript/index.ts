// // let x:number =10//type given or not doesnt mattter
// // // x=''-cant do this in typescript
// // console.log(x)
// // tsc- convert typescript to javascript
// // string
// let str:string='hello'

// // number
// let x:number=10
// // boolean
// let bool:boolean=true
// // null
// const y:null=null
// // undefined
// let z= undefined
// // any-anytype /used when we are not sure about which type is use
// let a:any=20
// a=''
// // unknown=need to check the type
// let b:unknown=10
// b='hello'
// // console.log(a.toUpperCae)
// if(typeof b==='string'){
//     b.toLowerCase()
// }

// // never-function doesnt return anything
// function abc():never{
//     throw new Error('')
// }

// array
// let numbers:number[]=[1,2,3,4]
// let strArr:Array<string>=['a','b']
// numbers.push(2)

// union type
// let x :number| string=10
// x=''

// type
// type ID=number|string
// let id:ID=''

// type Status='pending'|'completed'|'shiped'|"canceled"   //customtype
// let orderStatus:Status='canceled'

// object
// interface

// interface IPerson{
//     name:string
//     age:number
//     address ?:string//optional
// }
// let person:IPerson={
//     name:'',
//     age:10,
//     // address:''
// }

// enum
// enum Role{
//     USER='USER',
//     ADMIN='ADMIN',
//     SUPER_ADMIN='SUPER_ADMIN'
// }
// console.log(Role.ADMIN)

// function
// function greet(name:string){
//     console.log('hello',name)
// }
// greet("12")

// const add=(a:number,b:number)=>{
//     return a+b
// }
// add(1,12)

// generic
// const add =<T extends string |number>(a:Text,b:T):T=>{
//     return a+b
// }
// add<string>('hello','world')
// add<number>(10,20)