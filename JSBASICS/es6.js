// // spread oprator
// // destructuring
// const person={
//     name:'Alice',
//     age:10,
//     location:'Nepal'
// }
// const time=[12,30,14]
// const numbers=[1,2,3,4]
// // const {name,age}=person
// // let hr=time[0]
// let [hr,min,sec]=time
// // console.log(hr,min,sec);
// // console.log(person.name,name);

// // spread operator(...)
// const newArr=[...time,...numbers]
// // console.log(newArr);
// const newPerson={...person,key:'value'}
// // console.log(newPerson)
// const {name,...others}=newPerson
// console.log(name,others);

// const add=(...numbers)=>{
//     return numbers.reduce((acc,val)=>{
//         return acc+val
//     },0)
// }
// console.log(add(1,2,3,4,5,6));

// template literal-``
// map set
// const numbers=[1,2,3,4]
// const unique=new Set(numbers)
// console.log(unique)
// unique.add(5)
// unique.add(2)// alredy exist
// // console.log(unique)

const map=new Map()
map.set('name','Alice')
map.set(10,'Alice')
map.set({name:'Alice'},'Alice')
console.log(map.get);
console.log(map);