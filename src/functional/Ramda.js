var R = require('ramda');

var square = n => n * n;


console.log(R.map(square, [4, 8]))
//Function first, data last
// [16, 64]

//http://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html
// '' +
// 'The best work is from here'
//And this one too
//http://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html