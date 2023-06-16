// initial variables
let main = document.getElementById("main");
const API_KEY = "0d3020705fef9617b6819b5fe2c3ae20";
const API_URL = "https://api.openweathermap.org";
let API_PATH = "/data/2.5/weather";
let button = document.getElementById("button");
let userZipcode = document.getElementById("userZipCode");
let userLocation = document.getElementById("userLocation");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let kelvin = document.getElementById("kelvin");
let farenheit = document.getElementById("farenheit");
let celcius = document.getElementById("celcius");
let condition = document.getElementById("condition");
let weatherStatus = document.getElementById("weatherStatus");

//add button funcitonality
button.addEventListener("click", getWeather);

//create functions
//this button verifies user inpput, as proper formatting is needed for
function verifyZip() {
  let userZipCode = userZipcodeInput.value;
  if (userZipcode.length === 5) {
    return userZipcode;
  } else {
    alert("Error, please enter a 5 digit zip code");
  }
}

//funciton to gather data from the API
function getWeather() {
  let currentZipCode = document.getElementById("userZipCodeInput");
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?zip=${currentZipCode}&appid=${API_KEY}`
    )
    .then((response) => {
      let data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      alert(
        "could not get weather data, please ensure you have entered the correct zip code"
      );
    });
}

window.onload = function () {
  getWeather();
};

//function to convert to farenheit

//function to converty to celcius
