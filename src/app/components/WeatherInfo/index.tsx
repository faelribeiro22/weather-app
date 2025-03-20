import { WeatherData } from '@/types/types'
import CityDetailsWeather from '../CityDetailsWeather'
import Logo from '../Logo'
import Search from '../Search'
import Link from 'next/link'

async function WeatherInfo({
  name,
  weather,
  wind,
  main,
  visibility
}: WeatherData) {
  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' })
  const dateFormat = formattedDate.format(date)
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <form method="get" action="/">
        <Search />
      </form>
      <Link href={`/cidade/${name}`}>
        <CityDetailsWeather
          location={name}
          description={weather[0].description}
          date={dateFormat}
          temperature={`${main.temp.toFixed(0)}°C`}
          humidity={`${main.humidity}%`}
          visibility={`${visibility / 1000}km`}
          airPressure={`${main.pressure}hPa`}
          windSpeed={`${wind.speed}mph`}
          icon={weather[0].icon}
        />
      </Link>
    </div>
  )
}

export default WeatherInfo
