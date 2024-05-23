function celsiusToFahrenheit(celsius) {

    var fahrenheit = (celsius * 1.8) + 32;
    
    return fahrenheit;
}


var celsius = 20;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F");
