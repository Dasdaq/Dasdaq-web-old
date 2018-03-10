<template>
  <div class="PlayerStatisticsTable">
    <b-table class="box"
             :data="tableData"
             :mobile-cards="false">
      <template slot-scope="props">
        <b-table-column field="index"
                        :label="$t('playerStatistics.table.index')"
                        width="60"
                        numeric>
          {{ props.row.index }}
        </b-table-column>
        <b-table-column field="address"
                        :label="$t('playerStatistics.table.address')"
                        width="100">
          <router-link :to="{
                  name: 'UserView',
                  params:{address: props.row.address}}">
            {{ props.row.address.slice(-6).toUpperCase() }}
          </router-link>
        </b-table-column>
        <b-table-column field="value"
                        :label="$t('playerStatistics.table.value')"
                        width="110">
          {{ props.row.value*-1 | weiToETH(2)}}
        </b-table-column>
        <b-table-column field="message"
                        :label="$t('playerStatistics.table.message')"
                        class="player-message">
          {{ props.row.message }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import web3 from '@/web3';

export default {
  name: 'PlayerStatisticsTable',

  components: {},

  props: ['tableData'],

  data() {
    return {};
  },

  computed: {},

  created() {},

  methods: {},

  watch: {},

  filters: {
    weiToETH: (valueInWei, fixed) => {
      const valueInETH = web3.fromWei(valueInWei, 'ether');
      if (fixed !== undefined) {
        return Number(valueInETH).toFixed(fixed);
      }
      return valueInETH;
    },
  },
};
</script>

<style scoped>
.player-message {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
