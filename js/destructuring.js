const [first, second, tirth] = ['one', 'dos', 'tres'];
console.log(first);
console.log(second);
console.log(tirth);
const {one, dos, tres} = {
  one: 'first',
  dos: 'second',
  three: 'third'
};
console.log(one, dos, tres);
const address = {
  city: "Costa Mesa",
  state: "CA",
  zip: 92444
};
const {city: c, state: s, zip: z} = address;
console.log(c, s, z);
const aboutEdward = {
  info: ['Edward', 30],
  favColor: 'blue',
  favSushiRoll: 'Squidy squid squid'
};
const profilePage = ({favColor} = {favColor: 'vintage pink'}, [name, age] = ['Bunny', 24]) => {
  console.log(`My name is ${name}. I am ${age} years old and my favorite color is ${favColor}!`)
};
profilePage();
profilePage(aboutEdward, aboutEdward.info);
