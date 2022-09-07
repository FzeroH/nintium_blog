<template>
  <div>
    <h2>{{ chartName }}</h2>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"/>
  </div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
);

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator,
  },
  props: {
    chartName: {
      type: String,
      default: '',
    },
    userData: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: 1058,
    },
    height: {
      type: Number,
      default: 267,
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'TotalViews',
            backgroundColor: '#000000',
            borderColor: '#000000',
            pointBorderColor: 'black',
            pointBackgroundColor: '#ffffff',
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBorderWidth: 2,
            data: this.$props.userData,
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          yAxis: {
            grid: {
              display: false,
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 2.6rem;
  //width: 66rem;
  height: 16.7rem;

  h2 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
}
</style>
