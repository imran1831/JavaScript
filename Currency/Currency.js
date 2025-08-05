function convert() {
    let rupees = document.getElementById("rupees");
    if (rupees.value === ""){
        alert("Enter a valid Rupee value");
    }
    
    dollar = (parseFloat(rupees.value)*0.12);
    document.getElementById("dollar").textContent = dollar + "  USD";
}
