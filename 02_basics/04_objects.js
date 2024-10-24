// const tinderUser = new Object()   // single ton object
const tinderUser = {}       // non-single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sam Gogo"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "baab@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ninja",
            lastname: "Codee"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //capital O in Oject 

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

//----------------

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "f@google.ocm"
    },
    {
        id:3,
        email: "h@gmail.com"
    },
    {
        id:4,
        emial: "f@google.ocm"
    }
]

users[1].email = "baba@hhhh@gmail.com"

// console.log(tinderUser);
// console.log(users);
// console.log(users[0]);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// -----------------------------------------------------------
//Lecture 18

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

const {courseInstructor: balagal} = course

console.log(balagal);


