const numbers = [1,32,45,2,10,13]

const rta = numbers.every(item => item <= 40)
console.log(rta)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta2 = team.every(item => item.age <= 15)
  console.log(rta2)