const APP_KEY = 'your_apt_key_here';
const weatherCard=document.gerElementById('weatherCard');
const weatherInfo=document.gerElementById('weatherInfo');

async function fetchWeather(){
	const location=document.gerElementById('location').value;
	if(!location){
		alert("please enter a location!");
		return;
	}
	try{
		const response=await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
		);
		if(!response.ok) throw new Error("Location not found!");
		const data=await response.json();
		displayWeather(data);
		}catch(error){
			weatherInfo.innerHTML=`<p style="color: red;">Error: ${error.message}</p>`;
		}
	}
	function displayWeather(data){
		const { name, main, weather } = data;
		weatherInfo.innerHTML = `
			<h2>${name}</h2>
			<p>Temperature: ${main.temp}°C</p>
			<p>Weather: ${weather[0].description}</p>
			<p>Humidity: ${main.humidity}%</p>
		`;
	}