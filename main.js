async function checkWeather() {
    //Get weather details
    const apiKey = "11d3b9c07990652357958ea2d3771926";
    const city = document.querySelector("input").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
   

try {
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    // Display weather details
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp-273.15)+ "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".precentage").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind.speed").innerHTML = data.wind.speed+" Km/h";

    document.querySelector("input").value = "";

// Display icon based on weather condition
    const weather_condition = data.weather[0].main;
    let img = document.querySelector(".weather-img");

    switch (weather_condition) {
        case "Clear":
            img.src = "images/clear.png";
            break;
        case "Clouds": 
            img.src = "images/clouds.png";
            break;
        case "Drizzle":
            img.src = "images/drizzle.png";
            break;
        case "Mist": 
            img.src = "images/mist.png";
            break;  
        case "Rain": 
            img.src = "images/rain.png";
            break; 
        case "Snow": 
            img.src = "images/snow.png";
            break;   
        
    }
} catch (error) {
    console.log(error);
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}

    
}
