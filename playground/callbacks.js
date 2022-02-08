setTimeout(()=> {
    console.log("2 secs")
}, 2000);

const names = ['abcd', 'efghij'];
const shortNames = names.filter((name)=> {
    return name.length <=4
})
console.log(shortNames);

const geocode = (location, callback) => {
    setTimeout(()=> {
        const data = {
            latitude: 0,
            longitude: 0
        }  
        callback(data) 
    }, 2000)
}

geocode('Hyderabad', (anything) => {
    console.log(anything)
})

const add = (a, b, callback) => {
    setTimeout(()=> {
        callback(a+b);
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)    
})