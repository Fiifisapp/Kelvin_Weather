//the value for kelvin is a constant
const kelvin = 0;

//code formula for converting from kelvin to celsius 
const celsius = kelvin - 273;

//this equation used to calculate temperatures in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//this code rounds down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Convert celsius to the Newton scale
let newton = celsius * (33/100);

//this code rounds down the newton scale
newton = Math.floor(newton);

//code to print out the newton
console.log(`The temperature is ${newton} degrees Newton`);
