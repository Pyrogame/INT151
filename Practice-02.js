
// =========================
// ฟังก์ชันโจทย์ 10 ข้อ
// =========================

// 1. ลบค่าติดลบ
function removeNegatives(arr) {
  return arr.filter(n => n >= 0);
}

// 2. ผลคูณของ array
function productArray(arr) {
  return arr.reduce((prod, n) => prod * n, 1);
}

// 3. ค่าที่ใหญ่เป็นอันดับสอง
function secondLargest(arr) {
  const sorted = [...new Set(arr)].sort((a,b) => b-a);
  return sorted[1];
}

// 4. ค่าเฉลี่ยของตัวเลขบวก
function averagePositive(arr) {
  const pos = arr.filter(n => n > 0);
  return pos.reduce((a,b) => a+b,0)/pos.length;
}

// 5. รวม array เอา element ซ้ำออก
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// 6. string ที่ยาวที่สุด
function longestString(arr) {
  return arr.reduce((longest, s) => s.length > longest.length ? s : longest, "");
}

// 7. ตรวจสอบเลขคู่ทั้งหมด
function allEven(arr) {
  return arr.every(n => n % 2 === 0);
}

// 8. แบ่ง array เป็นเลขคู่กับเลขคี่
function groupByParity(arr) {
  return arr.reduce((acc, n) => {
    const key = n % 2 === 0 ? 'even':'odd';
    if(!acc[key]) acc[key] = [];
    acc[key].push(n);
    return acc;
  }, {});
}

// 9. เลื่อน array ไปทางซ้าย n ตำแหน่ง
function rotateLeft(arr, n) {
  n = n % arr.length;
  return arr.slice(n).concat(arr.slice(0,n));
}

// 10. map string เป็นความยาว
function mapLengths(arr) {
  return arr.map(s => s.length);
}

//export
module.exports = {
  removeNegatives,
  productArray,
  secondLargest,
  averagePositive,
  mergeArrays,
  longestString,
  allEven,
  groupByParity,
  rotateLeft,
  mapLengths
};