let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.59;
let USD = 4.16;
let GBP = 5.20;
let CHF = 4.70;
let CZK = 0.20;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;


    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;

        case "CHF":
            result = amount / CHF;
            break;

        case "CZK":
            result = amount / CZK;
            break;

    }


    resultElement.innerText = `${result.toFixed(2)} ${currency}`;

});



