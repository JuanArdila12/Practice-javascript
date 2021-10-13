const numbers = [1,32,45,2,10,13]

const rta = numbers.find(item => item === 32)
console.log(rta)


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta3 = products.find(item => item.id === '🍔')
console.log(rta3)

const rta4 = products.findIndex(item => item.id === '🍔')
console.log(rta4)

