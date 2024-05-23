function calculateExpression(a, b) {

    var result = (a * a) + (2 * a * b) + (b * b);
    
    return result;
}

var a = 3;
var b = 4;
var answer = calculateExpression(a, b);
console.log("The answer is:", answer);