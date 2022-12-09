let submit = document.getElementById("submit");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let feels_like = document.getElementById("feels_like");
let humidity = document.getElementById("humidity");
let wind_speed = document.getElementById("wind_speed");

//Required Info To Make Api Call
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2e2def78f3mshd5e21c999b2be1bp120df7jsn896b08b2c58c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Function to Make Api Call
const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            // console.log(city)

            // Changing container's display to flex from hidden
            // Hidden display is to Ease out process in case of "Not Found"

            document.getElementById("container").style.display = "flex";
            if (response.error === "An unexpected error occured.") {
                document.getElementById("container").style.fontSize = "5rem";
                document.getElementById("container").innerHTML = "Not Found";

            }
            // Populate data from response in the html document
            temp.innerText = response.temp;
            feels_like.innerText = response.feels_like;
            humidity.innerText = response.humidity;
            wind_speed.innerText = response.wind_speed;
        })
        .catch(err => {
            console.error(err)
        });

}

// Eventlister to Listen the click of submit button.
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
    document.getElementById("cityName").innerText = city.value;
});

// Default City Delhi [api call]
getWeather("delhi");