import ForeCastCityDetails from '@/app/components/ForecastCityDetails'
import { getCityForecastRequest, getCityWeatherRequest } from '@/http/api'

interface CityPageProps {
  params: Promise<{
    city: string
  }>
}

async function CityPage(props: CityPageProps) {
  const { city } = await props.params
  const apiKey = process.env.OPENWEATHERMAP_API_KEY

  const linkApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=712aaca3cb215990eb3885738a8c150a&units=metric&lang=pt_br`
  const weatherResponse = await getCityWeatherRequest(linkApiWeather)

  // Obter previsão para os próximos 5 dias
  const forecastResponse = await getCityForecastRequest(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=712aaca3cb215990eb3885738a8c150a&units=metric&lang=pt_br`
  )

  return (
    <>
      <ForeCastCityDetails
        city={weatherResponse.name}
        weather={weatherResponse}
        forecast={forecastResponse}
      />
    </>
  )
}

export default CityPage
