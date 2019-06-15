'use strict';
console.log('***********************************************PROMISES START');
const validatePassword = (password) => {
  return new Promise((resolve, reject) => {
    if (password !== 'bambi') {
      return reject('Error compa');
    }
    resolve('Excellent');
  });
};

function a() {
  return {};
}
// dummy password
const password = 'bambi';

// using a promise, call the validate password function
validatePassword(password)
.then((obj) => {
  console.log(obj);
})
.catch(err => {
  console.log(err);
});
console.log('***********************************************PROMISES END');
console.log('***********************************************PROMISESALL START');
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
  resolve("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});
console.log('***********************************************PROMISESALL END');
