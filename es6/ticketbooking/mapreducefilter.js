const arr = [1, 2, 3, 4, 5];
//map
const mapArr = arr.map((ele) => 
    {return ele * 4});
console.log(mapArr);
//reduce
const sum = arr.reduce((acc, ele) => acc += ele, 0);
console.log(sum);
//filter
const filterdata = arr.filter((ele) => ele % 4 === 0);
console.log(filterdata); 
// Example with objects

const products = [
  { name: "Phone", cost: 1200 },
  { name: "Headphones", cost: 500 },
  { name: "Charger", cost: 300 },
  { name: "Watch", cost: 800 }
];

const below600 = products.filter(product => product.cost <= 600);

console.log(below600);

const productNames = products.map(product => product.name);

const mapData = DataTransfer.map(product => product.name);
console.log(mapData);

const filterOnPrice = DataTransfer.filter(product => product.cost <= 600);
console.log(filterOnPrice);

const totalCost = products.reduce((acc, product) => acc + product.cost, 0);
console.log(totalCost);
