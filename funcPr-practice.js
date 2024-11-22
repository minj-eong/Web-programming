const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}

console.log(`total price = ${totalPrice}`);

totalPrice = 0;
cart.forEach(item => {
    totalPrice += item.price * item.quantity;
}
)
console.log(`total price = ${totalPrice}`);

totalPrice = cart.reduce((sum, goods) => sum + goods.price * goods.quantity, 0);
console.log(`total price = ${totalPrice}`);

const itemTotals =  cart.map(
item=> ({item:item.item,total:item.price * item.quantity}));
console.log(`total price = ${itemTotals}`);

console.log(a());

const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(
item => item.toUpperCase()
);
console.log(`upper case names = ${uppercasedNames}`);

const capitalStartnames = names.map(
item =>item[0].toUpperCase() + item.slice(1)
);
console.log(`capital start names = ${capitalStartnames}`);
