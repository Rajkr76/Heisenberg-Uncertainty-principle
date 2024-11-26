
const h = 6.62607015e-34;  
//for delta p
function calculatedeltapUncertainty() {
    const deltaX = parseFloat(document.getElementById("deltaX").value);
    
    if (deltaX > 0) {
    const deltaP = h /( (4 * Math.PI) * deltaX);
   
    document.getElementById("result").textContent = `Minimum uncertainty in momentum (Δp): ${deltaP.toExponential(3)} kg·m/s`;
    document.getElementById("result").textContent = `Minimum uncertainty in momentum (Δp): ${""}`;
    document.getElementById('output').value = (deltaP.toExponential(3)+" kg·m/s");
    output.style.display = "flex";
} else {
    document.getElementById("result").textContent = "Please enter a valid ΔX.";
    output.style.display = "none";
}
    
}
//for delta x

function calculatedeltaxUncertainty(){
    const deltaP = parseFloat(document.getElementById("deltaP").value);
    if (deltaP > 0) {

    const deltaX = h /( (4 * Math.PI )* deltaP);
    
    document.getElementById("result").textContent = `Minimum uncertainty in momentum (Δx): ${deltaX.toExponential(3)} meters`;
    document.getElementById("result").textContent = `Minimum uncertainty in momentum (ΔX): ${""}`;
    document.getElementById('output').value = (deltaX.toExponential(3)+" meters");
    output.style.display = "flex";
} 

else {
    document.getElementById("result").textContent = "Please enter a valid ΔP.";
    output.style.display = "none";
}
    
}
