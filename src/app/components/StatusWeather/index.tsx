import Image from 'next/image'

interface StatusWeatherProps {
  icon: string
}

function StatusWeather({ icon }: StatusWeatherProps) {
  const iconApi = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return <Image src={iconApi} alt="Icone do clima" width={50} height={50} />
}

export default StatusWeather
