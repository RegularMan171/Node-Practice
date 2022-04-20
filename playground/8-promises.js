const add = (a,b) => {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(a+b)
        }, 2000)
    })
}

// add(1,3).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((new_sum) => {
//         console.log(new_sum)
//     }).catch((e)=> {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

//primise chaining

// add(2,3).then((sum) => {
//     console.log(sum)
//     return add(sum, 4)
// }).then((sum2) => {
//     console.log(sum2)
// }).catch((e) => {
//     console.log(e)
// })


add(2,3).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2,3)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})