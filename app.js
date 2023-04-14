//jshint es version: 6


const express = require("express");
const app = express();
const https = require('https');

app.get("/", function(req, res){
  const url="https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f6c13c65f0e9c219fab9e505f3c01b81"
  https.get(url,function(response){

    response.on("data",function(data){
     const weatherData = JSON.parse(data)
     const temp=weatherData.main.temp;
     const description=weatherData.weather[0].description;
     res.write("<p>The weather is currently "+description + "</p>")
     res.write("<h1> The temperature in London at the moment is "+temp+" degree </h1>")
     res.send();
    })

  })

  // res.send("Server is up and running");
});


app.listen (3000, function(){
console.log("Server is running on port 3000.");
});
