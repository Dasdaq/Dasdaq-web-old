<template>
  <div class="TransactionStatistics">
    <h2 class="subtitle is-5">{{ $t('transactionStatistics.title.today') }}</h2>
    <div class="box">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
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

  computed: {},

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
