import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { ForecastItem } from '@/types/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface TemperatureChartProps {
  data: ForecastItem[]
}

function TemperatureChart({ data }: TemperatureChartProps) {
  const chartData = {
    labels: data.map((item) => new Date(item.dt * 1000).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: data.map((item) => item.main.temp),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }
    ]
  }

  const options = {
    responsive: true, // Gráfico responsivo
    maintainAspectRatio: false, // Permite que o gráfico se ajuste ao contêiner
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Temperatura nas Próximas 24 Horas'
      }
    }
  }

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-112 xl:h-128 p-4 bg-gray-800 rounded-lg shadow-lg">
      <Line data={chartData} options={options} />
    </div>
  )
}

export default TemperatureChart
