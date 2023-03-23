const apiKey = "87d5e831d903000d41dfe328c8a934e5"
const cityName = "Tucson"
const state = "AZ"
const countryCode = "US"
const limit = "5"
const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${countryCode}&limit=${limit}&appid=${apiKey}`

function getCityWeather() {
    fetch()
}