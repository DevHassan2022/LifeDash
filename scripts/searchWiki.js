export async function fetchWikipediaSummary() {
    const query = document.getElementById('search-input').value
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
     

        try {
            const response = await fetch(url)
            const data = await response.json()
            // document.getElementById('summary').style.height = 'fit-content'
            document.getElementById('summary').innerHTML = `
                <h2>${data.title}</h2>
                <img src="${data.thumbnail?.source}" alt="${data.title}" class="wiki-image">
                <p>${data.extract}</p>
                <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
                `
        } catch(error) {
            console.log(error)
        }


    }