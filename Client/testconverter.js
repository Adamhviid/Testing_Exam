function kgsToLbs(myNumberInKgs) {
    if (myNumberInKgs < 0) {
        document.getElementById("lbsOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const myNumberInLbs = Math.round(myNumberInKgs * 2.205)
    document.getElementById("lbsOutput").innerHTML = myNumberInLbs
    return myNumberInLbs
}

function lbsToKgs(myNumberInLbs) {
    if (myNumberInLbs < 0) {
        document.getElementById("kgsOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const myNumberInKgs = Math.round(myNumberInLbs / 2.205)
    document.getElementById("kgsOutput").innerHTML = myNumberInKgs
    return myNumberInKgs
}

function feetToCms(myNumberInFeet) {
    if (myNumberInFeet < 0) {
        document.getElementById("cmsOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const myNumberInCms = Math.round(myNumberInFeet * 30.48)
    document.getElementById("cmsOutput").innerHTML = myNumberInCms
    return myNumberInCms
}

function cmsToFeet(myNumberInCms) {
    if (myNumberInCms < 0) {
        document.getElementById("feetOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const myNumberInFeet = Math.round(myNumberInCms / 30.48)
    document.getElementById("feetOutput").innerHTML = myNumberInFeet
    return myNumberInFeet
}

function fahrenheitToCelsius(myNumberInFahrenheit) {
    //absolute zero in fahrenheit
    if (myNumberInFahrenheit < -459.67) {
        document.getElementById("celsOutput").innerHTML = "value must be greater than -459.67"
        return "invalid";
    }
    const myNumberInCelcius = Math.round((myNumberInFahrenheit - 32) * 0.5556)
    document.getElementById("celsOutput").innerHTML = myNumberInCelcius
    return myNumberInCelcius
}

function celsiusToFahrenheit(myNumberInCelcius) {
    //absolute zero in celsius
    if (myNumberInCelcius < -273.15) {
        document.getElementById("fhtOutput").innerHTML = "value must be greater than -273.15"
        return "invalid";
    }
    const myNumberInFahrenheit = Math.round((myNumberInCelcius * 1.8) + 32)
    document.getElementById("fhtOutput").innerHTML = myNumberInFahrenheit
    return myNumberInFahrenheit
}

function milliliterToOunce(myNumberInMillitmeter) {
    if (myNumberInMillitmeter < 0) {
        document.getElementById("ozOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const myNumberInOunce = Math.round(myNumberInMillitmeter / 29.57)
    document.getElementById("ozOutput").innerHTML = myNumberInOunce
    return myNumberInOunce
}

function ounceToMilliliter(myNumberInOunce) {
    if (myNumberInOunce < 0) {
        document.getElementById("mlOutput").innerHTML = "value must be greater than 0"
        return "invalid";
    }
    const myNumberInMillitmeter = Math.round(myNumberInOunce * 29.57)
    document.getElementById("mlOutput").innerHTML = myNumberInMillitmeter
    return myNumberInMillitmeter
}