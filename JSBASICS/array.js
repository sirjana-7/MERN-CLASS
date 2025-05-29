// array-> hold multiple values in a single variable []->array literal

// const users =['user1','user2']
// // const arr= new Array()
// // get
// const numbers= [2,3,5,7]
// // const first= numbers[0]
// console.log(first,numbers)

// add
// end
// numbers.push(9)
// // start
// numbers.unshift(20)

// // remove
// // end
// const last = numbers.pop()
// console.log(first,numbers,last)
// // first
// const first =numbers.shift()


// const numbers=[2,31.34,65,30]
// const last_el =n[n.length-1]//-1 gives undefined
// const el=n.at(1)//-1 gives last index value
// console.log(last_el,el)
// console.log(n)


// forEach
// numbers.forEach((value,index,arr)=>{
//     console.log('value at',index,value,arr)

// })
// console.log(numbers)

// const resp=numbers.forEach((value,index,arr)=>{
//     console.log('value at',index,value,arr)

// })
// console.log(numbers,resp)

// map-used to trasform each elememt in an array and return a new array with transformed vslues
// const numbers=[300,2,31,34,65,30]
// const doubled=numbers.map((number)=>{//number=>number*2
//     return number*2

// })
// console.log(numbers,doubled)

// const square=numbers.map((number)=>{
//     return number*number//number**2(square)
// })
// console.log(numbers,square)

// filter
// 

// reduce-reduce an array to a single value
// const sum=numbers.reduce((acc,value)=>{     //acc-previous value,value-curent value
//     return acc+value
// },0)//we can give any value instead of 0
// console.log(numbers,sum)

// find
// const result=numbers.find((number)=>number>10)
// console.log(numbers,result)//gives the result immediately after finding number greater than 10

// findindex
// const index=numbers.findIndex((number)=>number>10)
// console.log(numbers,index)
// if array doest exist it returns negative(-1)
// const indext=numbers.findIndex((number)=>number>300)
// console.log(numbers,index)


// slice
// const copy=numbers.slice(1,3)//1 start index9inclusive),3 end index(exclusive)
// console.log(numbers,copy)

// delete
// console.log(numbers.length)
// delete numbers[3]
// console.log(numbers)
// console.log(numbers.length)

// splice-add,replace,remove elements in aray
// numbers.splice(startTransition,delete_count,item1,item2)
// numbers.splice(3,1)//after 3 index delete 1 element
// numbers.splice(3,3,10,76)//after  3 index deleting 3 elements add 10,76
// console.log(numbers)
// console.log(numbers.length)

// console.log(numbers.indexOf(30))
// console.log(numbers.includes(400))

// // some-or,every-and 
// const isEven=numbers.some(number=>number>300)
// const even=numbers.every(number=>number>300)
// console.log(isEven,even)



// sort
// const numbers=[34,4,2,31,65]
// const fruits=['Banana','kiwi','Apple']

// numbers.sort((a,b)=>a-b)// if  result of a-b is positive swap two numbers otherwise no swap
// fruits.sort()

// console.log(numbers,fruits)


const students=[{
    name:'Alice',
    grade:'',
    marks:[60,70,80,90],
    avg:70

},
{
     name:'Bob',
     grade:'',
    marks:[40,70,80,90],
    avg:40

},
{
     name:'Charlie',
     grade:'',
    marks:[90,70,80,90],
    avg:86
}
]

students.sort((a,b)=>a.avg-b.avg)// if descending  do b-a
console.log(students)

students.map((value)=>{
    console.log(value)
})
