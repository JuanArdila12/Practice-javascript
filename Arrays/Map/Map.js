const letters = ['a', 'b', 'c', 'd', 'e']

console.log(letters.map(item => item + '++' ))


const products = [
    { title: 'Hamburguer', price: 21},
    { title: 'Pizza', price: 60},
];
const app = document.getElementById('app');
const list = products.map(product => {
    return  `<li>${product.title} - ${product.price} usd</li>`;
});

app.innerHTML = list.join('');