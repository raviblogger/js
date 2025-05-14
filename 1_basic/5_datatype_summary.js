// Data Types 

//Primitive  :-7 [string, Number, null, undefined, symbol, boolean, BigInt]


//Reference [Non-primitive]

//array, object, functions 

let v1 = 5;
let v2 =v1;
console.log(`v2: ${v2}`);
v1++;
v2=v1;
console.log(`v2: ${v2}`);

let array1 = ["r1", "r2"];
let array2 = array1;
console.log (`array2: ${array2}`);
array1.push("r3");
array2 = array1;
console.log(`array2:${array2}`);
console.log(`array1:${array1}`);

//primitive data is stored in different location with different address whereas non-primitive data 
//stored in same place with same address which called heap memory and stack memeory for primitive data.

let obj1 = {
    name:"dhoni",
    age: 15,
}
let obj2 = obj1;
console.log(`obj2: ${obj1}`);

obj1.gender = "male",

obj2=obj1;
console.log(`obj1: ${obj1.gender}`);
console.log(`obj2: ${obj2.gender}`);