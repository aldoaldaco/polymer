console.log('***********************************************CLASSES START');
class Person {
  constructor(name, lastName, age, weight) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
  }

  greeting() {
    console.log(`Hi my name is: ${this.name} and im ${this.age} years old`);
  }

  static description() {
    console.log(`Hola soy un desarrollador`);
  }

  static create() {
    return new Person('alguien', 'alguno', 10, 70);
  }
}
Person.description();
const aldo = new Person('aldo', 'aldaco', 27, 68);

const alguien = Person.create();
aldo.greeting();
alguien.greeting();

console.log('***********************************************CLASSES END');
