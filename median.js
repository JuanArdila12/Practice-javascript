function calculateArithmeticMean(list){
    // let sumList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumList = sumList + list[i];
    // }

    const sumList = list.reduce(
        function (valueAcomulate = 0, newEelement) {
            return valueAcomulate + newEelement;
        }
    );
    
    const averageList = sumList / list.length;

    return averageList;
}

const list1 = [
    100,
    500,
    200,
    3200000,
];

const midList1 = parseInt(list1.length / 2);

function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let median;

if(isEven(list1.length)){
    const element1 = list1[midList1 - 1];
    const element2 = list1[midList1];

    const averageElement1and2 = calculateArithmeticMean([element1, element2]);

    median = averageElement1and2

}else{
    median = list1[midList1];
}

list1.sort(function(a,b){
    return a - b
});
console.log(list1)