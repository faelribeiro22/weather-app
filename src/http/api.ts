import { WeatherData, WeatherDataCords } from '@/types/types'

export async function getCityWeatherRequest(url: string): Promise<WeatherData> {
  const res = await fetch(url, {
    method: 'GET'
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: WeatherData = body ? JSON.parse(body) : {}

  return data
}

export async function getCityWeatherCordsRequest(
  url: string
): Promise<WeatherDataCords> {
  const res = await fetch(url, {
    method: 'GET'
  })

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: WeatherDataCords = body ? JSON.parse(body) : {}

  return data
}
