import DaysWeather from './days-weather'

function NextDaysWeather() {
  const icons = ['01d', '02d', '03d', '04d', '09d']
  const date = new Date()

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-12 bg-gray-900 p-4 space-y-4 md:space-y-0 md:space-x-4">
      {icons.map((icon, index) => (
        <DaysWeather
          key={`${index}-${icon}`}
          date={new Date(
            date.getTime() + (index + 1) * 24 * 60 * 60 * 1000
          ).toLocaleDateString()}
          temperature={`${(Math.random() * (35 - 15) + 15).toFixed(0)}°C`}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default NextDaysWeather
