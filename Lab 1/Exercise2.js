// Q2 (a)
let message = () => {
    console.log("Welcome to Data Rep & Query");
}
message();


// Q2 (b)
/* Comment: Function takes an arguement
         and returns the passed variable
*/
let message1 = (myVal) => {
    
    console.log(myVal);
}

message1("Hello World!");

// Q2 (c)
/* Comment: Function takes two numbers and 
            returns sum of both numbers
*/
let x = (i, j) => {
    return(i+j);
}
console.log(x(3,2));

// Q2 (d)
/* Comment: Function that multiplies each number
            under 70 by 2 in an array
*/
let ages = [3, 451, 341, 4];

let myArray = ages.map(
    (age) => {
        if(age < 70){
            return age*2;
        }else{
            return age;
        }
    }
)

console.log(myArray);

