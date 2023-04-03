

const search = document.querySelector("#search"); 
let api_key = "f69a2be6cf3d8dc86b3ea55a2da24ca5";
let units = "metric";


search.addEventListener("input", function(){
  const city = search.value;
  if (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+ api_key +"&units="+ units)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau lors de la récupération des données.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let country = data.sys.country;
        let name = data.name;
        let temperature = data.main.temp;
        let max = data.main.temp_max;
        let min = data.main.temp_min;
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        let visibility = data.visibility;
        let pressure = data.main.pressure;

        document.getElementById("ville").textContent = (name + ', ' + country);
        document.getElementById("temperature").textContent = (Math.round(temperature) + '°C');
        document.getElementById("humidity").textContent = (humidity + ' %');
        document.getElementById("windSpeed").textContent = windSpeed;
        document.getElementById("visibility").textContent = visibility;
        document.getElementById("pressure").textContent = (pressure + ' hPa');
        document.getElementById("max").textContent = (Math.round(max) + '°C');
        document.getElementById("min").textContent = (Math.round(min) + '°C');
        document.getElementById("description").textContent = (`Aujourd'hui, il fait ${temperature} degrés.`);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données météo:", error);
      });
  }
})

function description() {
  
}



    











