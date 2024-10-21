// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesch Choudhary",
    [mySym]: "mykey",
    age: 18, 
    location: "Jaipur",
    email: "ninja@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser)

// console.log("Line 23:", JsUser[mySym])

JsUser.email = "balagal@hotmail.com"
// Object.freeze(JsUser)
// JsUser.email = "bandarYogiHai@baba.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hellowen Js babaji")
}

JsUser.greetingTwo = function(){
    console.log(`Hellow Js User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

