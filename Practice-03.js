
// =========================
// ฟังก์ชันโจทย์ Object 10 ข้อ
// =========================

// 1. รวม object
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 2. นับจำนวน property
function countProperties(obj) {
  return Object.keys(obj).length;
}

// 3. ลบ property ตาม key
function removeProperty(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

// 4. ตรวจสอบ property มีอยู่หรือไม่
function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}

// 5. แปลง object เป็น array ของ keys
function objectKeysToArray(obj) {
  return Object.keys(obj);
}

// 6. แปลง object เป็น array ของ values
function objectValuesToArray(obj) {
  return Object.values(obj);
}

// 7. เปลี่ยนค่า property ทั้งหมดเป็น string
function stringifyValues(obj) {
  const result = {};
  for (let key in obj) {
    result[key] = String(obj[key]);
  }
  return result;
}

// 8. รวม array ของ object เป็น object
function combineArrayOfObjects(arr) {
  return arr.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

// 9. คัดเฉพาะ property ที่เป็นตัวเลข
function pickNumberProperties(obj) {
  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result[key] = obj[key];
    }
  }
  return result;
}

// 10. ตรวจสอบค่า value มีซ้ำหรือไม่
function hasDuplicateValues(obj) {
  const values = Object.values(obj);
  return new Set(values).size !== values.length;
}

// โจทย์ อจ ในห้อง
function getFreqOfWords(input) {
    if (typeof input !== 'string') {
        return undefined;
    }
    // ตรวจสอบ ว่าเป็นสตริงหรือป่าวถ้าไม่ก็return undefiend
    const words = input.toLowerCase().split(/\s+/);
    // ทำให้เป็นlowercase กับ เเยกคำ
    const all = {};

    for (const word of words) {
        all[word] = (all[word] || 0) + 1;
    }
    // ทำคำที่ได้มาเปรียบเทียบ เมื่อเกิดคำซํ้าบวกค่า 1 ใน all 
    // จากนั้นเมื่อลูปเสร็จ return ออกมาเป็น object โดน {}
    return all;
}

console.log(getFreqOfWords('Today is present and present is your gift'))
//{today: 1, is: 2, present:2, and: 1,your: 1,gift: 1}
console.log(getFreqOfWords('Do you best just do it'))
//{do: 2, you: 1, best: 1, just: 1, it: 1}
console.log(getFreqOfWords(null))//undefined
console.log(getFreqOfWords(undefined))//undefined

// export
module.exports = {
  mergeObjects,
  countProperties,
  removeProperty,
  hasKey,
  objectKeysToArray,
  objectValuesToArray,
  stringifyValues,
  combineArrayOfObjects,
  pickNumberProperties,
  hasDuplicateValues
};
