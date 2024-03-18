// Fetch currencies from API and populate dropdowns
async function fetchCurrencies() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const currencies = Object.keys(data.rates);

    const fromCurrencyDropdown = document.getElementById('fromCurrency');
    const toCurrencyDropdown = document.getElementById('toCurrency');

    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.text = currency;
        option1.value = currency;

        const option2 = document.createElement('option');
        option2.text = currency;
        option2.value = currency;

        fromCurrencyDropdown.add(option1);
        toCurrencyDropdown.add(option2);
    });
}

// Convert currency
async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];

    const result = amount * exchangeRate;

    document.getElementById('result').value = result.toFixed(2);
}

// Fetch currencies on page load
window.onload = fetchCurrencies;
