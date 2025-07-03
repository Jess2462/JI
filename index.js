document.getElementByID('weatherForm').addEventListener('submit',function(e){
  e.preventDefault();
  
  var city=document.getElementByID('cityInput').value;
  var apiKey='b2b02f68834360ebc586a5c014d332f0';
  var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial';
  
  fetch(apiUrl)
     .then(response=> response.json())
     .then(data => {
         const weatherResult=document.getElementByID('weatherResult')
