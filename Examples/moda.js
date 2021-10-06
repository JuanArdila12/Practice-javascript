const list1 = [
    1,
    2,
    3,
    2,
    1,
    2,
    3,
    3,
    1,
    3,
    3,
    3,
    3,
];


const list1Count = {};

list1.map(
    function (element) {
        if (list1Count[element]){
            list1Count[element] += 1;
        } else {
            list1Count[element] = 1;
        }
    }
);

const list1Arr = Object.entries(list1Count).sort(
    function (acomulateValor, newElement) {
        newElement -acomulateValor
    }
);

const moda = list1Arr[list1Arr.length - 1];