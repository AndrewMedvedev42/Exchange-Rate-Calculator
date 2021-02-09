const selectCurrencyOne = document.getElementById("currency-one")
const inputFieldOne = document.getElementById("amount-one")
const selectCurrencyTwo = document.getElementById("currency-two")
const inputFieldTwo = document.getElementById("amount-two")

const swapBtn = document.getElementById("swap")
const rateElement = document.getElementById("rate")


function caltulate(){
    const currencyOne = selectCurrencyOne.value
    const currencyTwo = selectCurrencyTwo.value

    console.log(currencyOne, currencyTwo)

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
                console.log(data)
                const rate = data.rates[currencyTwo];
                
                rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

                console.log(rateElement.innerHTML)

                inputFieldTwo.value = (inputFieldOne.value * rate).toFixed(2);
            });
}

swapBtn.addEventListener("click", () => {
    const temp = selectCurrencyOne.value
    selectCurrencyOne.value = selectCurrencyTwo.value
    selectCurrencyTwo.value = temp
    caltulate()
})

selectCurrencyOne.addEventListener("change", caltulate)
inputFieldOne.addEventListener("input", caltulate)
selectCurrencyTwo.addEventListener("change", caltulate)
inputFieldTwo.addEventListener("input", caltulate)

caltulate()