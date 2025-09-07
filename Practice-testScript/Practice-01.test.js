const {
  sumArray,
  findMinMax,
  reverseArray,
  hasDuplicate,
  countEvenOdd,
  averageArray,
  Sort,
  findMode,
  filterPositive,
  processArraySimple
} = require("../Practice-01.js");

// sumArray
if (typeof sumArray === "function") {
  test("sumArray", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });
} else {
  test.skip("sumArray not implemented yet", () => {});
}

// findMinMax
if (typeof findMinMax === "function") {
  test("findMinMax", () => {
    expect(findMinMax([5, 8, 2, 7, 1])).toEqual({ min: 1, max: 8 });
  });
} else {
  test.skip("findMinMax not implemented yet", () => {});
}

// reverseArray
if (typeof reverseArray === "function") {
  test("reverseArray", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
} else {
  test.skip("reverseArray not implemented yet", () => {});
}

// hasDuplicate
if (typeof hasDuplicate === "function") {
  test("hasDuplicate", () => {
    expect(hasDuplicate([1, 2, 3, 2])).toBe(true);
    expect(hasDuplicate([4, 5, 6])).toBe(false);
  });
} else {
  test.skip("hasDuplicate not implemented yet", () => {});
}

// countEvenOdd
if (typeof countEvenOdd === "function") {
  test("countEvenOdd", () => {
    expect(countEvenOdd([1, 2, 3, 4, 5, 6])).toEqual({ even: 3, odd: 3 });
  });
} else {
  test.skip("countEvenOdd not implemented yet", () => {});
}

// averageArray
if (typeof averageArray === "function") {
  test("averageArray", () => {
    expect(averageArray([2, 4, 6, 8])).toBe(5);
  });
} else {
  test.skip("averageArray not implemented yet", () => {});
}

// Sort
if (typeof Sort === "function") {
  test("Sort", () => {
    expect(Sort([5, 3, 8, 1])).toEqual([1, 3, 5, 8]);
  });
} else {
  test.skip("Sort not implemented yet", () => {});
}

// findMode
if (typeof findMode === "function") {
  test("findMode", () => {
    expect(findMode([1, 2, 2, 3, 1, 2])).toBe(2);
  });
} else {
  test.skip("findMode not implemented yet", () => {});
}
// filterPositive
if (typeof filterPositive === "function") {
  test("filterPositive should return only positive numbers", () => {
    expect(filterPositive([1, -2, 3, 0, -5])).toEqual([1, 3]);
    expect(filterPositive([-1, -2, -3])).toEqual([]);
    expect(filterPositive([0, 5, 10])).toEqual([5, 10]);
  });
} else {
  test.skip("filterPositive not implemented yet", () => {});
}

// processArraySimple
if (typeof processArraySimple === "function") {
  test("processArraySimple should filter even positive numbers and double them", () => {
    expect(processArraySimple([1, 2, 3, 4, 5])).toEqual([4, 8]);
    expect(processArraySimple([0, -2, 6, 7])).toEqual([12]); // -2 และ 0 ถูกกรองออก
    expect(processArraySimple([1, 3, 5])).toEqual([]);        // ไม่มีเลขคู่บวก
    expect(processArraySimple([-4, -6, 0])).toEqual([]);      // ทุกตัวกรองออกหมด
  });
} else {
  test.skip("processArraySimple not implemented yet", () => {});
}