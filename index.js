document.getElementByID('weatherForm').addEventListener('submit',function(e){
  e.preventDefault();
  
  var city=document.getElementByID('cityInput').value;
  var apiKey='b2b02f68834360ebc586a5c014d332f0';
  var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial';
  
  fetch(apiUrl)
     .then(response=> response.json())
     .then(data => {
         const weatherResult=document.getElementByID('weatherResult')
         weatherResult.innerHTML=
           <h2>${data.name}</h2> <!--Display the city name-->
           <p>Temperature:${data.name.temp} °F</p> <!--Display the temperature in Fahrenheit-->
           <p>Weather: ${data.weather[0].description}</p> <!--Display the weather description-->
           <p>Humidity:${data.main.humidity}%</p> <!--Display the humidity percentage-->
           <p>Wind Speed:${data.wind.speed}mph </p> <!--Display the wind speed in miles per hour-->
        ;
})
.catch(()=>{
  document.getElementByID('weatherResult').innerHTML='<p>Something went wrong. Please try again.</p>';
  });
});

