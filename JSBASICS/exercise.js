// const students=[
//     { name:'Alice',grade:'',marks:[60,70,80,90]},
//     {name:'Bob',grade:'',marks:[80,75,80,90]},
//     {name:'Charlie',grade:'',marks:[86,70,40,90]}

// ]
// students.forEach(student=>{
//     const total=student.marks.reduce((sum,mark)=>{ 
//         return sum + mark
//     },0)
    
//     const avg=total/student.marks.length
//     student.avg=avg;


//     if(avg>=90)student.grade='A+'
//     else if (avg>=80) student.grade='A'
//     else if (avg>=70) student.grade='B+'
//     else if (avg>=60) student.grade='B'
//     else if (avg>=50) student.grade='c'
//     else student.grade='F'

//     const status=avg>=50? 'Passed':'Failed'
//     console.log(`Name:${student.name}  Avg:${student.avg}  Grade${student.grade}-> ${status}`)

// })




const students=[{
    name:'Alice',
    marks:[85,70,80,90]

},
{
     name:'Bob',
     grade:'',
    marks:[40,50,80,90]
    // avgMarks:''
    

},
{
     name:'Charlie',
     grade:'',
    marks:[90,70,80,90]
    
    
}
]

const calculateAvg=(marks)=>{
    const avg=marks.reduce((acc,marks)=>{
    return acc+marks
    },0)/marks.length
    return avg
}
const calculateGrade=(avg)=>{
    if(avg>90){
        return'A'
    }
    if(avg>80){
        return'B'
    }
    if(avg>70){
        return'C'
    }
    if(avg>60){
        return'D'
    }
    return 'NG'
}
// 1.map->avg,grade
const passedStudents=students.map(student=>{
    const avg=calculateAvg(student.marks)
    const grade=calculateGrade(avg)

    student.avgMarks=avg
    student.grade=grade
    return student
})
.filter(student=>student.avgMarks>60)
.map(student => `Name:${student.name} - Marks:${student.avgMarks} - Grade:${student.grade}`)

console.log(passedStudents)








