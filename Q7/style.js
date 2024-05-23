function fahrenheitToCelsius(fahrenheit) {
    
    var celsius = (fahrenheit - 32) / 1.8;

    return celsius;
}

var fahrenheit = 68; 
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + "°F is equal to " + celsius + "°C");