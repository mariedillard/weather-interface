export class WeatherService {
    getWeatherByCity(cityId) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=2ae3739e304390c36d98f1d32a4a6128`;
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
}