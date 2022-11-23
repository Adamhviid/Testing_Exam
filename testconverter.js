document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.205;
})
document.getElementById("feetInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("cmsOutput").innerHTML = kgs * 2.205;
})