const arr = [1,2,3,4,5]

const number = arr.filter( (num) => num > 2)
// console.log(number);

const a = [1,2,3,4,5]
const n = a.filter((nums) =>{
    return nums > 2
})


// const books = books.filter( (bk) => bk.publish >= 2010)

// console.log(books);

//
const myNumber = [1,2,3,4,5,6,7]

const newNums = myNumber.map( (n) => { return n + 10})
// console.log(newNums);


//reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce(function (accumulator, cv) {
    return accumulator + cv
} , 0)
console.log(myTotal);


shoppingCart.reduce((accumulator, item) =>accumulator + item.price,0)