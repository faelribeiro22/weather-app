import StatusWeather from '../StatusWeather'

interface DaysWeatherProps {
  date: string
  temperature: string
  icon: string
}

function DaysWeather({ date, temperature, icon }: DaysWeatherProps) {
  return (
    <div className="flex items-center m-2 justify-center bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
      <StatusWeather icon={icon} />
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">
          {new Date(date)
            .toLocaleDateString('pt-BR', { weekday: 'short' })
            .toLocaleUpperCase()}
        </div>
        <div className="text-4xl font-semibold mt-2">{temperature}</div>
      </div>
    </div>
  )
}

export default DaysWeather
