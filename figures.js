// Code of square
console.group("Squares")
const sideSquare = 5;
console.log("the sides of the square measure: " + sideSquare + " CMS")

const perimeterSquare = sideSquare * 4

console.log("The perimeter of the square is: " + perimeterSquare + " CMS")

const areaSquare = sideSquare * sideSquare

console.log("The area of the square is: " + areaSquare + " CMS^2")
console.groupEnd()

// Code of triangle
console.group("Triangles")
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;


console.log(
    "the sides of the triangle measure: " 
    + sideTriangle1 
    + " CMS, " 
    + sideTriangle2 
    + " CMS , " 
    + baseTriangle 
    + " CMS"
)
const heightTriangle = 5.5;
console.log("the height of the triangle is: " + heightTriangle + " CMS");

const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle

console.log("the perimeter of the triangle is: " + perimeterTriangle + " CMS");

const areaTriangle = (baseTriangle * heightTriangle) / 2

console.log("the area of the triangle is: " + areaTriangle + " CMS^2")

console.groupEnd()

// Code of circles
console.group("Circles")

const radioCircle = 4;
console.log("the radio of circle is: " + radioCircle + " CMS")

const diameterCircle = radioCircle * 2 
console.log("the diameter of circle is: " + diameterCircle + " CMS")

const PI = Math.PI
console.log("PI is: " + PI)

const perimeterCircle = diameterCircle * PI

console.log("the perimeter of circle is: " + perimeterCircle + " CMS")

const areaCircle = (radioCircle * radioCircle) * PI
console.log("the area of circle is: " + areaCircle + " CMS")

console.groupEnd()
