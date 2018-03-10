<template>
  <main class="ItemView">
    ItemView {{id}}

    <section>
      <b-tabs v-model="activeTab">
        <b-tab-item :label="$t('itemView.tabs.transaction')">
          <TransactionStatistics :itemId="id" />
        </b-tab-item>

        <b-tab-item :label="$t('itemView.tabs.comment')">
          <Disqus :shortname="$config.disqus.shortname"
                  :identifier="id"></Disqus>
        </b-tab-item>

        <b-tab-item :label="$t('itemView.tabs.player')">
          <PlayerStatistics :itemId="id" />
        </b-tab-item>

        <b-tab-item :label="$t('itemView.tabs.contract')">
          Contract
        </b-tab-item>
      </b-tabs>
    </section>

  </main>
</template>

<script>
import Disqus from 'vue-disqus/VueDisqus';
import TransactionStatistics from '@/components/TransactionStatistics';
import PlayerStatistics from '@/components/PlayerStatistics';

export default {
  name: 'ItemView',

  components: {
    Disqus,
    TransactionStatistics,
    PlayerStatistics,
  },

  data() {
    return {
      activeTab: 0,
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  created() {},

  methods: {},

  watch: {},
};
</script>

<style scoped>

</style>
