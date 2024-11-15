// reduce 

const myNums = [1, 2, 3]

/*
const myTotal = myNums.reduce ( function(acc, currval) {
    console.log(`acc: ${acc} and curval: ${currval}`)
    return acc + currval
}, 3 )

console.log(myTotal);
*/

// Using Arrow Function

const Total = myNums.reduce( (acc, currval) => { 
    console.log(`acc: ${acc} and curval: ${currval}`);
    
    return acc + currval}, 2 )

console.log(Total);
