<template>
  <div class="dashboard">
    <div class="container">

      <div class="row statistics__statistics">

        <div class="col-12 text-center">
          <div class="statistics__chart">
            <line-chart :data="chartData"></line-chart>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';

export default {
  components: { LineChart },
  data() {
    return {
      eventsList: [{
        value: 'Event1',
        label: 'Event1',
      }, {
        value: 'Event2',
        label: 'Event2',
      }, {
        value: 'Event3',
        label: 'Event3',
      }, {
        value: 'Event4',
        label: 'Event4',
      }, {
        value: 'Event5',
        label: 'Event5',
      }],
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'Przejazdy',
            backgroundColor: 'rgba(71,111,191,0.7)',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
    };
  },
  methods: {
    changeChartDataSet() {
    },
    changeChartDataRange() {
    },
  },
};
</script>
