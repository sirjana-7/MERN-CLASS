// scope-visibilibility and accessibility of variable

// 1.Global scope- can access anywhrere in a code
// let x=10
// const y=10
// var z=20
// if(true){
//     console.log(x,y,z)
// }
// function func(){
//     console.log(x,y,z)

// }
// func()


//  2.Block-let,cont are block that means access only inside the block only
// if(true)
//     {
//     let x=10
//     const y=10
//     var z=20// global scope
// console.log('inside the block',x,y,z)

// }
// // console.log(x)
// // console.log(y)
// console.log('outside block',z)


// 3.function
// function scope(){
//     let x=10
//     const y=10
//     var z=20// function scope
// console.log(x)
// console.log(y)
// console.log(z)
// }
// scope()
// console.log('outside block',z)

// 4.lexical-> used in case of parent and child function,hof
// function parent(){
//     let x='parent variable'

//     function child(){
//         console.log(x)

//         function children(){
//         console.log(x)

//     }
//     children()
// }
//     child()
// }
// parent()
// lexical scope formed when functions boby encloses another function

// scope chain-children->child->parent

// closure=parent function execute garepaxi pani child le  function ko variable use garna pauxa
// function parent(){
//     let count=0

    // return function(){    //matters when function is defined 
    //     console.log(count);
    // }
//     return increment=()=>{
//         count++
//         console.log(count);
//     }
// }
// // const child =parent() // child is closure
// // child()
// const child =parent(0) // child is closure
// child()

// // const child1 =parent() // child1 is closure
// // child1()
// const child1 =parent(10) // child1 is closure
// child1()

// private data or encapsulation
// const count=()=>{
//     let count=0

//     return{
//         increment:()=>{
//             count++
//         },
//         decrement:()=>{
//             count--
//         },
//         getCount:()=>{
//             return count
//         }
//     }

// }
// const closure=count()//1st closure
// const counter=count()//2nd

// closure.increment()
// closure.increment()
// closure.increment()

// counter.increment()
// console.log(closure.getCount())//3
// console.log(closure.getCount())//1

// function factory
//  const multiply=(factor)=>{
//     return (number)=>{
//         return factor*number
//     }
//  }
//  const multiplyBy5=multiply(5)
//  const multiplyBy10=multiply(10)


//  console.log(multiplyBy5(10))
//  console.log(multiplyBy5(12))
//  console.log(multiplyBy10(12))


const Account=(initialBalance)=>{
    let amount=initialBalance

    return{
        deposit:(balance)=>{
            amount+=balance
            console.log(`your new balance is: ${amount}`)
        },
            
    withdraw:(balance)=>{
        if(amount<balance){
            console.log('Insufficient balance')
            return
        }
        amount-=balance
        console.log(`your new balance is: ${amount}`)

    },
    getBalance:()=>{
        return amount

    }
    }
}
// const account=Account(1000)
// const balance=account.getBalance()
// console.log(account.getBalance())//1000

// account.deposit(500)
// console.log(account.getBalance())

// account.withdraw(500)
// console.log(account.getBalance())

// cache
// const parent=()=>{
//     let cache={}
//     return(number)=>{
//         if(cache[number]){
//             console.log('return fron cache');
//             return cache[number]
//         }
//         console.log('computing...');
//         cache[number] =number**number
//         return cache[number]
//     }
// }
// const child=parent()
// const child1=parent()
// console.log(child(10))
// console.log(child(10))

// console.log(child1(10))
// console.log(child1(10))
