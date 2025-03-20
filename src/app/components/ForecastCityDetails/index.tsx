'use client'
import { ForecastResponse, WeatherData } from '@/types/types'
import TemperatureChart from '../TemperatureChart'
import NextDaysForecast from '../NextDaysForecast'
import Link from 'next/link'

type ForeCastCityDetailsProps = {
  weather: WeatherData
  forecast: ForecastResponse
  city: string
}

function ForeCastCityDetails({
  weather,
  forecast,
  city
}: ForeCastCityDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link href="/">Voltar</Link>
      <h1 className="text-4xl font-bold text-center mb-8">
        Previsão do Tempo para {city}
      </h1>

      {/* Seção de temperatura atual */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Temperatura Atual</h2>
        <p className="text-xl">
          {weather.main.temp.toFixed(1)}°C (Sensação térmica:{' '}
          {weather.main.feels_like.toFixed(1)}°C)
        </p>
      </div>

      {/* Gráfico de temperatura para as próximas 24 horas */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Próximas 24 Horas</h2>
        <TemperatureChart data={forecast.list.slice(0, 8)} />
      </div>

      {/* Previsão para os próximos 5 dias */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Próximos 5 Dias</h2>
        <NextDaysForecast forecast={forecast} />
      </div>
    </div>
  )
}

export default ForeCastCityDetails
