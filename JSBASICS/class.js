// class-group field of object
// class person{
//     name;
//     age;

//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     greet(){
//         console.log('i am',this.name);
//     } 
//     static print(){
//         console.log('hello from class');//static -class name
//     }

// }
// const person1 = new person('Alice',28)
// console.log(person1);
// person1.greet()
// console.log(person.print());

// 
// class expression
// let Animal=class{

// }

class Animal{
    name;

    constructor(name){
        this.name=name
    }

    speak(){
        console.log(this.name,'speaks');
    }
}        
class  DOg extends Animal{
    legs;
    constructor(name,legs) {
        super(name)//animal constructor call-call parent constructor in child class
        this.legs=legs
        
    }
}
const dog= new DOg('tommy',4)
console.log(dog);
dog.speak()

// class Rectangle{
//     length;
//     width;

//     constructor(length,width){
//         this.length=length;
//         this.width=width;
//     }
//     set(length,width){
//         this.length=length;
//         this.width=width;
//     }
//     get(){
//         return{
//             length:this.length,
//             width:this.width,
//             // area:this.length*this.width
//             area:Rectangle.calculateArea(this.length,this.width)
//         }
//     }
//     // private
//     static calculateArea(length,width){
//         return length*width
//     }
// }
// const rect1= new Rectangle(10,20)
// console.log(rect1);
// rect1.set(10,20)

// console.log(Rectangle.calculateArea(10,20));
// console.log(rect1.get());


// // static is private method
// // class person{
// //     name;
// //     #password

// //     constructor(name,password){
// //         this.name=name;
// //         this.#password=password
// //     }
// //     getPassword(){
// //         return this.#password
// //     }
// // }
// // const user= new person('sam','2133')
// // console.log(user.getPassword());


// // var name=''
// // console.log(this);

// // function func(){
// //     console.log(this);
// // }

// // const arrow=()=>{
// //     console.log(this);
// // }
// // arrow()//arrow doesnt have this and takes this from sorrounding
// // func()

// // let person={
// //     name:'shyan',
// //     // getName(){
// //     //     console.log(this);
// //     // }
// //     getName(){
// //         const func=()=>{
// //             console.log(this);
// //         }
// //         func()
// //     }
// // }
// // person.getName()