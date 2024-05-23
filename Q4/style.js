function calculateRectangleArea(length, height) {
    // Calculate area
    var area = length * height;
    // Return the calculated area
    return area;
}

// Example usage:
var length = 8;
var height = 5;
var area = calculateRectangleArea(length, height);
console.log("The area of the rectangle with length", length, "and height", height, "is:", area.toFixed(2));
 