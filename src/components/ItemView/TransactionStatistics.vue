<template>
  <div class="TransactionStatistics">
    <h2 class="subtitle is-5">{{ $t('ItemView.tabs.transaction.overviewTitle') }}</h2>
    <div class="box">
      <nav class="level">
        <div v-for="key in indicators"
             :key="key"
             class="level-item has-text-centered">
          <div>
            <p class="heading">{{ $t('ItemView.tabs.transaction.'+key) }}</p>
            <p class="title">{{item[key]}}</p>
          </div>
        </div>
      </nav>
    </div>
    <b-field class="is-pulled-right">
      <b-radio-button v-for="key in ['h1', 'd1', 'd7']"
                      :key="key"
                      v-model="dateRange"
                      :native-value="key"
                      type="is-danger">
        <span> {{$t(`ItemView.tabs.transaction.${key}`)}}</span>
      </b-radio-button>
    </b-field>
    <h2 class="subtitle is-5">{{ $t('ItemView.tabs.transaction.chartTitle') }}</h2>
    <!--<div class="is-clearfix"></div>-->
    <ECharts class="box chart"
             :init-options="echartInitOptions"
             :options="echartOptions"
             auto-resize />
  </div>
</template>

<script>
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default {
  name: 'TransactionStatistics',

  components: {},

  props: ['itemId', 'item'],

  data() {
    return {
      dateRange: 'd7', // h1,d1,d7
      echartInitOptions: {},
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
    echartOptions() {
      const rawData = this.item[this.dateRange] || [];
      const xAxisData = [];
      const keys = [
        'plays',
        'totalVolume',
        'transactionsCount',
        'totalGasCost',
      ];

      const legendData = keys.map(key =>
        this.$t(`ItemView.tabs.transaction.${key}`),
      );
      const series = keys.map(key => ({
        key,
        name: this.$t(`ItemView.tabs.transaction.${key}`),
        type: 'line',
        // stack: '总量',
        data: [],
      }));

      rawData.forEach((v) => {
        xAxisData.push(v.blockDate);
        series.forEach(({ key, data }) => {
          data.push(v[key]);
        });
      });

      return {
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: legendData,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        series,
      };
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
