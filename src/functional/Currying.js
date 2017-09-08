
function add(a,b,c) {
    return a+b+c
}

function curriedAdd(a){  //Composition is like this, function take other function
    return function (b) {
        return function(c) {
            return a +b +c //a+ b is retained via function closure
        }
    }
}

function foo(a,b,c){ return a+b+c; }
var curriedFoo = curry(foo);

function curry(fn) {
    return function curried() {
        var args = [].slice.call(arguments);
        return args.length >= fn.length ?
            fn.apply(null, args) :
            function () {
                var rest = [].slice.call(arguments);
                return curried.apply(null, args.concat(rest));
            };
    };
}

var curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
// 6
console.log(curriedAdd(1)(2,3));
// 6

console.log(curriedAdd(1)(2)(3,4))
