const PI = 3.14;
let area = 0;

function circleArea(radius) {
    debugger;
    area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("Area1:", area);
area = circleArea(7);
console.log("Area2:", area);