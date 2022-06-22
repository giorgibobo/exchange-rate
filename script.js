const currency1 = document.getElementById("currency-one");
const currency2 = document.getElementById("currency-two");
const resultDOM = document.getElementById("rate");
const swap = document.getElementById("swap");
const input = document.getElementById("number");


const calculate = async() => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/186a60e2bb2b1db87c9e3c75/latest/${currency1.value}`);
    const data = await response.json();
    resultDOM.textContent = `1 ${currency1.value} = ${data.conversion_rates[currency2.value]} ${currency2.value}`
}

calculate();

currency1.addEventListener("change", calculate)
currency2.addEventListener("change", calculate);

//[currency1, currency2].forEach(el => el.addEventListener("change", calculate));

swap.addEventListener("click", () =>{
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();
})