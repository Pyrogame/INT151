//filter function does not change an original array
const words = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
//1.annonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6)
//2. annonymous function declaration
// const shortWords = words.filter(function (word) {
//   return word.length <= 6
// })
//3. reuse callback function (named function)
function wordLength(word) {
  return word.length <= 6
}
const shortWords = words.filter(wordLength)
console.log(words)
console.log(shortWords)
//sort function changes original array
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

const map1 = words.map(word => word.toUpperCase())
console.log(map1)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

const mapid = students.map((students) => students.id)
console.log(mapid)

const mapid2 = students.map((students) => students.id).filter(id => id % 2=== 0)
console.log(mapid2)

const found = words.map(words => words.toLowerCase()).filter(word => word.includes("mango"));
console.log(found)

if (words.find(word => word === "Apple")) {
    console.log("Has Apple.");
} else {
    console.log("Not have Apple.");
}

const cart = [
    {productID: 1001, price: 500, quantity:2},
    {productID: 1002, price: 10, quantity:3},
    {productID: 1003, price: 5, quantity:10},
]
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


console.log(total)

//find cart total and return object that show the total {total: 1080}
// remove the last two owr==wrd,
// add 'melon' nad 'cherry' aftr "Apple"
words1.splice(2,1,'banana')
console.log(words1);
words1.splice(3,2)
console.log(words1);
words1.splice(2,0,'melon','cherry')
console.log(words1);


const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]