//Creating an app that calculates my age in dog years.
let myAge = 30;
let earlyYears = 2;
earlyYears *= 10.5;
/*Subtracting two years that we already counted for. The first two years a dog ages at 10.5 "human" years per year. 
After that they age at 4 human years per year.*/
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Kieu'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);