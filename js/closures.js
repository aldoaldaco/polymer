'use strict';
console.log('***********************************************CLOSURE START');
function dad() {
  var age = 70;
  console.log('fuera');
  function son() {
    var name = "aldo";
    console.log('dentro');
    console.log('son: ', name);
    console.log('son: ', age);
  }
  console.log('dad: ', age);
  //console.log('dad: ', name);
  son();
}
dad();
//console.log(age);

/*const dad = () => {
  const age = 70;
  const name = "pppp";
  console.log('dad: ', age);
  console.log('dad: ', name);
  console.log(window === this);
  const son = () => {
    const name = "aldo";
    console.log('son: ', name);
    console.log('son: ', age);
    console.log(window === this);
  };
  son();
};
dad();*/
console.log('***********************************************CLOSURE END');
