// 异步获取 JSON 数据的一条示例数据
var records = [
    {
        "id": 1,
        "title": "Currying Things",
        "author": "Dave",
        "selfurl": "/posts/1",
        "published": 1437847125528,
        "tags": [
            "functional programming"
        ],
        "displayDate": "2015-07-25"
    },
    // ...
];

function filter(list, fn) {  //fn is predicate
    return list.filter(fn); //  = 因为当我们将操作抽象成一个函数时，我们就可以使用 Currying(柯里化) 来构建一个更有用的函数
}

function howmany(...args)
{
    console.log(`arg, ${args} length, ${args.length}`) //Only in ES6
}

howmany(1,2,3,4)  //arg, 1,2,3,4 length, 4

//From here http://www.css88.com/archives/7794
