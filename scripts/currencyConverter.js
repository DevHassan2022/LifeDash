export async function convertCurrency() {
    document.getElementById("convert").addEventListener("click", async (e) => {
        
        e.preventDefault()
        
        const fromCurrency = document.getElementById("from-currency").value
        const toCurrency = document.getElementById("to-currency").value
        const amount = document.getElementById("amount").value
        const resultElement = document.getElementById("result")
        
        if(!fromCurrency || !toCurrency || !amount) {
            resultElement.innerHTML = `<p>Please fill in all fields!</p>`
            return
        }
        
        try {
            const response = await fetch(`
            https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
            )
            const data = await response.json()
            const rate = data.rates[toCurrency]
            
            if(rate) {
                const convertedAmount = (amount * rate).toFixed(2)
                resultElement.innerHTML = `
                    <p>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</p>
                `
            } else {
                resultElement.innerHTML = `<p>Conversion rates are not available.</p>`
            }
        } catch (error) {
            console.error("Error fetching conversion rate:", error)
            resultElement.innerHTML = `<p>Error fetching conversion rate.</p>`
        }
    })
}

     