const display = document.querySelector('#display')
const priceInput = document.querySelector('#price')
const weightInput = document.querySelector('#weight')
const totalPrice = document.querySelector('#total')
const selector = document.querySelector('#weight-type')


function calculateWeight() {
    const priceValue = priceInput.value
    const weightValue = weightInput.value


    if (selector.value === "kg") {
        totalPrice.innerHTML = (priceValue / weightValue / 10).toFixed(2)
    }
    if (selector.value === "grams") {
        totalPrice.innerHTML = (priceValue / weightValue * 100).toFixed(2)
    }
    if (selector.value === "ounces") {
        totalPrice.innerHTML = (priceValue / weightValue * 3.527).toFixed(2)
    }
    if (selector.value === "pounds") {
        totalPrice.innerHTML = (priceValue / weightValue * 0.2205).toFixed(2)
    }
}

document.querySelector('#calc-button').addEventListener('click', calculateWeight)
