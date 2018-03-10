<template>
  <div class="PlayerStatistics">
    <div class="columns">
      <div class="column is-half">
        <h2 class="subtitle is-5">{{ $t('playerStatistics.title.win') }}</h2>
        <PlayerStatisticsTable :tableData="winList" />
      </div>

      <div class="column is-half">
        <h2 class="subtitle is-5 has-text-danger">{{ $t('playerStatistics.title.loss') }}</h2>
        <PlayerStatisticsTable :tableData="lossList" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerStatisticsTable from '@/components/PlayerStatisticsTable';
import { getPlayers } from '@/api';

export default {
  name: 'PlayerStatistics',

  components: {
    PlayerStatisticsTable,
  },

  props: ['itemId'],

  data() {
    return {
      winList: [],
      lossList: [],
    };
  },

  computed: {},

  async created() {
    const d = await getPlayers(this.itemId);
    this.winList = d.winList;
    this.lossList = d.lossList;
  },

  methods: {},

  watch: {},
};
</script>

<style scoped>

</style>
