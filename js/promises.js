'use strict';
console.log('***********************************************PROMISES START');
var api = 'https://randomuser.me/api/?results=10';
fetch(api)
.then(response => {
  return response.json();
})
.then(users => {
  const arr = users.results.map(user => {
    return {
      gender: user.gender,
      name: user.name,
      email: user.email
    };
  });
  console.log(arr);
});


function validatePassword(password) {
  // create promise with resolve and reject as params
  return new Promise((resolve, reject) => {
    // validate that password matches bambi
    if (password !== 'bambi') {
      // password doesn't match, return an error with reject
      return reject('Invalid Password!');
    }
    // password matches, return a success state with resolve
    resolve();
  });
}

function done(err) {
  // if an err was passed, console out a message
  if (err) {
    console.log(err);
    return; // stop execution
  }
  // console out a valid state
  console.log('Password is valid!');
}

// dummy password
const password = 'foo';

// using a promise, call the validate password function
validatePassword(password)
.then(() => {
  // it was successful
  done(null);
})
.catch(err => {
  // an error occurred, call the done function and pass the err message
  done(err);
});
console.log('***********************************************PROMISES END');
