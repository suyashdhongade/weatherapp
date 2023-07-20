const apiKey = '591fe53ee7160d1dd4e6f34132600d5a';
const searchInput = document.getElementById('search');
const cityElement = document.getElementById('city');
const descriptionElement = document.getElementById('description');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const weatherInfo = document.querySelector('.weather-info');

function searchWeather() {
  const cityName = searchInput.value.trim();
  if (!cityName) return;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === '404') {
        alert('City not found');
        return;
      }

      cityElement.textContent = data.name + ', ' + data.sys.country;
      descriptionElement.textContent = data.weather[0].description;
      temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      weatherInfo.style.display = 'block';
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert('Something went wrong. Please try again later.');
    });
}
