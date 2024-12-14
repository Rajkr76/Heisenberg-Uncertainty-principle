
    const h = 6.626e-34; // Planck's constant in J·s

    // Function to calculate Momentum (ΔP)
    function calculateMomentum() {
      const mass = parseFloat(document.getElementById('mass').value);
      const velocity = parseFloat(document.getElementById('velocity').value);

      if (isNaN(mass) || isNaN(velocity)) {
        alert('Please select valid values for mass and velocity.');
        return;
      }

      const momentum = mass * velocity; // Calculate momentum
      document.getElementById('momentumResult').textContent = momentum.toExponential(2); // Display momentum in scientific notation
    }

    // Function to calculate ΔX based on ΔP
    function calculatedeltaxUncertainty() {
      const deltaX = parseFloat(document.getElementById('deltap').value); 
      const deltaP = parseFloat(document.getElementById('momentumResult').textContent);

      if (isNaN(deltaX) || isNaN(deltaP)) {
        alert('Please enter valid values for ΔP and calculate momentum first.');
        return;
      }

      // Heisenberg Uncertainty Principle formula
      const uncertainty = h / (4 * Math.PI * deltaP); 
      document.getElementById('result').textContent = `The uncertainty in position (ΔX) is ${uncertainty.toExponential(3)} meters.`;  
    }
  