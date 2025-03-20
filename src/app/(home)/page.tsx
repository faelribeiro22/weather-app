import { getCityWeatherRequest } from '@/http/api'
import WeatherInfo from '../components/WeatherInfo'

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const city = (await searchParams).city || 'São Paulo'
  const linkApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=712aaca3cb215990eb3885738a8c150a&units=metric&lang=pt_br`
  const data = await getCityWeatherRequest(linkApi)

  return (
    <main>
      <WeatherInfo {...data} />
    </main>
  )
}
