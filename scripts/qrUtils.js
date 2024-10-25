export function getQrCode(e) {
    e.preventDefault()
    
    const data = document.getElementById("data").value
    const size = document.getElementById("size").value
    const color = document.getElementById("color").value
    const bgColor = document.getElementById("bgcolor").value
    
    
    // Construct the QR code API URL
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(data)}&color=${color}&bgcolor=${bgColor}`
    
       // Set the QR code image source
    const qrResult = document.getElementById('qr-result');
    qrResult.innerHTML = `
        <img src=${qrApiUrl} alt="qr-code" class="qr-img">
        <a id="downloadLink" download="qr.png" href=${qrApiUrl} target="_blank" class="qr-link">Download QR Code<a>
    `
    
}   

export async function decodeQrCode() {
    const fileInput = document.getElementById("qr-input")
    const qrResult = document.getElementById("qr-decode-result")
    
    if(fileInput.files.length === 0) {
     qrResult.innerHTML = `<p>Please upload a QR code image.</p>`
     return
    }
 
    const file = fileInput.files[0]
    const formData = new FormData()
    formData.append("file", file)
 
    const options = {
     method: "POST",
     body: formData
    }
 
    try {
     const response = await fetch('https://api.qrserver.com/v1/read-qr-code/', options)
     const result = await response.json()
     const qrData = result[0].symbol[0].data
 
     if(qrData) {
         qrResult.innerHTML = `<p>Decoded QR Code: <strong>${qrData}</strong></p>`
     } else {
         qrResult.innerHTML = `<p>Unable to decode the QR code. Please try again.</p>`
     }
    } catch (err) {
         qrResult.innerHTML = `<p>An error occured while reading the QR code.</p>`
    }
 
 }