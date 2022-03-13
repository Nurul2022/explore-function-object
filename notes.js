var computer = { price: 29000, Storage: '256gb', color: 'silver', processor: 'intel i5' }
// (first way) To know property value
console.log(computer.processor);   // rs intel i5 

// (Second way) To know property value
var computerProcessor = computer.processor;
console.log(computerProcessor);   // rs intel i5

// (first way) Set a object property value (. dot system)
computer.price = 22000;  // Computer price change from 29000 to 22000
console.log(computer.price);  // rs 22000

// (Second way) Set a object property value ( [] third br. system)
computer['price'] = 24000;  // Computer price change from 22000 to 24000
console.log(computer['price']); //or console.log(computer.price) //rs 24000

// (Third way) Set a object property value
var pricePropert = "price";
computer[pricePropert] = 19000; // Computer price change from 24000 to 19000
console.log(computer[pricePropert]) //or console.log(computer.price) //rs 19000
