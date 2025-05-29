// async-non blocking task
// console.log('start');
// console.log('processing');
// console.log('end');

//setTimeout-
// setTimeout(()=>{  //function call only once
//     console.log('processing');
// },1000)

// setInterval(()=>{    ///used when function need to call certain interval of time
//     console.log('interval');
// },1000)// call the function every sec

// console.log('end');

//callback based
// const getUSer =(callback)=>{
//     setTimeout(()=>{
//         console.log("1.user fetched");
//         callback()
//     },2000)
// }
// const getPosts =(callback)=>{
//     setTimeout(()=>{
//         console.log("2.post fetched");
//         callback()
//     },3000)
// }
// const getComments =()=>{
//     setTimeout(()=>{
//         console.log("3.comments fetched");
//     },1000)
// }
// // getUSer()
// // getPosts()
// // getComments()
// getUSer(()=>{
//     getPosts(()=>{
//         getComments()
//     })
// })
// callback hell

// promise-obect asyn 
// pending
// fullfill
// reject
// const getUser=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // let isError=false
//             let isError=false
//             if(!isError){
//             resolve('1.user fetched')
//             }else{
//                 reject('something went wrong')
//             }
//         },2000)
//     })
// }

// const getPosts=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // let isError=false
//             let isError=false
//             if(!isError){
//             resolve('2.posts fetched')
//             }else{
//                 reject('something went wrong')
//             }
//         },2000)
//     })
// }
// const response=getUser().then((data)=>{
//     console.log(data);
// }).then(()=>{
//      return getPosts()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log('finally');
// })
// console.log(response);

//async/await
const getUser=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // let isError=false
            let isError=true
            if(!isError){
            resolve('1.user fetched')
            }else{
                reject('something went wrong')
            }
        },2000)
    })
}

const getPosts=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // let isError=false
            let isError=true
            if(!isError){
            resolve('2.posts fetched')
            }else{
                reject('something went wrong from get posts')
            }
        },2000)
    })
}
const fetchUser =async()=>{
    try{
    const response= await getUser()
    console.log('fetch user',response);
    }catch(error){
        console.log(error);
    }finally{
        console.log('finally');
    }

}
fetchUser()