document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.205;
})
document.getElementById("feetInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("cmsOutput").innerHTML = kgs * 2.205;
})
document.getElementById("degreesInput").addEventListener("input", e => {
    let fht = e.target.value;
    document.getElementById("fhtOutput").innerHTML = (fht - 32) * 0.5556;
})
document.getElementById("fahrenheitInput").addEventListener("input", e => {
    let dgs = e.target.value;
    document.getElementById("dgsOutput").innerHTML = (dgs * 1.8) + 32;
})





function fahrToCel(myNumberInDegrees){
    document.getElementById("fahrenheitInput").addEventListener("input", e => {
        myNumberInDegrees = e.target.value;
        document.getElementById("dgsOutput").innerHTML = (myNumberInDegrees * 1.8) + 32;
    })
}