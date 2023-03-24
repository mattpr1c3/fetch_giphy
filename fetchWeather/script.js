const apiKey = "87d5e831d903000d41dfe328c8a934e5"
const cityName = "Tucson"
const state = "AZ"
const countryCode = "US"
const limit = "5"
const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${countryCode}&limit=${limit}&appid=${apiKey}`

async function getCityWeather() {
    let res = await fetch(geoUrl);
    let data = await res.json();
    console.log(data)
}
getCityWeather();