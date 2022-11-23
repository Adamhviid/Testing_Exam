function kgsToLbs(myNumberInKgs) {
    const myNumberInLbs = Math.round(myNumberInKgs * 2.205)
    document.getElementById("lbsOutput").innerHTML = myNumberInLbs
    return myNumberInLbs
}

function lbsToKgs(myNumberInLbs) {
    const myNumberInKgs = Math.round(myNumberInLbs / 2.205)
    document.getElementById("kgsOutput").innerHTML = myNumberInKgs
    return myNumberInKgs
}

function feetToCms(myNumberInFeet) {
    const myNumberInCms = Math.round(myNumberInFeet * 30.48)
    document.getElementById("cmsOutput").innerHTML = myNumberInCms
    return myNumberInCms
}

function cmsToFeet(myNumberInCms) {
    const myNumberInFeet = Math.round(myNumberInCms / 30.48)
    document.getElementById("feetOutput").innerHTML = myNumberInFeet
    return myNumberInFeet
}

function fahrenheitToCelsius(myNumberInFahrenheit) {
    const myNumberInCelcius = Math.round((myNumberInFahrenheit - 32) * 0.5556)
    document.getElementById("celsOutput").innerHTML = myNumberInCelcius
    return myNumberInCelcius
}

function celsiusToFahrenheit(myNumberInCelcius) {
    const myNumberInFahrenheit = Math.round((myNumberInCelcius * 1.8) + 32)
    document.getElementById("fhtOutput").innerHTML = myNumberInFahrenheit
    return myNumberInFahrenheit
}



