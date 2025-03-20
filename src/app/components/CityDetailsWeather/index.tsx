import StatusWeather from '../StatusWeather'

interface CityDetailsWeatherProps {
  location: string
  date: string
  temperature: string
  humidity: string
  visibility: string
  airPressure: string
  windSpeed: string
  icon: string
  description: string
}

function CityDetailsWeather({
  location,
  date,
  description,
  temperature,
  humidity,
  visibility,
  airPressure,
  windSpeed,
  icon
}: CityDetailsWeatherProps) {
  return (
    <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{location}</div>
          <p className="text-gray-700 text-base">{date}</p>
          <p className="text-gray-700 text-3xl mt-2">{temperature}</p>
        </div>
        <div>
          <StatusWeather icon={icon} />
          <p className="text-gray-700 text-base">
            {description.toLocaleUpperCase()}
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="flex justify-between">
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Humidade: {humidity}
          </p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Visibilidade: {visibility}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Pres do ar: {airPressure}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Vel do vento: {windSpeed}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CityDetailsWeather
