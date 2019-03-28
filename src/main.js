import $ from 'jquery';
import { WeatherService } from './js/weather-service.js'; 
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const cityId = $('#location').val();
    $('#location').val("");

    let weatherService = new WeatherService(); 
    let promise = weatherService.getWeatherByCity(cityId); 


    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${body.name} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processsing your request: ${error.message}`);
    });
  });
});