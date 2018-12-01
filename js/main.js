$(document).ready(function() {

    function getWeather() {
        $('#btn').click(function() {
            const city = $('#city').val();

            url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=d7b54ccbb3972d97e9c7352bfc47a586";
            $.getJSON(url, function(data) {

                const icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                const weather = data.weather[0].main;
                const temp = Math.floor(data.main.temp);
                const city = data.name;
            
                function toCelcius(temp) {
                    celcius = Math.floor((temp - 32) * 5/9);
                    return celcius;
                }
            
                $('.title').text(city);
                $('.icon').attr('src', icon);
                $('.weather').text(weather);
                $('.temp').text(toCelcius(temp));
            });
        });
    };

    getWeather();
});
