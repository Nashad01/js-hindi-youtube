// 1 Promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promises cosumend")
    console.log("-------------------------------------------")
}) 

// 2 Promise
new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 2000)
}).then(function(){
    console.log('Async 2 resolved');
    console.log("-----------------------------------------")
})

// 3 Promise
const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ninja", email:"bingo@nina.com"})
    }, 3000)
})

promiseThree.then(function(user){
    console.log(user)
    console.log("------------------------------------")
})

// 4 Promise 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Bikano", email: "nine@nashad.in"})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 4000)
}) 

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
})
.finally(() => 
    console.log("The promise is either resolved or rejected"))

setTimeout(function(){
    console.log("=============================================")
}, 4000)


// 5 Promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Taiker", password: "BBB"})
        }else {
            reject('ERROR: JS went wrong')
        }
    }, 5000)
})

async function consumePromiseFive () {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


