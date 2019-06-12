'use strict';
console.log('***********************************************LOOPS START');
const array = [{name: 'aldo'},{name: 'juan'},{name: 'lay'},{name: 'eli'}];
const myFunction = (s) => {
  return s.filter((element) => element.name !== 'aldo').map(element => {
    console.log(element);
  });
};
console.log(myFunction(array));

/*var array = [0,2,3,4,7];
for(let i = 0 ; i < array.length ; i++){
  console.log(i, array[i]);
}

var obj  = {
  name: 'aldo',
  age: 10,
  size: 8
};
console.log('');
for(var i in obj) {
  console.log(i, obj[i]);
}
var str = 'abcde';
for (let char of str) {
  console.log(char.toUpperCase().repeat(3));
}
var array1 = [
  {
    name: '1',
    age: 10,
    size: 8
  },
  {
    name: '1',
    age: 10,
    size: 5
  }
];
array1.forEach(function(element){
  console.log(element.name);
});

array1.map(function(element){
  return element.name = '1';
});*/
console.log();
console.log('***********************************************LOOPS END');
