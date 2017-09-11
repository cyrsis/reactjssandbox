var getProduct = function (productId = 1000){
    console.log(productId)
}

getProduct() //1000

var baseTax =0.07;
var getTotal = function (price, tax= price*baseTax) {
    console.log(price + tax)
}

getTotal(5.0) //5.35, works with

function generatedBaseTax() {
    return 0.07
};



var getTotalByFunction = function(price,tax = price * generatedBaseTax()){
    console.log(price + tax)
}
getTotalByFunction(5)

var getTotoalDynamic = new Function ("price = 20", "return price");

console.log(getTotoalDynamic()) //20 , dynamic function works