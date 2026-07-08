console.log("array iterations");

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map((item, index) => {
  return item *2 ;
});

console.log(numbers);
console.log(doubled);

const products = [
  { name: "product 1", price: 1000, inStock: true },
  { name: "product 2", price: 4000, inStock: true },
  { name: "product 3", price: 10000, inStock: false },
];

const priceeee = products.map((item,index)=> {
    return item.price-100
})

console.log(priceeee)

const user = {
  name: "abc",
  age: 20,
};

console.log(user.name);

products.forEach((item) => {
  console.log(item);
});

const names = products.map((item, index) => {
  return item.name;
});

console.log(names);

const prices = products.map((item, index) => {
  return item;
});

console.log(prices);



const nu = [1, 2, 3, 4, 5, 6];


const squares = nu.map ((item,index)=>{
    return item*item
})


console.log(squares)

const evens = nu.filter ((item,index)=>{
   return  item%2===0 
})

console.log(evens)


 const expensives = products.filter((item,index)=> {
    return item.price>3000
 })

 console.log(expensives)




