const salaryCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const salaryColSorted = salaryCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function isEven(number) {
    return (number % 2 === 0);
}

function calculateArithmeticMean(list){
    const sumList = list.reduce(
        function (valueAcomulate = 0, newEelement) {
            return valueAcomulate + newEelement;
        }
    );
    
    const averageList = sumList / list.length;

    return averageList;
}


function medianSalary(list){
    const mid = parseInt(list.length / 2);

    if(isEven(list.length)){
        const personMid1 = list[mid - 1];
        const personMid2 = list[mid];
        const median = calculateArithmeticMean(personMid1, personMid2);
        return median;
    }else{
        const personMid = list[mid];
        return personMid;
    }
}

console.log(
    medianSalary(salaryColSorted)
)