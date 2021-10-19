const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date(2021, 1, 1, 15),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date(2021, 1, 1, 21),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date(2021, 1, 1, 30),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 28),
    },
  ];

  orders.sort((a,b)=> b.total- a.total)
  console.log(orders);

  const dateSort = orders.sort((a,b)=>{
      return a.date.getTime() - b.date.getTime();
  })

  console.log(dateSort);

  const array = ['a','bb','ccv']
  const rta = array.map(item => item.length);
  console.log(rta);
