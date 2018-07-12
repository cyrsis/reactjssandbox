var React = require('react')
console.log(React)


const source = Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
});
const source1 = source.map(val => `hello ${val}`);
const subscription = source1.subscribe(value => console.log(value));
subscription.next('foo1');

// forEach和subscribe相似，同是实现订阅效果，等到promise可以监控subscription完成和失败的异常。
// 日志打印并没有comlete, 因为source并没有完成关闭，触发调用observer.complete()
const promise = source1.forEach(value => console.log(value))
promise.then(() => console.log('complete'), (err) => console.log(err));