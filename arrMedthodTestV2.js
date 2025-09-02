//check array type
console.log(Array.isArray([]))
console.log(Array.isArray([1, true]))
console.log(Array.isArray("[]"))
//merge string
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3)
//convert to string
console.log(array3.toString())

const nums=[13,5,7]
nums.reverse()
console.log(nums)
