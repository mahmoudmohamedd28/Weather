//days and dates
//day in month + month
const d = new Date()
let day = d.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
console.log(day,month);

//day
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = days[d.getDay()];
console.log( today );

//tommorrow
var todayIndex = days.indexOf(today);
var tomIndex = todayIndex + 1
var tomorrow = days.at(tomIndex)

//after-tom
var afterTomIdx = todayIndex + 2
var afterTom = days.at(afterTomIdx)
console.log( todayIndex ,tomIndex  , afterTomIdx , today , tomorrow ,afterTom );



//selection
var cityName = document.querySelector('#citynameinput')
let findButton = document.querySelector('#findWeather') 

//steps
// 1 - akhod esm el madina mnl input a7oto mkan el q 
// 2 - nzbt el design 3la el mkan w nzbt el icons

let allCities = {}
let allCitiesArr = []

async function fetching () {
  
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef2408756cab46e8ab6140555242312&q=${cityName.value}&days=3`)
  .then(function(allCities){
    return  allCities.json() 
})
  
  .then(function (allCities) {
    allCitiesArr = Object.entries (allCities)
    forecast = Object.entries(allCitiesArr[2][1])
    //testing selection
    console.log (     allCitiesArr[2][1]     ) // enhrda
    console.log (   forecast[0][1][1].day    ) // bokra
    console.log (   forecast[0][1][2].day    ) // b3d bokra
    
})
  
}
function displayWeather (){
  
  var container = ''  
  
  container = container + `  <div class="card cardsbg">
  <div class="card-footer d-flex justify-content-between shadow">
  <small class="text-white" id="today">${today}</small>
            <small class="text-white" id="date">${day} ${month}</small>
            </div>
            
            <div class="card-body ">
            <p>${cityName.value}</p>
            <h1 class="display-3 fw-bold">${allCitiesArr[1][1].temp_c} °C </h1>
            <img src=" https:${allCitiesArr[1][1].condition.icon}" alt="${allCitiesArr[1][1].condition.text}">
            <div>
            <p class="text-info"> ${allCitiesArr[1][1].condition.text}</p>
            
            <div class="d-flex gap-2 mt-4 ">
            <i></i><p> ${forecast[0][1][2].day.daily_chance_of_rain}   <i class="fa-solid fa-umbrella"></i> </p>
            <i></i><p> ${allCitiesArr[1][1].wind_kph}  <i class="fa-solid fa-wind"></i>  </p>
            <i></i><p> ${allCitiesArr[1][1].wind_dir} <i class="fa-solid fa-compass"></i> </p>
            </div>
            
            </div>
            </div>
            </div>
            
            
            <div class="card midcard text-center">
            <div class="card-footer d-flex justify-content-between shadow">
            <small class="text-white" id="tomorrow">${tomorrow}</small>
            <small class="text-white" id="tdate">${day+1} ${month}</small>
            </div>
            <div class="card-body">
            <img src = "https:${forecast[0][1][1].day.condition.icon }" alt = "${forecast[0][1][1].day.condition.text}" class = "my-4">  
            <h3>${forecast[0][1][1].day.maxtemp_c} °C</h3>
            <h6 class="fw-lighter">${forecast[0][1][1].day.mintemp_c} °C </h6>
            <p class="text-info" class = "my-4">${forecast[0][1][2].day.condition.text}</p>
            
            </div>
            
            </div>
            
            <div class="card cardsbg text-center">
            <div class="card-footer d-flex justify-content-between shadow">
            <small class="text-white" id="tomorrow">${afterTom}</small>
            <small class="text-white" id="tdate">${day+2} ${month}</small>
            </div>
            <div class="card-body">
            <img src = "https:${forecast[0][1][2].day.condition.icon }" alt = "${forecast[0][1][2].day.condition.text}" class = "my-4">
            <h3>${forecast[0][1][2].day.maxtemp_c}</h3>
            <h6 class="fw-lighter">${forecast[0][1][2].day.mintemp_c} </h6>
            <p class="text-info">${forecast[0][1][2].day.condition.text}</p>
                
            </div>
      </div>`
            
            document.getElementById('cardsGroup').innerHTML = container
}

cityName.addEventListener ( 'keyup' ,  async function () {
  await fetching(); 
  displayWeather();     
})

//geolocation
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showPosition);
// } else {
//   document.getElementById("loca").innerHTML =
//   "Geolocation is not supported by this browser.";
// }

// function showPosition(position) {
//   document.getElementById("loca").innerHTML =
//   "Latitude: " + position.coords.latitude +
//   "Longitude: " + position.coords.longitude;
// }
// console.log();