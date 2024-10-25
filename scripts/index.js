// import { setBackgroundImage } from './fetchBackground.js'
import './fetchBackground.js'
import { fetchCryptoData } from './fetchCrypto.js'
import { convertCurrency } from './currencyConverter.js'
import { fetchWeather } from './weather.js'
import { searchWord } from './dictionary.js'
import { searchNews } from './newsSearch.js'
import { fetchCorrectedText } from './didYouMean.js'
import { fetchNeoData } from './fetchNeoData.js'
import { getEpicImage } from './epicImage.js'
import { fetchWikipediaSummary } from './searchWiki.js'
import { getQrCode, decodeQrCode } from './qrUtils.js'
// setBackgroundImage()

fetchCryptoData()

convertCurrency()

fetchWeather()


// Event listener for Dictionary search
document.getElementById('search-word').addEventListener('click', searchWord);

// Set up the event listener in index.js
document.getElementById('search-news').addEventListener('click', searchNews);

//  Set up the event listener to get QR code
document.getElementById('qr-form').addEventListener('submit', getQrCode)
                                          
    

// Set up the event listener to Read QR code
document.getElementById('decode-btn').addEventListener("click", decodeQrCode)


// Set up event listener for Did you mean this submit button
document.getElementById("submit-btn").addEventListener("click", fetchCorrectedText)

// Set up the event listener for clear button
document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("corrected-text").textContent = `Your corrected text will appear here...`
    document.getElementById("user-input").value = ''
})

// Set up the event listener to clear qr code
document.getElementById('clear-qr-code').addEventListener("click", () => {
    document.getElementById('qr-result').innerHTML = `<p>Your QR code will appear here..</p>`
    document.getElementById('data').value = ''
})

// Set up the event listener for the neo btn
document.getElementById('fetch-neo-btn').addEventListener('click', fetchNeoData)

// Set up the event listener to clear neo data
document.getElementById('clear-neo-data').addEventListener('click', () => {
    document.getElementById('neo-list').innerHTML = ''
    document.getElementById('neo-list').innerHTML = `
    <p class="neo-placeholder">Please choose a date range of at least 7 days, then click "Fetch NEOs" to see the list of Near-Earth Objects (NEOs) from NASA's database.</p>
`
})

// Set up event listener for Epic button
document.getElementById('epic-btn').addEventListener('click', getEpicImage)

// Set up event listener for search wiki
document.getElementById('search-wiki-btn').addEventListener('click', fetchWikipediaSummary)


// Set up event listener for clearing the decode code
document.getElementById('clear-decode-btn').addEventListener('click', ()=> {
    document.getElementById('qr-decode-result').innerHTML = ''
})

// Set up event listener for clearing the epic image
document.getElementById('clear-epic-btn').addEventListener('click', ()=>{
    const epicImage = document.getElementById('epic-image')
    epicImage.textContent = ''
    epicImage.style.height = '100%'
})


// Set up event listener for clear result button for currency converter
document.getElementById('clear-result-btn').addEventListener('click', ()=> {
    document.getElementById('result').textContent = ''
})

// Set up event listener for clear word result button for dictionary
document.getElementById('clear-word-result').addEventListener('click', ()=> {
    const wordResult = document.getElementById('word-result')
    wordResult.textContent = ''
    wordResult.style.height = '50%'
})

// Set up event listener for clear wikipedia search result button
document.getElementById('clear-wiki-btn').addEventListener('click', ()=> {
    const summary = document.getElementById('summary')
    summary.textContent = ''
})

// Set up event listenr for clear news button
document.getElementById('clear-news-btn').addEventListener('click', ()=> {
    const news = document.getElementById('news')
    news.innerHTML = ''
    news.style.overflow = 'auto'
})