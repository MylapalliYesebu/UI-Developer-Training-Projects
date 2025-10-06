// tip-calculator/script.js

// 1. Get elements
const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const errorMessage = document.getElementById('error-message');

// 2. Calculate Tip
calculateBtn.addEventListener('click', () => {
    const billAmountValue = parseFloat(billAmount.value);
    const tipPercentageValue = parseFloat(tipPercentage.value);

    // 3. Input validation
    if (isNaN(billAmountValue) || billAmountValue <= 0 ||
        isNaN(tipPercentageValue) || tipPercentageValue < 0) {
        errorMessage.textContent = "Please enter valid numbers!";
        tipAmountDisplay.textContent = '';
        totalAmountDisplay.textContent = '';
        tipAmountDisplay.style.opacity = 0;
        totalAmountDisplay.style.opacity = 0;
        return;
    } else {
        errorMessage.textContent = '';
    }

    // 4. Calculate tip and total
    const tipAmount = billAmountValue * (tipPercentageValue / 100);
    const totalAmount = billAmountValue + tipAmount;

    // 5. Display results with animation
    tipAmountDisplay.textContent = `Tip Amount: ₹${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    
    tipAmountDisplay.style.opacity = 0;
    totalAmountDisplay.style.opacity = 0;
    
    setTimeout(() => {
        tipAmountDisplay.style.opacity = 1;
        totalAmountDisplay.style.opacity = 1;
    }, 50);
});

// 6. Reset Button
resetBtn.addEventListener('click', () => {
    billAmount.value = '';
    tipPercentage.value = '';
    tipAmountDisplay.textContent = '';
    totalAmountDisplay.textContent = '';
    errorMessage.textContent = '';
    tipAmountDisplay.style.opacity = 0;
    totalAmountDisplay.style.opacity = 0;
});
