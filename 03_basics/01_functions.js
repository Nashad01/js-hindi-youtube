

function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
}

// sayMyName()

/*
function addTwoNumber (number1, number2) {           //here (number1, number2) is called parameters
        console.log(number1 + number2);
        
}
*/

function addTwoNumber (number1, number2) {           //here (number1, number2) is called parameters
        // let result = number1 + number2;  // first method
        // return result;
        return number1 + number2      //second method
        
}

/*
addTwoNumber (2, 5)              //here (2,5) are called arguments
addTwoNumber (2, "5")
addTwoNumber (2, "a")
addTwoNumber (2, null)
*/

const result = addTwoNumber (2, 7)
// console.log("Result", result);

function loginUserMessage(username = "Sam Baklol"){
    if(!username){  //we can also write !username as undefined===username
        console.log("Please enter a username");
        return
        
    }
    return `${username} is logged in`
}

console.log("At Line 47:",loginUserMessage("Nashad"))
console.log("At Line 48:",loginUserMessage())

//------- Lecture 20 Function -------------------------------------------------
 
function calculateCartPrice(...num1){       // ... this is call rest and spread operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
// handleObject({
//     username:"sam",
//     price: 399
// })


// For Array --------------
const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray [0]
}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 100, 500]));




