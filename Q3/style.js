function calculateTriangleArea(base, height) {
    
    var area = (base * height) / 2;

    return area;
}

var base = 6;
var height = 4;
var area = calculateTriangleArea(base, height);
console.log("The area of the triangle with base", base, "and height", height, "is:", area);
