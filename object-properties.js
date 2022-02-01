var computer = { price: 29000, Storage: '256gb', color: 'silver', processor: 'intel i5' }
//console.log(computer);
//console.log(computer.processor);
var computerPrice = computer.price;

//set a object property value (first way)
computer.price = 22000;
//console.log(computer);
//console.log(computerPrice);

// diferent ways to set a value of an object property (second way)
// computer.price = 22000;
// computer['price'] = 23000;
// console.log(computer);

//set a object property value (third way)
var pricePropert = "price";

computer.price = 22000;
computer["price"] = 23000;
computer[pricePropert] = 19000;

var storageProperty = 'storage';
computer[storageProperty] = '512gb'; 
computer['Storage'] = '1tb';
computer.Storage = '5tb';

console.log(computer);
