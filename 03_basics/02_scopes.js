//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("INNER :", a );
    
}


// console.log(a);
// console.log(b);
// console.log(c);


// Note: Code inside the {} is called BLOCK/LOCAL scope
//       and outside all codes are called as GLOBAL scope. 

//-------------------Lecture 22 ---------------
//Nested Scoop

function one (){
    const username = "Nashad"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++ interesting +++++++++++++++++++

function addOne(num){
    return num + 1;
}
addOne(2)
 

addTwo(4)
const addTwo = function(num){
    return num + 5
}
