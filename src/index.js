let now = new Date();
let dayss = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
  "sunday"
];
let mydate = document.querySelector("#mydate");
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
mydate.innerHTML = `${dayss[now.getDay()]} ${hour}:${minute}`;

function showthisweather(response) {
  document.querySelector(".namecity").innerHTML = response.data.name;
  document.querySelector(".circle").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function searchcit(apicity) {
  let apikey = "ed814a7ae4765c535b06c11b05d51754";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${apicity}&appid=${apikey}&units=metric`;
  axios.get(apiurl).then(showthisweather);
}
function showcity(event) {
  event.preventDefault();
  let apicity = document.querySelector(".searchbox").value;
  searchcit(apicity);
}
function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showthisweather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let searchjs = document.querySelector("#searching");
searchjs.addEventListener("submit", showcity);
searchcit("New York");
// let valuecity =document.querySelector(".searchbox");
// let namecityjs = document.querySelector(".namecity");
// namecityjs.innerHTML= valuecity.value;
// }
// let searchjs = document.querySelector("#searching");
// searchjs.addEventListener("submit", showcity);

// function convertf(event) {
//     event.preventDefault();
//     let farennh = document.querySelector(".circle");
//     farennh.innerHTML = "91°";
// }
// let converttof = document.querySelector("#faren");
// converttof.addEventListener("click", convertf);

// function convertc(event) {
//     event.preventDefault();
//     let cel = document.querySelector(".circle");
//     cel.innerHTML = "14°";
// }
// let converttoc = document.querySelector("#celsius");
// converttoc.addEventListener("click", convertc);
