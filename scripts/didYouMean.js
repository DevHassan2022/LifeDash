export async function fetchCorrectedText() {
    let q = document.getElementById("user-input").value
     
    let myHeaders = new Headers()
    myHeaders.append("apikey", "kHYIoxRcLbqVV41fOOMC38PaGqj2XvjM")

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }

     // Show loading animation
     document.getElementById('loading').style.display = 'block';
     document.getElementById('corrected-text').textContent = ''; // Clear previous text


    try {
        const response = await fetch(`https://api.apilayer.com/dymt/did_you_mean_this?q=${q}`, requestOptions)
        const data = await response.json()
    
        document.getElementById('corrected-text').textContent =  data.result || 'No suggestion found'
    } catch (error) {
        console.error('Error fetching corrected text:', error);
        document.getElementById('corrected-text').textContent = 'Error fetching suggestion';
    } finally {
        // Hide loading animation
        document.getElementById('loading').style.display = 'none';
    }
}