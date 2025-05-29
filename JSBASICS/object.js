// object->collection of related datatypes in the form of key value pairs
// {}->object literal
let person ={
//     // key:value ,
    name:'sita',
    age:28,
    address:{
        city:'ktm'
    },
    greet: function(){
        console.log('hello from',this.name)
    }
 }
 person.greet()
//  person.greet:function()
 
//  console.log(person)
// console.log(person.address.city)
// console.log(person.name)// dot notation
// console.log(person["address"])// bracket notation-> takes space too

// new keyword
// let car = new Object()
// console.log(car)


// modify
// person.name='gita'
// console.log(person)

// delete
// delete person.address
// console.log(person)

let car={
    color:'black',
    brand_name:'Toyata',
    speed:20
}
car.price=200000
car.color='white'
delete car.speed
console.log(car)
// primitive datatypes is immutable means cant change, its value store directly in stack memory 
// non primitive is mutable ,pass by reference,store valuein heap memory