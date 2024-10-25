// export async function fetchWeather() {
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     try {
//       const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`);
//       if (!res.ok) {
//         throw new Error("Weather data not available");
//       }
//       const data = await res.json();
//       const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//       document.getElementById("weather").innerHTML = `
//         <img src=${iconUrl} />
//         <p class="weather-temp">${Math.round(data.main.temp)}º</p>
//         <p class="weather-city">${data.name}</p>
//       `;
//     } catch (err) {
//       console.error(err);
//     }
//   });
// }
export async function fetchWeather() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        // Fetch weather data
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`);
        if (!res.ok) {
          throw new Error("Weather data not available");
        }
        const data = await res.json();
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // Replace the SVG with the weather data
        document.getElementById("weather").innerHTML = `
          <img src=${iconUrl} />
          <p class="weather-temp">${Math.round(data.main.temp)}º</p>
          <p class="weather-city">${data.name}</p>
        `;
      } catch (err) {
        console.error(err);
        document.getElementById("weather").innerHTML = `<p>Failed to fetch weather data</p>`;
      }
    });
  }
