const elements = ['fire','air', 'water'];

const rta = elements.join('--')
console.log(rta)

const title = 'Practice with split';
const titleFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(titleFinal);