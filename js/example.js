let string = '';
const reverseWords = (str) => str.split(' ').map(element => {
  return string.concat(element);
}).reverse();

console.log(reverseWords('ada^^ASÇ¨+`` ,asd ,llaooaoao,.-´´``´´^^¨'));
