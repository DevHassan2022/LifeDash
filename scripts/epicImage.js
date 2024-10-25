export async function getEpicImage() {
    // alert('it works')
    const date = document.getElementById('image-date').value
    const apiKey  = '4Z6QwdNDJc7DDXeaMB26cW1tFqLmPx3qtwgYIMh6'
    // console.log(date)
    const [year, month, day] = date.split('-');

    const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`)
    const data = await response.json()
    console.log(data)
    if(data.length > 0) {
        const { image } = data[0]
        document.getElementById('epic-image').style.height = 'fit-content'
         // Construct the image URL
         const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image}.jpg`;
        // console.log(imageUrl)
        // Display the image on the page
        document.getElementById('epic-image').innerHTML =`<img src=${imageUrl}>
        <span>👉</span><a href=${imageUrl} target="_blank">View the Epic Image</a>
        `
        
    }
}