<template>
    <div class="GameRank">
      <b-table 
             :data="item"
             :mobile-cards="false">
      <template slot-scope="props">
        <b-table-column field=" "
                        :label="$t('ID')"
                        numeric>
          {{ props.index + 1 }}
        </b-table-column>
        <b-table-column field="title"
                        :label="$t('名称')">
          <router-link :to="{
                  name: 'UserView',
                  params:{address: props.row.url}}">
            {{ props.row.title}}
          </router-link>
        </b-table-column>
         <b-table-column field="category"
                        :label="$t('种类')">
          {{ props.row.category }}
        </b-table-column>
        <b-table-column field="balance"
                        :label="$t('结余')">
          {{ props.row.balance }}
        </b-table-column>
        <b-table-column field="dauLastDay"
                        :label="$t('日活跃用户')">
          {{ props.row.dauLastDay }}
        </b-table-column>
        <b-table-column field="volumeLastDay"
                        :label="$t('交易额(24h)')">
          {{ props.row.volumeLastDay }}
        </b-table-column>
        <b-table-column field="volumeLastWeek"
                        :label="$t('交易额(7d)')">
          {{ props.row.volumeLastWeek }}
        </b-table-column>
        <b-table-column field="txLastDay"
                        :label="$t('交易笔数(24h)')">
          {{ props.row.txLastDay }}
        </b-table-column>
        <b-table-column field="txLastWeek"
                        :label="$t('交易笔数(7d)')">
          {{ props.row.txLastWeek }}
        </b-table-column>
      </template>
    </b-table>
    </div>
</template>

<script>
export default {
  name: "GameRank",
  components: {},
  props: ["item"],
  data() {
    return {};
  },

  computed: {},

  created() {},

  methods: {},

  watch: {}
};
</script>