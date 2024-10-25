// Function to fetch Crypto currency data
export async function fetchCryptoData() {
    try {
       const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
       if (!res.ok) {
         throw Error("Something went wrong")
       } 
       const data = await res.json()
       document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} alt="a crypto coin" />
        <span>${data.name}</span>
       `
       document.getElementById("crypto").innerHTML += `
       <p>🎯: $${data.market_data.current_price.usd}</p>
       <p>👆: $${data.market_data.high_24h.usd}</p>
       <p>👇: $${data.market_data.low_24h.usd}</p>
       `
    } catch (err) {
        console.error(err)
    }
}