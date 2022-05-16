// The clock function is used to get the current browser time and change in the website.

function clock (){
  const d = new Date()
  hours = d.getHours()
  minutes = d.getMinutes()
  seconds = d.getSeconds()
  if (hours < 10){
      document.getElementById("hours").innerHTML = "0" + hours+":"
  } else{
      document.getElementById("hours").innerHTML = hours+":"}
  
  if (minutes < 10) {
      document.getElementById("minutes").innerHTML ="0" + minutes+":"
  } 
      else{document.getElementById("minutes").innerHTML = minutes+":"}
  
      if (seconds < 10) {
      document.getElementById("seconds").innerHTML = "0" + seconds
  }    else{
      document.getElementById("seconds").innerHTML = seconds
  }
}

// the getLocation functions as it's name implies get the location from the browser permissiont must be approved in order for it to work.
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}


// this function gets the data from the getLocation function and pulls the latitude and longitude, then it uses the fetch method to get the data from the open wwather API using the browser location
function showPosition(position) {
    var latitude =  position.coords.latitude;
    var longitude =  position.coords.longitude;
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=282d3de868454d1b54df7950b55c9495&units=metric") .then(response => response.json()) .then(data => write_data(data))
}

// this function writes the weather data
function write_data(data) {
  console.log(data)
  current_tempt = Math.floor(data.main.temp)
  document.getElementById("weather").innerHTML = current_tempt + "°"+"c"
  document.getElementById("location").innerHTML = data.name
  
}

getLocation()
window.setInterval(clock, 1000)




