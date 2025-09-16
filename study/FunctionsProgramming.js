const formatFullName = (fname, lname) => `${fname} ${lname} This is function`;

const applyFormatter = (fname, lname, formatter) => formatter(fname, lname);

console.log(applyFormatter('Hello', 'Mac', formatFullName));
