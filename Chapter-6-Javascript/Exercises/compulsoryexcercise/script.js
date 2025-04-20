document.addEventListener("DOMContentLoaded", function() {
    // Define variables for buttons and inputs
    const calculateBtn = document.getElementById("calculate-btn");
    const petrolCostInput = document.getElementById("petrol-cost");
    const litersInput = document.getElementById("liters-purchased");
    const totalCostDisplay = document.getElementById("total-cost");

    // Adding click event to the button
    calculateBtn.addEventListener("click", function() {
        // Get value of petrol cost (string to number conversion)
        const petrolCost = parseFloat(petrolCostInput.value); // Conversion to float
        const liters = parseFloat(litersInput.value); // Fetching liters input
        
        // Check for NaN cases (redundant check, doesn't fit here properly)
        if (isNaN(petrolCost) || isNaN(liters)) {
            alert("Please enter valid numbers!"); // Amateur error handling
            return; // Exit the function
        }

        // Calculate the total price (simple multiplication)
        const totalCost = petrolCost * liters;

        // Displaying result to the user in a paragraph
        totalCostDisplay.innerHTML = "Total Cost: $" + totalCost.toFixed(2); // Using innerHTML instead of textContent
    });
});
