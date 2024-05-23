function swapValuesWithoutTemp(a, b) {
    [a, b] = [b, a];

    console.log("After swapping:");
    console.log("a =", a);
    console.log("b =", b);
}

var x = 5;
var y = 10;
console.log("Before swapping:");
console.log("x =", x);
console.log("y =", y);
swapValuesWithoutTemp(x, y);