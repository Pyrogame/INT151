// function plus(x) {
//     for (let i = 1; i <= 12; i++) {
//         console.log(i*x);
//     }
// }
// plus(12);


//1. function declaration
function mutiply1(a,b){
    return a*b
}
// console.log(mutiply1(2,3))

// 2, function expression (using arrow function syntax)
const mutiply2 = (a, b)=>{return a*b} //(a,b) => return a*b
// console.log(mutiply2(5,6))
// 3. function expression (using function declaration)
const mutiply3=function(a,b){return a*b}
// console.log(mutiply3(5,2));
// console.log(typeof multiply1)
// console.log(typeof multiply2)
// console.log(typeof multiply3)
// const x=multiply1
// const y=multiply2
// const z=multiply3
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// console.log(x(2,3))
// console.log(y(3,3))
// console.log(z(4,3))

// let a=1
// let b=a
// console.log( typeof a)
// console.log( typeof b)

// if(x===multiply1)
//     console.log("x equals to multiply1")
// else
//     console.log('x not equals to multiply1')


//3. return function as value of another function
function sayGoodbye (){
    return "Good bye"
}

function doSomething(

){
    return sayGoodbye
}
let doIT=doSomething()

// console.log(doIT())

// function myFunc(theObject) {
//     theObject.model = "A9999"
// }
// const product = {model: "A1001", price : 199}
// console.log(product.model)

// myFunc(product);
// console.log(product.model)

// function sum(x,y, ...z) {
//     // return x + y
//     // return arguments[0] + arguments[1]
//     for (argu of arguments){
//         console.log(argu)
//     }
//     console.log(`length : ${arguments.length}`)
//     console.log(`x:${x}`)
//     console.log(`y:${y}`)
//     console.log(`z:${z}`)
// }
// sum(1,2,3,4,5,6,7,8)


// function sum() {
//     let all = 0
//     for (argu of arguments){
//         all += argu
//     }
//     console.log(`length : ${arguments.length}`)
//     console.log(`sum : ${all}`)
// }
// sum(2,3,4,5)


// function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
//   return `${greet} ${whom} ${quote}`
// }
 
// console.log(greeting('hi'))
// console.log(greeting('Good morning'))
// console.log(greeting(undefined, null, 'Fine'))
// console.log(greeting())
 

// function sum(num1, num2, num3) {
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
//     return num1 + num2 + num3 
// }
// let num = [5]

// console.log(sum(10)) 

function getFreqOfWords(input){
    if (typeof input !== 'string') {
    return undefined
}
    let a = input
    let x = []
    for (x of a){
        return x
    }
}




console.log(getFreqOfWords('Today is present and present is your gift'))
//{today: 1, is: 2, present:2, and: 1,your: 1,gift: 1}
console.log(getFreqOfWords('Do you best just do it'))
//{do: 2, you: 1, best: 1, just: 1, it: 1}
console.log(getFreqOfWords(null))//undefined
console.log(getFreqOfWords(undefined))//undefined