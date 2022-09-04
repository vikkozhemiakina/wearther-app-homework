function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "c1b6dbd5f5a0d88ca364829bf8480754";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
