const {
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
} = require("../Practice-02.js");

// removeNegatives
if (typeof removeNegatives === "function") {
  test("removeNegatives should remove negative numbers", () => {
    expect(removeNegatives([3, -1, 0, -5, 7])).toEqual([3, 0, 7]);
  });
} else {
  test.skip("removeNegatives not implemented yet", () => {});
}

// productArray
if (typeof productArray === "function") {
  test("productArray should return product of all numbers", () => {
    expect(productArray([1, 2, 3, 4])).toBe(24);
  });
} else {
  test.skip("productArray not implemented yet", () => {});
}

// secondLargest
if (typeof secondLargest === "function") {
  test("secondLargest should return the second largest number", () => {
    expect(secondLargest([5, 3, 9, 1, 9])).toBe(5);
  });
} else {
  test.skip("secondLargest not implemented yet", () => {});
}

// averagePositive
if (typeof averagePositive === "function") {
  test("averagePositive should return average of positive numbers", () => {
    expect(averagePositive([-1, 2, 3, -4])).toBe(2.5);
  });
} else {
  test.skip("averagePositive not implemented yet", () => {});
}

// mergeArrays
if (typeof mergeArrays === "function") {
  test("mergeArrays should merge two arrays without duplicates", () => {
    expect(mergeArrays([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
} else {
  test.skip("mergeArrays not implemented yet", () => {});
}

// longestString
if (typeof longestString === "function") {
  test("longestString should return the longest string", () => {
    expect(longestString(['hi','hello','hey'])).toBe('hello');
  });
} else {
  test.skip("longestString not implemented yet", () => {});
}

// allEven
if (typeof allEven === "function") {
  test("allEven should return true if all numbers are even", () => {
    expect(allEven([2,4,6])).toBe(true);
    expect(allEven([2,3,4])).toBe(false);
  });
} else {
  test.skip("allEven not implemented yet", () => {});
}

// groupByParity
if (typeof groupByParity === "function") {
  test("groupByParity should group numbers by even/odd", () => {
    expect(groupByParity([1,2,3,4])).toEqual({ odd:[1,3], even:[2,4] });
  });
} else {
  test.skip("groupByParity not implemented yet", () => {});
}

// rotateLeft
if (typeof rotateLeft === "function") {
  test("rotateLeft should rotate array to the left by n positions", () => {
    expect(rotateLeft([1,2,3,4,5], 2)).toEqual([3,4,5,1,2]);
  });
} else {
  test.skip("rotateLeft not implemented yet", () => {});
}

// mapLengths
if (typeof mapLengths === "function") {
  test("mapLengths should return array of string lengths", () => {
    expect(mapLengths(['hi','hello','wow'])).toEqual([2,5,3]);
  });
} else {
  test.skip("mapLengths not implemented yet", () => {});
}
