const user = {
    username: "Nashad",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

user.welcomeMessage()
// user.username = "Joy"
// user.welcomeMessage()

// console.log(this)

// ------------------------------------------

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

// const chai = function () {
//     let username = "Hitesh"
//     console.log(this.username)
// }

// chai()


const chai = () => {
    let username = "hitesh";
    console.log(this.username);
}

// chai()


//---Explicit Return

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 2));

//-------------
// const addTwo = (num1, num2) => num1 + num2;
//-------------
// const addTwo = (num1, num2) => (num1 + num2);



//---Implicit Return
const addTwo = (num1, num2) => ({username: "Nashad"});
console.log(addTwo(3, 1));



