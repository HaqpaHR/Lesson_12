
let curry = (func, ...args1) =>
    (...args2) => func(...args1,...args2)

let sum = (...numbers) => numbers.reduce ((a, b)=> a + b, 0)

const curriedFunction = curry(sum, 1,2);
console.log(curriedFunction(3,4))


//2nd


function counter() {
    let value = 0;
    let count= {
        inc : function () {
          value++;
        },
        dec : function () {
          value--
        },
        value : function () {
          return value
        },
    };
    return  count;
}

const iterator = counter();
iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec() // уменьшает на 1

console.log(iterator.value()) // выводит 1