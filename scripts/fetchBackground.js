// Body Background Image
// export async function setBackgroundImage() {
//     try {
//         const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
//         const data = await res.json()
        
//         document.body.style.backgroundImage = `url(${data.urls.regular})`
//         document.getElementById("author").textContent = `By: ${data.user.name}`
        
//     } catch(err) {
//         document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
        
//         document.getElementById("author").textContent = `By: Dodi Achmad`
//     }
// }

try {
    const cachedImage = localStorage.getItem("backgroundImage")
    const cachedTimeStamp = localStorage.getItem("imageTimeStamp")
    const now = Date.now()
    
    // Check if we have a cached image and it's still valid (within 24 hours)
    if(cachedImage && cachedTimeStamp && now - cachedTimeStamp < 24 * 60 * 60 * 1000) {
        // If cached Image iss valid, use it
        const cachedData = JSON.parse(cachedImage)
        document.body.style.backgroundImage = `url(${cachedData.url})`
        document.getElementById("author").textContent = `By: ${cachedData.author}`
    }  else {
        // Fetch new image if no cached image or if it's older than 24 hours
        const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
        const data = await res.json()
        const imageUrl = data.urls.regular
        const authorName = data.user.name
        document.body.style.backgroundImage = `url(${imageUrl})`
        document.getElementById("author").textContent = `By: ${authorName}`
          
        // Cache the image URL and timestamp
        localStorage.setItem('backgroundImage', JSON.stringify({url: imageUrl, author: authorName}))
        localStorage.setItem("imageTimeStamp", now.toString())
    }
    
} catch (err) {
        // Fallback image if the fetch fails
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
        
        document.getElementById("author").textContent = `By: Dodi Achmad`

}