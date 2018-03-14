<template>
  <div class="PlayerStatisticsTable">
    <b-table class="box"
             :data="tableData"
             :mobile-cards="false">
      <template slot-scope="props">
        <b-table-column field="index"
                        :label="$t('ItemView.tabs.player.index')"
                        width="60">
          {{ props.index+1 }}
        </b-table-column>
        <b-table-column field="address"
                        :label="$t('ItemView.tabs.player.address')"
                        width="100">
          <router-link :to="{
                  name: 'UserView',
                  params:{address: props.row.address}}">
            {{ props.row.address.slice(-6).toUpperCase() }}
          </router-link>
        </b-table-column>
        <b-table-column field="value"
                        :label="$t('ItemView.tabs.player.value')"
                        width="110">
          {{ props.row.value }}
        </b-table-column>
        <b-table-column field="message"
                        :label="$t('ItemView.tabs.player.message')"
                        class="player-message">
          {{ props.row.message }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.player-message {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
