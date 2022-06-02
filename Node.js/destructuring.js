// 비구조화 할당
const object = { a: 1, b: 2};
const array = [1, 2];
const [one, two] = array;

// const a = object.a;
// const b = object.b;

const {a, b} = object;

console.log(a);
console.log(b);

console.log(one);
console.log(two);