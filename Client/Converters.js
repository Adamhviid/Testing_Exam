function kgsToLbs(kilograms) {
    if (kilograms < 0) {
        document.getElementById("lbsOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const pounds = Math.round(kilograms * 2.205)
    document.getElementById("lbsOutput").innerHTML = pounds
    return pounds
}

function lbsToKgs(pounds) {
    if (pounds < 0) {
        document.getElementById("kgsOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const kilograms = Math.round(pounds / 2.205)
    document.getElementById("kgsOutput").innerHTML = kilograms
    return kilograms
}

function feetToCms(feet) {
    if (feet < 0) {
        document.getElementById("cmsOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const centimeter = Math.round(feet * 30.48)
    document.getElementById("cmsOutput").innerHTML = centimeter
    return centimeter
}

function cmsToFeet(centimeter) {
    if (centimeter < 0) {
        document.getElementById("feetOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const feet = Math.round(centimeter / 30.48)
    document.getElementById("feetOutput").innerHTML = feet
    return feet
}

function fahrenheitToCelsius(fahrenheit) {
    //absolute zero in fahrenheit
    if (fahrenheit < -459.67) {
        document.getElementById("celsOutput").innerHTML = "value must be greater than -459.67"
        return "invalid";
    }
    const celsius  = Math.round((fahrenheit - 32) * 0.5556)
    document.getElementById("celsOutput").innerHTML = celsius 
    return celsius 
}

function celsiusToFahrenheit(celsius ) {
    //absolute zero in celsius
    if (celsius  < -273.15) {
        document.getElementById("fhtOutput").innerHTML = "value must be greater than -273.15"
        return "invalid";
    }
    const fahrenheit = Math.round((celsius  * 1.8) + 32)
    document.getElementById("fhtOutput").innerHTML = fahrenheit
    return fahrenheit
}

function milliliterToOunce(millimeter) {
    if (millimeter < 0) {
        document.getElementById("ozOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const ounces = Math.round(millimeter / 29.57)
    document.getElementById("ozOutput").innerHTML = ounces
    return ounces
}

function ounceToMilliliter(ounces) {
    if (ounces < 0) {
        document.getElementById("mlOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const millimeter = Math.round(ounces * 29.57)
    document.getElementById("mlOutput").innerHTML = millimeter
    return millimeter
}

export default { kgsToLbs, lbsToKgs, feetToCms, cmsToFeet, fahrenheitToCelsius, celsiusToFahrenheit, milliliterToOunce, ounceToMilliliter }