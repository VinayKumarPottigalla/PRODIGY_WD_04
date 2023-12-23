
const apiurl = "http://api.openweathermap.org/data/2.5/forecast?appid=f20aa83380af25131907f8fa2aea0bbe&units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl + city);
    var data = await response.json();

    console.log(data);

    document.querySelector(".place").innerHTML = data.city.name;
   document.querySelector(".tempature").innerHTML = data.list[0].main.temp + "°c";
    //for (var i = 0; i < data.list.length; i++) { document.querySelector(".tempature").innerHTML =data.list[i].main.temp};
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "km/h";

    if(data.list[0].weather.main === "Clouds"){
        weatherIcon.src="./assests/clouds.png"
    }else if(data.list[0].weather.main  === "Clear"){
        weatherIcon.src="./assests/clear.png"
    }else if(data.list[0].weather.main  === "Rain"){
        weatherIcon.src="./assests/rain.png"
    }
    else if(data.list[0].weather.main  === "Drizzle"){
        weatherIcon.src="./assests/drizzle.png"
    }else if(data.list[0].weather.main  === "Mist"){
        weatherIcon.src="./assests/mist.png"
    }else if(data.list[0].weather.main  === "Snow"){
        weatherIcon.src="./assests/snow.png"
    }

}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value)
})



