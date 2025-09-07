
// =========================
// Object & Array Practice 10 ข้อ
// =========================

// 1. แสดง property และค่า
// Input: {name: "Alice", age: 25}
// Output: "name: Alice", "age: 25"
function showProperties(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  return obj;
}

// 2. คัดเฉพาะค่าที่เป็นตัวเลข
// Input: {a:1, b:"x", c:3}
// Output: {a:1, c:3}
function pickNumbers(obj) {
  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") result[key] = obj[key];
  }
  console.log("Numbers only:", result);
  return result;
}

// 3. แปลง array ของ object เป็น object รวม
// Input: [{a:1},{b:2},{c:3}]
// Output: {a:1,b:2,c:3}
function mergeArrayObjects(arr) {
  const result = arr.reduce((acc, o) => ({ ...acc, ...o }), {});
  console.log("Merged object:", result);
  return result;
}

// 4. แปลง object เป็น array ของ key-value
// Input: {x:10, y:20}
// Output: [["x",10], ["y",20]]
function objectToEntries(obj) {
  const entries = Object.entries(obj);
  console.log("Entries:", entries);
  return entries;
}

// 5. นับ property ที่มีค่าตัวเลข
// Input: {a:1, b:"x", c:2}
// Output: 2
function countNumberProperties(obj) {
  const count = Object.values(obj).filter(v => typeof v === "number").length;
  console.log("Number properties count:", count);
  return count;
}

// 6. แปลงค่าทั้งหมดเป็น string
// Input: {a:1, b:true}
// Output: {a:"1", b:"true"}
function stringifyValues(obj) {
  const result = {};
  for (let key in obj) result[key] = String(obj[key]);
  console.log("Stringified:", result);
  return result;
}

// 7. คัด property ตาม key list
// Input: obj={a:1,b:2,c:3}, keys=["a","c"]
// Output: {a:1,c:3}
function pickKeys(obj, keys) {
  const result = {};
  keys.forEach(k => { if(k in obj) result[k] = obj[k]; });
  console.log("Picked keys:", result);
  return result;
}

// 8. รวม object และบวกค่าตัวเลขถ้ามี key ซ้ำ
// Input: {a:2,b:3}, {a:5,c:1}
// Output: {a:7,b:3,c:1}
function mergeAddNumbers(obj1, obj2) {
  const result = { ...obj1 };
  for (let k in obj2) {
    if (typeof obj2[k] === "number" && typeof result[k] === "number") {
      result[k] += obj2[k];
    } else {
      result[k] = obj2[k];
    }
  }
  console.log("Merged with sum:", result);
  return result;
}

// 9. ตรวจสอบค่าซ้ำใน object
// Input: {a:1, b:2, c:1}
// Output: true
function hasDuplicateValues(obj) {
  const values = Object.values(obj);
  const duplicate = new Set(values).size !== values.length;
  console.log("Has duplicate values:", duplicate);
  return duplicate;
}

// 10. คัด property เป็นตัวเลขคู่
// Input: {a:2,b:3,c:4}
// Output: {a:2,c:4}
function pickEvenNumbers(obj) {
  const result = {};
  for (let k in obj) {
    if (typeof obj[k] === "number" && obj[k] % 2 === 0) result[k] = obj[k];
  }
  console.log("Even numbers:", result);
  return result;
}

//โจทย์ อจ

const array14 = [1 ,30 ,4 ,21 ,10000]
array14.sort((a , b) => a - b)
console.log(array14)

const stds = [
    { id : 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th"},
    { id : 5, name: "Pornchat", email: "pornchai@sit.kmutt.ac.th" },
    { id : 2, name: "suda", email: "suda@sit.kmutt.ac.th" },
]
stds.sort((a, b) => a.name.localeCompare(b.name))
console.log(stds)


// export
module.exports = {
  showProperties,
  pickNumbers,
  mergeArrayObjects,
  objectToEntries,
  countNumberProperties,
  stringifyValues,
  pickKeys,
  mergeAddNumbers,
  hasDuplicateValues,
  pickEvenNumbers
};