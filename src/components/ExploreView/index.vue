<template>
  <main class="ExploreView">
    <b-tabs class="box"
            v-model="activeTab">
      <b-tab-item :label="$t('HomeView.appList.tabTitle')">
        <GameRank :item="item"></GameRank>
      </b-tab-item>

      <b-tab-item :label="$t('HomeView.userList.tabTitle')">
        <PlayerRank></PlayerRank>
      </b-tab-item>
    </b-tabs>
  </main>
</template>

<script>
import GameRank from '@/components/HomeView/GameRank';
import PlayerRank from '@/components/HomeView/PlayerRank';
import { getPlayerRank } from '@/api';

export default {
  name: 'ExploreView',

  components: {
    GameRank,
    PlayerRank,
  },

  data() {
    return {
      activeTab: 0,
      item: [],
    };
  },

  computed: {},

  async created() {
    this.item = await getPlayerRank();
  },

  methods: {},

  watch: {},
};
</script>

<style scoped>
.ExploreView {
}
</style>
