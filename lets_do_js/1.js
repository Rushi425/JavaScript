// const arr = []
// %DebugPrint(arr)


// Two types of arr continous and holey
// SMI (small integer)
// Packed element
// Double (float, string, function)
const arr = [1, 2, 3, 4] // packed SMI elements
arr.push(6.0)  //Packed Double elements
arr.push('7') // (anything) Packed elements
arr[10] = 7; //Holey elements

console.log(arr);
console.log(arr.length);
console.log(arr[9]);


//arr element accessed how?
// 1.bound check            : if array is continous - stop, not - further steps
// 2.hasOwnProperty(arr,9)  : if the array is holey array
// 3.hasOwnProperty(arr.prototype, 10)
// 4.hasOwnProperty(Object.prototype, 10)

//hoels are very ecpensive



// SMI > Double > packed
// H_SMI > H_Double > H_packed


const array = new array(3)// 3 holes. Holey_SMI_elements
array[0] = '1' // Holey Elements
array[1] = 2 // Holey Elements