export async function searchWord() {
    const word = document.getElementById('word-input').value.trim();

    if (!word) {
        document.getElementById('word-result').innerText = 'Please enter a valid word.';
        return;
    }

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error('Word not found');
        }
        
        const data = await response.json();
        displayWordData(data);
    } catch (error) {
        document.getElementById('word-result').innerText = `Error: ${error.message}`;
    }
}

function displayWordData(data) {
    const wordDiv = document.getElementById('word-result');
    wordDiv.innerHTML = ''; // Clear previous results

    const wordData = data[0];
    let wordHTML = `
        <h4 class="word" class="word">${wordData.word}</h4>
      
        <p class="word-definition"><span>Definition:</span> ${wordData.meanings[0].definitions[0].definition}</p>
   
    `;
    wordDiv.style.height = 'fit-content';
    wordDiv.innerHTML = wordHTML;
}
