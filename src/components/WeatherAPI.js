import axios from "axios"

class WeatherAPI {
    #apiKey
  constructor(apiKey) {
    this.#apiKey = apiKey
  }
  
   #getApi = () =>
    `http://api.weatherapi.com/v1/current.json?key=${this.#apiKey}`

   getByCityName = async (name) => {
    const fullRequest = this.#getApi() + `&q=${name}`

    const response = await axios.get(fullRequest)

    const current = response.data.current

    console.log(
      `On the date ${current.last_updated} in ${name} temperature is ${current.temp_c}°C`
    )

    return current.temp_c
    
  }
}

export { WeatherAPI }