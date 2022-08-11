const username: string = 'Ferran Petit';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 3);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const ferran = new Person(25, 'Ferran');

console.log(ferran);
