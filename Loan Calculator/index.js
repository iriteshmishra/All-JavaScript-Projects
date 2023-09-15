function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value

    interestRateValue = document.getElementById("interest-rate").value

    MonthsToPayValue = document.getElementById("months-to-pay").value

    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue 

    monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);
    //to fixed(2) means only two digit will be shown e.g 917.50 not 917.5028374. 
    
    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}