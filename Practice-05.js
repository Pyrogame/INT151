

// โจทย์ 1: ฟังก์ชัน double
// คำสั่ง: เขียนฟังก์ชัน double(n) ที่รับตัวเลขแล้ว return ค่าคูณ 2

// I/O ตัวอย่าง:
// double(4) → 8
// double(0) → 0
// ข้อเพิ่มเติม: export แบบ named export
function double(n) {
  return n * 2;
}


// โจทย์ 2: ฟังก์ชัน reverseString
// คำสั่ง: เขียนฟังก์ชัน reverseString(str) ที่รับ string แล้ว return string กลับด้าน

// I/O ตัวอย่าง:
// reverseString("abc") → "cba"
// reverseString("") → ""
// ข้อเพิ่มเติม: export แบบ default export
function reverseString(str) {
  return str.split("").reverse().join("");
}


// โจทย์ 3: class User และ constant ROLE
// คำสั่ง:
// สร้าง class User ที่มี property id และ name
// สร้าง constant ROLE = "admin"

// I/O ตัวอย่าง:
// const u = new User(1, "Alice");
// console.log(u.name) → "Alice"
// console.log(ROLE) → "admin"
// ข้อเพิ่มเติม: export แบบ named export, เปลี่ยนชื่อ constant เป็น USER_ROLE
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const ROLE = "admin";
export { User, double, ROLE as USER_ROLE };
export default reverseString;
