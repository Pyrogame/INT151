// function echo(value){
//     return value
// }
// //default export
// module.exports = echo

// //name export
// module.exports = {echo}
// export default function getLength(str){
//     return str.length
// }
// const MAXSTUDENT = 60
// const TAX = 0.07

//export list
// export { echo, getLength, TAX}
// module.exports = {echo, getLength , MAXSTUDENT, TAX} // {echo:echo, getLength:getLength}
function echo(value) {
  return value
}
function getLength(str) {
  return str.length
}
const TAX = 0.07
let x = 1


class book {
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}
 
//export list
export { book, echo, getLength as default, TAX as VAT}