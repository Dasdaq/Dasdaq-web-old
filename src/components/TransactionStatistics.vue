<template>
  <div class="TransactionStatistics">
    <h2 class="subtitle is-5">{{ $t('transactionStatistics.title.today') }}</h2>
    <div class="box">
      <nav class="level">
        <div v-for="key in indicators"
             :key="key"
             class="level-item has-text-centered">
          <div>
            <p class="heading">{{ $t('transactionStatistics.'+key) }}</p>
            <p class="title">{{item[key]}}</p>
          </div>
        </div>
      </nav>
    </div>

    <h2 class="subtitle is-5">{{ $t('transactionStatistics.title.history') }}</h2>
    <ECharts class="box chart"
             :init-options="echartInitOptions"
             :options="echartOptions"
             auto-resize />
  </div>
</template>

<script>
import 'echarts/lib/chart/line';

export default {
  name: 'TransactionStatistics',

  components: {},

  props: ['itemId', 'item'],

  data() {
    return {
      echartInitOptions: {},
      echartOptions: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
      },
    };
  },

  computed: {
    indicators() {
      return [
        'balance',
        'dauLastDay',
        'volumeLastDay',
        'volumeLastWeek',
        'txLastDay',
        'txLastWeek',
      ];
    },
  },

  created() {},

  methods: {},

  watch: {},
};
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>
