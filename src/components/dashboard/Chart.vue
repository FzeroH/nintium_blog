<template>
  <div>
    <h2>{{ chartName }}</h2>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      ref="line"/>
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
      type: Object,
      default: null,
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
            label: this.$props.chartName,
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
        responsive: true,
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

  watch: {
    userData() {
      this.chartData.datasets[0].data = this.$props.userData;
      this.chartData.datasets[0].label = this.$props.chartName;
      this.$refs.line.updateChart();
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 2.6rem;
  width: 66rem;
  height: 16.7rem;

  h2 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
}

@media (max-width: 767px) {
  div {
    width: 36rem;
    margin: 0;
    h2 {
      margin: 2.6rem;
    }
  }
}

@media (max-width: 321px) {
  div {
    width: 30rem;
    margin: 0;
    h2 {
      margin: 2.6rem;
    }
  }
}
</style>
