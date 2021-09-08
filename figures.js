// Code of square
console.group("Squares")

function perimeterSquare(side){
    return side * 4
} 



function areaSquare(side){
    return side * side 
} 


console.groupEnd()

// Code of triangle
console.group("Triangles")


function perimeterTriangle(side1,side2, baseTriangle){
    return side1 + side2 + baseTriangle
} 



function areaTriangle(baseTriangle,heightTriangle){
    return (baseTriangle * heightTriangle) / 2
} 



console.groupEnd()

// Code of circles
console.group("Circles")


function diameterCircle(radioCircle){
    return radioCircle * 2 
}

const PI = Math.PI


function perimeterCircle(radioCircle){
    const diameter = diameterCircle(radioCircle)
    return diameter * PI
}


function areaCircle(radioCircle){
    return (radioCircle * radioCircle) * PI
} 


console.groupEnd()


// Functions and interactions with HTML

function calculatePerimeterSquare(){
    const input = document.getElementById("InputSquare")
    const value = input.value
    const resPerimeter = document.getElementById("pResult")
    const perimeter = perimeterSquare(value)
    resPerimeter.innerHTML = "Resultado perimetro: " + perimeter + " cm"

    
}

function calculateAreaSquare(){
    const input = document.getElementById("InputSquare")
    const value = input.value
    const resArea = document.getElementById("aResult")
    const area = areaSquare(value)
    resArea.innerHTML = "Resultado area: " + area + " cm"
    // alert(area)
}
