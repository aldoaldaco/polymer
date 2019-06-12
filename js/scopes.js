'use strict';
console.log('***********************************************SCOPE START');
/*const func = () => {
console.log(this === window);
  const obj = {
    name: 'aldo',
    getName: () => {
      return this.name;
    }
  };
  console.log(obj.getName());
};
func();*/

/*function func() {
  console.log(window === this);
  this.name = 'juan';
  const obj = {
    name: 'aldo',
    getName: () => {
      console.log(window === this);
      return this.name;
    }
  };
  console.log(obj.getName());
}

new func();*/

/*function func() {
  console.log(window === this);
  this.name = 'juan';
  const obj = {
    name: 'aldo',
    getName: function() {
      console.log(window === this);
      return this.name;
    }
  };
  console.log(obj.getName());
}

console.log(new func().name);*/

/*const func = () => {
  console.log(window === this);
  this.name = 'juan';
  const obj = {
    name: 'aldo',
    getName: function() {
      console.log(window === this);
      return this.name;
    }
  };
  console.log(obj.getName());
};

func();*/

/*const func = () => {
  console.log(window === this);
  this.name = 'juan';
  const obj = {
    name: 'aldo',
    getName: function() {
      console.log(window === this);
      return this.name;
    }.bind(this)
  };
  console.log(obj.getName());
};

func();*/
console.log('***********************************************SCOPE START');
