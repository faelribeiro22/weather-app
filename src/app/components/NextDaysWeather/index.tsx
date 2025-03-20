import DaysWeather from './days-weather'

function NextDaysWeather() {
  const icons = ['01d', '02d', '03d', '04d', '09d']
  Math.random() * (35 - 15) + 15
  const date = new Date()
  return (
    <div className="flex items-center justify-content mt-50 bg-gray-900">
      {icons.map((icon, index) => (
        <DaysWeather
          key={`${index}-${icon}`}
          date={new Date(
            date.getDate() + (index + 2) * 24 * 60 * 60 * 1000
          ).toString()}
          temperature={`${(Math.random() * (35 - 15) + 15).toFixed(0)}°C`}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default NextDaysWeather
