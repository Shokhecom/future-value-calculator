function calculateFutureValue() {
    // Retrieve input values
    const presentValue = parseFloat(document.getElementById('presentValue').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const periods = parseFloat(document.getElementById('periods').value);
  
    // Calculate future value
    const futureValue = presentValue * Math.pow(1 + interestRate / 100, periods);
  
    // Display the result
    document.getElementById('futureValueResult').textContent = futureValue.toFixed(2);
  }
  
  function resetForm() {
    document.getElementById('presentValue').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('periods').value = '';
    document.getElementById('futureValueResult').textContent = '';
  }
  