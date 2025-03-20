interface Coord {
  lon: number
  lat: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface MainWeatherData {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

interface Wind {
  speed: number
  deg: number
}

interface Clouds {
  all: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
  pod?: string
}

export interface WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: MainWeatherData
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Clouds {
  all: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
}

interface Rain {
  '1h': number
}

interface Coord {
  lat: number
  lon: number
}

interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface MainForecast {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

interface ForecastItem {
  dt: number
  main: MainForecast
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain?: Rain
  sys: Sys
  dt_txt: string
}

export interface ForecastResponse {
  cod: string
  message: number
  cnt: number
  list: ForecastItem[]
  city: City
}
