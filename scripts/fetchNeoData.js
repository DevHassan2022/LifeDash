// export async function fetchNeoData() {
//     const startDate = document.getElementById('start-date').value
//     const endDate = document.getElementById('end-date').value
//     const apiKey = '4Z6QwdNDJc7DDXeaMB26cW1tFqLmPx3qtwgYIMh6'
    
//     if(!startDate || !endDate){
//         alert("Please select both start dates and end dates.")
//         return
//     }

//     try {
//         const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?
//             start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`)
//         const data = await response.json()
//         console.log(data)
//         const neoList = document.getElementById('neo-list')
//         neoList.innerHTML = ''

//         const asteroids = data.near_earth_objects
//         Object.keys(asteroids).forEach(date => {
//             asteroids[date].forEach(neo => {
//                 const neoDiv = document.createElement('div')
//                 neoDiv.classList.add('neo-item')
//                 neoDiv.innerHTML = `
//                     <p class="neo-name"><strong>${neo.name}</strong></p>
//                     <p>⌀ Estimated diameter: ${neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</p>
//                     <p>📏 Miss distance: ${neo.close_approach_data[0].miss_distance.kilometers} km</p>
//                     <p>⚠️Hazardous: ${neo.is_potentially_hazardous_asteroid? 'Yes' : 'No'}</p>
//                     <a href=${neo.nasa_jpl_url} target="_blank"><span>ℹ️ </span>View Asteroid Information from the Jet Propulsion Lab</a>
//                 `
//                 neoList.appendChild(neoDiv)
//             })
//         })
//     } catch( error ) {

//     }
// }


export async function fetchNeoData() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const apiKey = '4Z6QwdNDJc7DDXeaMB26cW1tFqLmPx3qtwgYIMh6';

    // Ensure both dates are selected
    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
    }

    // Ensure the date range is 7 days or less
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateDiff = (end - start) / (1000 * 60 * 60 * 24); // Convert milliseconds to days

    if (dateDiff > 7) {
        alert("The date range cannot exceed 7 days. Please select a shorter range.");
        return;
    }

    try {
        // Fetch NEO data from NASA API
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`);
        const data = await response.json();
        console.log(data);

        // Clear previous NEO results
        const neoList = document.getElementById('neo-list');
        neoList.innerHTML = '';

        // Extract asteroids data
        const asteroids = data.near_earth_objects;

        // Display each asteroid
        Object.keys(asteroids).forEach(date => {
            asteroids[date].forEach(neo => {
                const neoDiv = document.createElement('div');
                neoDiv.classList.add('neo-item');
                neoDiv.innerHTML = `
                    <p class="neo-name"><strong>${neo.name}</strong></p>
                    <p>⌀ Estimated diameter: ${neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
                    <p>📏 Miss distance: ${neo.close_approach_data[0].miss_distance.kilometers} km</p>
                    <p>⚠️ Hazardous: ${neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
                    <a href="${neo.nasa_jpl_url}" target="_blank"><span>ℹ️ </span>View Asteroid Information from the Jet Propulsion Lab</a>
                `;
                neoList.appendChild(neoDiv);
            });
        });
    } catch (error) {
        console.error('Error fetching NEO data:', error);
        alert('An error occurred while fetching NEO data. Please try again.');
    }
}
