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
console.log('***********************************************PROMISES END');
