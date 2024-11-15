const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageNmae: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageNmae: "Java",
        languageFileName: "java"
    },
    {
        languageNmae: "Python",
        languageFileName: "py"
    },
    {
        languageNmae: "C++",
        languageFileName: "cpp"
    },
]

myCoding.forEach ((item) => {

    console.log(item.languageNmae);
    console.log(item.languageFileName);
    
    
})