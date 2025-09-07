
// เขียนฟังก์ชัน sumArray(arr) เพื่อหาผลรวมของตัวเลขใน Array
// ตัวอย่าง: sumArray([1, 2, 3, 4]) → 10

function sumArray(arr){
    return arr.reduce((sum , num) => sum + num ,0)
}

// โจทย์ที่ 2: ค่ามากที่สุดและค่าน้อยที่สุด
// เขียนฟังก์ชัน findMinMax(arr) ที่ return เป็น object {min: ..., max: ...}
// [5, 8, 2, 7, 1] → {min: 1, max: 8}

function findMinMax(arr){
    return { min: Math.min (...arr) , max: Math.max (...arr)}
}

// โจทย์ที่ 3: กลับลำดับ Array
// เขียนฟังก์ชัน reverseArray(arr) ที่รับ Array แล้ว return ค่าแบบกลับด้าน
// [1, 2, 3, 4] → [4, 3, 2, 1]

function reverseArray(arr) {
  return [...arr].reverse();
}

// โจทย์ที่ 4: ตรวจสอบค่าซ้ำ
// เขียนฟังก์ชัน hasDuplicate(arr) ที่ return true ถ้า Array มีค่าซ้ำ และ false ถ้าไม่ซ้ำ
// [1, 2, 3, 2] → true
// [4, 5, 6] → false

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}


// โจทย์ที่ 5: นับจำนวนเลขคู่และเลขคี่
// เขียนฟังก์ชัน countEvenOdd(arr) ที่ return {even: จำนวนเลขคู่, odd: จำนวนเลขคี่}
// [1, 2, 3, 4, 5, 6] → {even: 3, odd: 3}

function countEvenOdd(arr) {
  const even = arr.filter(n => n % 2 === 0).length;
  return { even, odd: arr.length - even };
}


// โจทย์ที่ 6: ค่าเฉลี่ยของ Array
// เขียนฟังก์ชัน averageArray(arr) เพื่อหาค่าเฉลี่ยของข้อมูลทั้งหมด
// [2, 4, 6, 8] → 5

function averageArray(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// โจทย์ที่ 7: จัดเรียงข้อมูล
// เขียนฟังก์ชัน Sort(arr) ที่จัดเรียง Array จากน้อยไปมาก
// [5, 3, 8, 1] → [1, 3, 5, 8]

function Sort(arr) {
    return arr.sort((a, b) => a - b);
}

// โจทย์ที่ 8: หาค่าที่เจอบ่อยที่สุด 
// เขียนฟังก์ชัน findMode(arr) ที่หาค่าซ้ำที่เจอบ่อยที่สุด
// [1, 2, 2, 3, 1, 2] → 2

function findMode(arr) {
    return arr.sort((a, b) =>
           arr.filter(x => x === b).length - arr.filter(x => x === a).length)[0];
}

// โจทย์ที่ 9: เขียนฟังก์ชัน filterPositive(arr) 
// ที่รับ Array ของตัวเลข แล้ว return เฉพาะค่าที่เป็นบวก (มากกว่า 0) 
// ในรูปแบบ Array ใหม่

function filterPositive(arr) {
  return arr.filter(n => n > 0);
}


// โจทย์ที่ 10:
// เขียนฟังก์ชัน processArraySimple(arr) ที่ทำงานดังนี้:
// กรองเฉพาะเลขคู่ (filter)
// คูณแต่ละตัวด้วย 2 (map)
// ส่งกลับ Array ใหม่

function processArraySimple(arr) {
  return arr.filter(n => n > 0 && n % 2 === 0).map(n => n * 2);
}                   

//export
module.exports = { sumArray ,
     findMinMax ,
     reverseArray ,
     hasDuplicate ,
     countEvenOdd ,
     averageArray,
     Sort , 
     findMode , 
     filterPositive , 
     processArraySimple };