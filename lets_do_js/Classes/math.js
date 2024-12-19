const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);



//to create own property
const hello ={
    name:'john',
    age:'30',
    isAvailable : true
}
// console.log(hello);
// console.log(Object.getOwnPropertyDescriptor(hello, 'age'));
// now to change the properties
Object.defineProperty(hello, 'age',{
    writable: false, enumerable: false, configurable:false
})
// console.log(Object.getOwnPropertyDescriptor(hello, 'age'));
hello.age = 45; // the value of age is not changable due to false
// console.log(Object.getOwnPropertyDescriptor(hello, 'age'));


// loop
// for (const [key, value] of chai) {
//     console.log(key, value);
// }
for (const [key, value] of Object.entries(hello)) {
    console.log(`${key} : ${value}`);
}



// we can't overwrite and fixed or defined properties
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

