const letters = ['a','b','c'];

letters.forEach(item => console.log(item))


const products = [
    { title: 'Hamburguer', price: 21},
    { title: 'Pizza', price: 60},
];
const app = document.getElementById('app');
products.forEach(product => {
    app.innerHTML += `<li>${product.title} - ${product.price} usd</li>`;
})


const tasks = [
    {title: 'Buy fish', done: false},
    {title: 'Buy car', done: true},
    {title: 'Pay credit card', done: false}
]


tasks.forEach(task => {
    app.innerHTML += `<li>
        <input 
        type='checkbox'
        id='${task.title}'
        ${task.done && 'checked'}
        />
        <label for='${task.title}'>${task.title}

    
    
    </li>`
})

