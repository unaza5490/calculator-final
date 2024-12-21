function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const annualRate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (
        isNaN(principal) || isNaN(monthlyInvestment) || isNaN(annualRate) || isNaN(years) ||
        principal < 0 || monthlyInvestment < 0 || annualRate < 0 || years <= 0
    ) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    const monthlyRate = annualRate / 12;
    const months = years * 12;
    let futureValue = principal;

    for (let i = 0; i < months; i++) {
        futureValue += monthlyInvestment; // Add monthly investment
        futureValue *= 1 + monthlyRate;  // Apply monthly interest
    }

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
