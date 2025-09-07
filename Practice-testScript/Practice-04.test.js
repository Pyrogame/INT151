const {
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
} = require("../Practice-04.js");

// 1. showProperties
if (typeof showProperties === "function") {
  test("showProperties displays all properties", () => {
    expect(showProperties({name:"Alice",age:25})).toEqual({name:"Alice",age:25});
  });
} else { test.skip("showProperties not implemented",()=>{}); }

// 2. pickNumbers
if (typeof pickNumbers === "function") {
  test("pickNumbers returns only number properties", () => {
    expect(pickNumbers({a:1,b:"x",c:3})).toEqual({a:1,c:3});
  });
} else { test.skip("pickNumbers not implemented",()=>{}); }

// 3. mergeArrayObjects
if (typeof mergeArrayObjects === "function") {
  test("mergeArrayObjects merges array of objects", () => {
    expect(mergeArrayObjects([{a:1},{b:2},{c:3}])).toEqual({a:1,b:2,c:3});
  });
} else { test.skip("mergeArrayObjects not implemented",()=>{}); }

// 4. objectToEntries
if (typeof objectToEntries === "function") {
  test("objectToEntries converts object to entries", () => {
    expect(objectToEntries({x:10,y:20})).toEqual([["x",10],["y",20]]);
  });
} else { test.skip("objectToEntries not implemented",()=>{}); }

// 5. countNumberProperties
if (typeof countNumberProperties === "function") {
  test("countNumberProperties counts numeric properties", () => {
    expect(countNumberProperties({a:1,b:"x",c:2})).toBe(2);
  });
} else { test.skip("countNumberProperties not implemented",()=>{}); }

// 6. stringifyValues
if (typeof stringifyValues === "function") {
  test("stringifyValues converts all values to string", () => {
    expect(stringifyValues({a:1,b:true})).toEqual({a:"1",b:"true"});
  });
} else { test.skip("stringifyValues not implemented",()=>{}); }

// 7. pickKeys
if (typeof pickKeys === "function") {
  test("pickKeys returns only selected keys", () => {
    expect(pickKeys({a:1,b:2,c:3},["a","c"])).toEqual({a:1,c:3});
  });
} else { test.skip("pickKeys not implemented",()=>{}); }

// 8. mergeAddNumbers
if (typeof mergeAddNumbers === "function") {
  test("mergeAddNumbers merges objects and adds numeric values if key duplicates", () => {
    expect(mergeAddNumbers({a:2,b:3},{a:5,c:1})).toEqual({a:7,b:3,c:1});
  });
} else { test.skip("mergeAddNumbers not implemented",()=>{}); }

// 9. hasDuplicateValues
if (typeof hasDuplicateValues === "function") {
  test("hasDuplicateValues detects duplicate values", () => {
    expect(hasDuplicateValues({a:1,b:2,c:1})).toBe(true);
    expect(hasDuplicateValues({a:1,b:2,c:3})).toBe(false);
  });
} else { test.skip("hasDuplicateValues not implemented",()=>{}); }

// 10. pickEvenNumbers
if (typeof pickEvenNumbers === "function") {
  test("pickEvenNumbers returns only even numbers", () => {
    expect(pickEvenNumbers({a:2,b:3,c:4})).toEqual({a:2,c:4});
  });
} else { test.skip("pickEvenNumbers not implemented",()=>{}); }
