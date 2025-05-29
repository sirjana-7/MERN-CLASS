
//    const checkAge=(age)=>{ 
//    if(age<18){
//     return'less than 18'
// }
// if(age>=18 && age<=60){
//     return'between 18 and 60'
// }
// if(age>60)
//     {
//     return'greater than 60'
// }
// }
// let result=checkAge(16)
// console.log(result)


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

// }






// person,Teacher,student
class person{
    name;
    address;
    constructor(name,address){
        this.name=name
        this.address=address
    }
    Introduction(){
        console.log(`I am ${this.name} and from ${this.address}`);
    }
}
class Teacher extends person{
    salary;
    constructor(name,address, subject){
        super(name,address)
        this.subject=subject

    }
    Teach(){
        console.log(`${this.name} teaches ${this.subject}`)
    }
    }

class Student extends person{
    std_id;
    constructor(name,address,grade){
       
        super(name,address)
        this.grade=grade
        
    }
    study(){
        console.log(`${this.name} study in ${this.grade}`)
    }
}  
const tch=new Teacher("Ram",'bkt','Math')
tch.Introduction() 
tch.Teach()
const std=new Student('Bob','ktm',9)
std.Introduction()
std.study()




