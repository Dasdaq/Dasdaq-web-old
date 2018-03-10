<template>
  <div class="ContractList">
    <b-table class="box"
             :data="contracts"
             :mobile-cards="false">
      <template slot-scope="props">
        <b-table-column :label="$t('ContractTable.index')"
                        width="60">
          {{ props.index+1 }}
        </b-table-column>
        <b-table-column field="address"
                        :label="$t('ContractTable.address')">
          <a :href="props.row.link">{{ props.row.address }}</a>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { getContracts } from '@/api';

export default {
  name: 'ContractList',

  components: {},

  props: ['itemId'],

  data() {
    return {
      contracts: [],
    };
  },

  computed: {},

  async created() {
    this.contracts = await getContracts(this.itemId);
  },

  methods: {},

  watch: {},
};
</script>

<style scoped>

</style>
