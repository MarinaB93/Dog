//My age in human years
var myAge = 28;
//Value will change later in code
let earlyYears = 2;
earlyYears *= 10.5;
//First two years in dog years
let laterYears = myAge - 2;
//Number of dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//My age in dog years
var myAgeInDogYears = earlyYears + laterYears;
//My name all in lower cases
var myName = 'Marina';
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);