// const priceOriginal = 100;
// const discount = 15;


function calculatePriceWithDiscount(priceOriginal, discount) {
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (priceOriginal * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value; 

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue)

    const resultPrice = document.getElementById("ResultPrice")
    resultPrice.innerText = "The price with discount is: $" + priceWithDiscount
}

// console.log({
//     priceOriginal,
//     discount,
//     percentagePriceWithDiscount,
//     precioWithDiscount,
// })