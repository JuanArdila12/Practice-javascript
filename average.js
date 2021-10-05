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


// let x = [1,2,3,4,5,]
// let y = [1,2,3,4,5,]



// for (let contador = 0; contador < x.length; contador++) {
//     const elementx = x[contador];
//         for (let contador2 = 0; contador2 < y.length; contador2++) {
//             const elementy = y[contador2];
//             console.log(elementx, ",", elementy)
//         }
    
// }








