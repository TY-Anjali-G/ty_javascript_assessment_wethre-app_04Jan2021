etch(
    `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=bangalore`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      var display = "";
  
      display += `
      <div class="container col-md-4">
        <div class="card">
          <div class="card-body">
          <p><h3>Weather</h3> : ${data.current.condition.text}</p><br>
          <p><h3>${data.location.name}:${data.location.country}</h3></p>
          <p class="display-1">${data.current.temp_f}<sup>F</sup></p><br>
          <p><h3>Feels like</h3> : ${data.current.temp_f}</p><br>
          <p><h3>Humidity</h3> : ${data.current.humidity}%</p><br>
          <p><h3>Wind</h3> : ${data.current.wind_mph}</p><br>
          
          </div>
        </div>
      </div>
                        
                    `;
      document.getElementById("disp").innerHTML = display;
    });