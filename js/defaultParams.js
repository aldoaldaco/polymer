const area = (n = 1, m = 1) => {
  return n * m;
};
const area2 = (n, m) => {
  return n || 1 * m || 1;
};
const area3 = (n, m) => {
  if(n && m) {
    return n * m;
  }
  return 1;
};

console.log(area(undefined, undefined));
console.log(area2(undefined, undefined));
console.log(area3(undefined, undefined));
