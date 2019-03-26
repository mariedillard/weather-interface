$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const cityId = $('#location').val();
    $('#location').val("");
    
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=2ae3739e304390c36d98f1d32a4a6128`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});