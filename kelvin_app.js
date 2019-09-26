//The forecast for today in Kelvin.
const kelvin = 293;
//Converting kelvin to celsius.
let celsius = kelvin - 273;
//Converting celsius to fahrenheit. 
let fahrenheit = celsius * (9/5) + 32;
//Rounding up fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);