var arr = [1,2,3,4]

var sum = function (a,b) {
    console.log(a,b);
    return a+ b
}
console.log(arr.reduce(sum)) //对数组所有成员进行"累积"处理。