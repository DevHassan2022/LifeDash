// // newsSearch.js

// // Function to handle the API request and search news
// export async function searchNews() {
//     const searchTerm = document.getElementById('news-search-term').value;
    
//     const myHeaders = new Headers();
//     myHeaders.append("apikey", "kHYIoxRcLbqVV41fOOMC38PaGqj2XvjM");

//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers: myHeaders,
//     };

//     try {
//         const response = await fetch(`https://api.apilayer.com/world_news/search-news?text=${encodeURIComponent(searchTerm)}&number=3`, requestOptions);
//         if (!response.ok) {
//             throw new Error("Failed to fetch news");
//         }

//         const result = await response.json();
//         displayNews(result.news);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Helper function to display the news
// export function displayNews(newsArray) {
//     const newsDiv = document.getElementById('news');
//     newsDiv.innerHTML = ""; // Clear previous results

//     if (newsArray.length === 0) {
//         newsDiv.innerHTML = "<p>No news found for this search term.</p>";
//         return;
//     }

//     let newsHTML = '';
//     newsArray.forEach(news => {
//         newsHTML += `
//             <h3>${news.title}</h3>
//             <a target="_blank" href="${news.url}">Read full article</a>
//         `;
//     });
//     newsDiv.innerHTML = newsHTML;
// 

export async function searchNews() {
    const newsDiv = document.getElementById("news")
    const searchTerm = document.getElementById("news-search-term").value
    const loadingSkeleton = document.getElementById("loading-skeleton")
    
    // Clear previous results
    newsDiv.innerHTML = ""
    newsDiv.style.display = "none"
    // Show the loading skeleton before fetching the news
    loadingSkeleton.style.display = "block"
 
    
    
    const myHeaders = new Headers() 
    myHeaders.append("apikey", "kHYIoxRcLbqVV41fOOMC38PaGqj2XvjM")
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
    }
    
    try {
        const response = await fetch(`https://api.apilayer.com/world_news/search-news?text=${searchTerm}`, requestOptions)
        
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        
        const data = await response.json()
        // console.log(data)
    
        if (data.news && data.news.length > 0) {
            newsDiv.style.display = "block"
            newsDiv.style.overflowY = "scroll"
          
            data.news.forEach(newsItem => {
                const newsElement = document.createElement("div")
                newsElement.classList.add("news-item")
                newsElement.innerHTML = `
                    <h2 class="news-title">${newsItem.title}</h2>
                    <a class="news-link" href="${newsItem.url}" target="_blank"><span>👉🏻</span> Read More</a>
                `
                newsDiv.appendChild(newsElement)
                console.log(newsItem)
                })
        }

    } catch (err) {
        console.log(err)       
    } finally {
        loadingSkeleton.style.display = "none"
    }
}