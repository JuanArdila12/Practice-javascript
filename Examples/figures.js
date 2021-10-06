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
    resPerimeter.innerHTML = "Perimeter result: " + perimeter + " cm"

    
}

function calculateAreaSquare(){
    const input = document.getElementById("InputSquare")
    const value = input.value
    const resArea = document.getElementById("aResult")
    const area = areaSquare(value)
    resArea.innerHTML = "Area result: " + area + " cm"
    // alert(area)
}

function calculatePerimeterTriangle(){
    const input1 = document.getElementById("InputTriangle1")
    const value1 = Number(input1.value)
    const input2 = document.getElementById("InputTriangle2")
    const value2 = Number(input2.value)
    const input3 = document.getElementById("InputTriangle3")
    const value3 = Number(input3.value)
    const perimeter = perimeterTriangle(value1, value2, value3)
    
    const resPerimeter = document.getElementById("TpResult")
    resPerimeter.innerHTML = "Perimeter result: " + perimeter + " cm"
}

function calculateAreaTriangle(){
    const input3 = document.getElementById("InputTriangle3")
    const value3 = Number(input3.value)
    const input4 = document.getElementById("InputTriangle3")
    const value4 = Number(input4.value)
    const area = areaTriangle(value3, value4)
    
    const resPerimeter = document.getElementById("TaResult")
    resPerimeter.innerHTML = "Perimeter result: " + area + " cm"
}

function calculatePerimeterCircle(){
    const input1 = document.getElementById("InputRadio")
    const value1 = Number(input1.value)
    const perimeter = diameterCircle(value1)
    
    const resPerimeter = document.getElementById("ToResult")
    resPerimeter.innerHTML = "Perimeter result: " + perimeter + " cm"
}

function calculateAreaCircle(){
    const input1 = document.getElementById("InputRadio")
    const value1 = Number(input1.value)
    const area = areaCircle(value1)
    
    const resPerimeter = document.getElementById("TooResult")
    resPerimeter.innerHTML = "Perimeter result: " + area + " cm"
}
