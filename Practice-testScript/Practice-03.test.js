const {
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
} = require("../Practice-03.js");

// mergeObjects
if (typeof mergeObjects === "function") {
  test("mergeObjects should combine two objects", () => {
    expect(mergeObjects({a:1},{b:2})).toEqual({a:1,b:2});
  });
} else {
  test.skip("mergeObjects not implemented yet", () => {});
}

// countProperties
if (typeof countProperties === "function") {
  test("countProperties should return number of properties", () => {
    expect(countProperties({a:1,b:2,c:3})).toBe(3);
  });
} else {
  test.skip("countProperties not implemented yet", () => {});
}

// removeProperty
if (typeof removeProperty === "function") {
  test("removeProperty should remove specified property", () => {
    expect(removeProperty({a:1,b:2,c:3}, 'b')).toEqual({a:1,c:3});
  });
} else {
  test.skip("removeProperty not implemented yet", () => {});
}

// hasKey
if (typeof hasKey === "function") {
  test("hasKey should check if object has key", () => {
    expect(hasKey({a:1,b:2}, 'b')).toBe(true);
    expect(hasKey({a:1,b:2}, 'c')).toBe(false);
  });
} else {
  test.skip("hasKey not implemented yet", () => {});
}

// objectKeysToArray
if (typeof objectKeysToArray === "function") {
  test("objectKeysToArray should return array of keys", () => {
    expect(objectKeysToArray({a:1,b:2})).toEqual(['a','b']);
  });
} else {
  test.skip("objectKeysToArray not implemented yet", () => {});
}

// objectValuesToArray
if (typeof objectValuesToArray === "function") {
  test("objectValuesToArray should return array of values", () => {
    expect(objectValuesToArray({a:1,b:2})).toEqual([1,2]);
  });
} else {
  test.skip("objectValuesToArray not implemented yet", () => {});
}

// stringifyValues
if (typeof stringifyValues === "function") {
  test("stringifyValues should convert all values to strings", () => {
    expect(stringifyValues({a:1,b:true,c:null})).toEqual({a:"1",b:"true",c:"null"});
  });
} else {
  test.skip("stringifyValues not implemented yet", () => {});
}

// combineArrayOfObjects
if (typeof combineArrayOfObjects === "function") {
  test("combineArrayOfObjects should merge array of objects", () => {
    expect(combineArrayOfObjects([{a:1},{b:2},{c:3}])).toEqual({a:1,b:2,c:3});
  });
} else {
  test.skip("combineArrayOfObjects not implemented yet", () => {});
}

// pickNumberProperties
if (typeof pickNumberProperties === "function") {
  test("pickNumberProperties should return only number properties", () => {
    expect(pickNumberProperties({a:1,b:"x",c:3,d:true})).toEqual({a:1,c:3});
  });
} else {
  test.skip("pickNumberProperties not implemented yet", () => {});
}

// hasDuplicateValues
if (typeof hasDuplicateValues === "function") {
  test("hasDuplicateValues should detect duplicate values", () => {
    expect(hasDuplicateValues({a:1,b:2,c:1})).toBe(true);
    expect(hasDuplicateValues({a:1,b:2,c:3})).toBe(false);
  });
} else {
  test.skip("hasDuplicateValues not implemented yet", () => {});
}
