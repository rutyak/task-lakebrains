const apiKey = "840de593b7028de6e424162454790fe5";
const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("overlay");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weather-description");
const closeButton = document.getElementById("close-button");

searchButton.addEventListener("click", () => {
    const cityInput = document.getElementById("city-input").value;

    if (cityInput) {
        fetchWeatherData(cityInput);
    }
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = `City: ${data.name}`;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            weatherDescription.textContent = `Weather: ${data.weather[0].main} - ${data.weather[0].description}`;
            overlay.style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
