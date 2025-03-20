import StatusWeather from '../StatusWeather'

interface NextDaysForecastProps {
  forecast: any
}

const NextDaysForecast: React.FC<NextDaysForecastProps> = ({ forecast }) => {
  const dailyData = forecast.list.filter(
    (item: any, index: number) => index % 8 === 0
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {dailyData.map((day: any, index: number) => (
        <div key={index} className="bg-gray-700 p-4 rounded-lg">
          <StatusWeather icon={day.weather[0].icon} />
          <p className="text-lg font-semibold">
            {new Date(day.dt * 1000).toLocaleDateString()}
          </p>
          <p>{day.main.temp.toFixed(1)}°C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  )
}

export default NextDaysForecast
