// initial variables
let main = document.getElementById("main");
const API_KEY = "0d3020705fef9617b6819b5fe2c3ae20";
const API_URL = "https://api.openweathermap.org";
let API_PATH = "/data/2.5/weather";

window.addEventListener("load");

axios.get(
  "http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}"
);

function createButton(text, id) {
  let button = document.createElement("button");
  button.setAttribute("id", id);
  button.setAttribute("class", "col btn");
  button.textContent = text;
  headerRow.appendChild(button);
}
