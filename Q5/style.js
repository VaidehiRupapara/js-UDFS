function calculateExpression(a, b, c) {
    
    var numerator = (b * b * 4 * a * c);
    
    var denominator = (2 * a);

    var result = numerator / denominator;

    return result;
}

var a = 2;
var b = 3;
var c = 1;
var answer = calculateExpression(a, b, c);
console.log("The answer is:", answer);
