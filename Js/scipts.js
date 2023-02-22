const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const dolar = 5.2 
const euro = 5.7
const bitcoins = 128582.23

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value 
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText =document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL",
    }).format(inputReais);

    if (select.value ==="US$ Dólar Americano"){ 
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD",
        }).format(inputReais / dolar);
    }

    if (select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR",
        }).format(inputReais / euro );
    }

    if (select.value === "₿ bitcoins"){
        currencyValueText.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency:"BTC",
        }).format(inputReais / bitcoins );
    }
    
}
ChangeCurrency = () => {
    
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if ( select.value === "US$ Dólar Americano"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "../Assets/estados-unidos (1) 1.png"
    }

    if ( select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../Assets/euro.png"
    }

    if ( select.value === "₿ bitcoins"){
        currencyName.innerHTML = "bitcoins"
        currencyImg.src = "../Assets/bitcoins.png"
    }

    convertValues()
}   


button.addEventListener('click', convertValues)
select.addEventListener('change', ChangeCurrency)