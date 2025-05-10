const score = false;
const valueinNumber = Number(score);
// console.log(typeof score);
// console.log(typeof valueinNumber);
// console.log(valueinNumber);

/* Number Conversion 
"22" = 22
"22abc" = NaN
true =1, false =0,
*/

let loggedIn = "";
let log_status = Boolean(loggedIn);
//console.log(log_status);

/* Boolean Conversion 
1= true;
0= false;
"ravi" = true;
"" = false; 
*/

let name = 33;
let valueinString = String(name);
//console.log(typeof valueinString);

/* 33 = String(33) => 33 as a String
*/


/*prefix*/

let n1= 3;
let n2= ++n1;
console.log(`n1:${n1}, n2:${n2} `)

/*suffix*/
let n3 = 4;
let n4 = n3++;
console.log(`n3:${n3}, n4:${n4}`);