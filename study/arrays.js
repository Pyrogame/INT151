const Arr = [1 ,2 ,3 ,4 , "five", "six ", null, Infinity, 0]
const colors=[{id:1, name: 'red', tone: 'hot'},{id:2, name: 'purple',
tone: 'cool'},{id:3, name: 'white' ,
tone: 'neutral ' } ]
console. log(colors[1])
//array contains many objects
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts[0].email[1])
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
for(i = 0; i < groups.length ; i++){
    console.log(groups[i][groups[i].length-1])
}

console.log(Arr);
console.log(`length = ${Arr.length}`)
console.log(`First = ${Arr[0]}`)
console.log(`Last = ${Arr[Arr.length-1]}`)
for (let i = 0; i < Arr.length; i++) {
    console.log(`Loop =${Arr[i]}`);
}
//Growing
Arr[Arr.length]="sexy"
console.log(Arr)
console.log(Arr.length) 

//shrinking
console.log(Arr.pop())
console.log(Arr)

let arry = [1, 2 , "three" , [1 , 2 , "four", [ 2 , 5 , 6],{name : "Popsiam"}]]

const TeamAA= {name: "Team AA",members: [{ name: "Apinan", age: 20 },{ name: "Thanakit", age: 22 },{ name: "Poonyawat", age: 21 }]};


let Greeting = "hellowolrd"
let GreetingCH = [...Greeting]
console.log(GreetingCH)

const arr1 = new Array()
console.log(arr1)
console.log(arr1.length)

const arr2 = new Array(10)
console.log(arr2)
console.log(arr2.length)

const arr3 = new Array(1,3,5)
console.log(arr3)
console.log(arr3.length)

const arr4 =Array.of(5)
console.log(arr4)
console.log(arr4.length)

const str='Hello'
const arr5 =Array.from(str)
console.log(arr5)
console.log(arr5.length)

const arr6=Array.from(arr4)
console.log(arr6)
console.log(arr6.length)