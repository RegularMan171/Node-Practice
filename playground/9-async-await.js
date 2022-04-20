const add = (a,b) => {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            if(a<0 || b<0) {
                return rej('only positive numbers')
            }
            res(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1,2)
    const sum2 = await add(sum, 7)
    const sum3 = await add(sum2, -5)
    return sum3
}

doWork().then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})
