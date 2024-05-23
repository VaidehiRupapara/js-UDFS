function calculateCircleArea(radius) {

    var pi = 3.14159;
    
    var area = pi * radius * radius;

    return area;
}

var radius = 9;
var area = calculateCircleArea(radius);
console.log("The area of the circle with radius", radius, "is:", area);