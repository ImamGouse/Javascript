//11. Leap year

let year = 2020;
let n = 20;
let count = 0;
while (count != n)
    {
        year = year + 1;
           if ((year % 400 == 0)|| (year % 4 == 0 && year % 100 != 0)) {
              count++; 
              console.log(year);
            }
    }

//12. Fibonacci Series

let n1 = 1, n2 = 1, n3;

console.log('Fibonacci Series:');

for (let i = 1; i <= 100; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}

//13.Concat Array


let arr1 = [a,b,c];
let arr2 = [1,2,3];

//let arr3 = arr1.concat(arr2); 
console.log(arr1.concat(arr2));

//14.Natural Number

var number = ParseInt(prompt('Enter a positive integer: '));

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);

//15.EvenOdd

const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}