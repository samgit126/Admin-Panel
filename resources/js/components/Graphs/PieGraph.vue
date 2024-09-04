<script>
import { Pie } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          data: [40, 20, 12, 55, 6],
          backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 205, 86, 1)', 'rgba(153, 102, 255, 1)'],
        }],
      },
      chartOptions: {
        responsive: true,
        title: {
          display: true,
          text: 'Monthly Sales',
          fontSize: 16,
          padding: 10,
          align: 'center',
          verticalAlign: 'middle',
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 10,
            padding: 10,
          },
        },
        colors: ['red', 'blue', 'green', 'yellow', 'orange'],
      }
    }
  }
}

</script>

<template>

  <div>
    <Pie
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>