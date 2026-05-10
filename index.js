let apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let apiKey="b3bec6a668e8af8a0ac76d9d222e4732";
let search=document.querySelector(".searchBox input");
let btn=document.querySelector("button");
let image=document.querySelector(".w1 img");
let card=document.querySelector(".card")
let weatherStatus=document.querySelector(".weatherStatus")

async function checkWeather(city)
{
    let response = await fetch(apiURL +city+`&appid=${apiKey}`);
    let data= await response.json();
    if(data.cod==404)
    {
        document.getElementById("invalid").style.display="block";
            weatherStatus.style.display = "none";
    }
    else{
                document.getElementById("invalid").style.display="none";

    document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";
document.getElementById("city").innerHTML=data.name;
document.getElementById("dh").innerHTML=data.main.humidity+"%";
document.getElementById("dw").innerHTML=data.wind.speed+" km/h";
console.log(data.weather[0].main);
let weatherMain = data.weather[0].main;
let weatherIcon = data.weather[0].icon;

if(weatherMain=="Clouds")
{
    if(weatherIcon.includes("n"))
    {
        image.src="./cloudy-night-1.svg";
    }
    else
    {
        image.src="./cloudy-day-2.svg";
    }
}
else if(weatherMain=="Rain")
{
    image.src="./rainy-1.svg";
}
else if(weatherMain=="Clear")
{
    if(weatherIcon.includes("n"))
    {
        image.src="./night.svg";
    }
    else
    {
        image.src="./clear.svg";
    }
}
else if(weatherMain=="Snow")
{
    image.src="./snowy-1.svg";
}
else if(weatherMain=="Drizzle")
{
    image.src="./rainy-2.svg";
}
else if(weatherMain=="Thunderstorm")
{
    image.src="./thunder.svg";
}
else if(
    weatherMain=="Mist" ||
    weatherMain=="Haze" ||
    weatherMain=="Fog" ||
    weatherMain=="Smoke"
)
{
    if(weatherIcon.includes("n"))
    {
        image.src="./cloudy-night-1.svg";
    }
    else
    {
        image.src="./cloudy.svg";
    }
}
else 
{
    image.src="./clear.svg";
}
card.style="height:650px;transition:height 0.4s ease";
weatherStatus.style="display:block";
    }
}

btn.addEventListener("click",function(){
    checkWeather(search.value);
}); 
search.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        checkWeather(search.value);
    }
});
