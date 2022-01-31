function bringSingara(taka) {
    console.log('Given money for bring Singara', taka);
    console.log('Mama give me singara');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 90;
var singara = bringSingara(money);
console.log('Please take singara', singara)