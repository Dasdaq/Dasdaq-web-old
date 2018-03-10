<template>
  <main class="HomeView">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$t('HomeView.hero.title')}}
          </h1>
          <h2 class="subtitle">
            {{$t('HomeView.hero.subtitle')}}
          </h2>
        </div>
      </div>
    </section>

    <div v-if="false"
         class="searchContent">
      <div class="searchInput">
        <input class="searchValue"
               type="search"
               placeholder="输入Dap名称或玩家名" />
        <button class="searchButton"><img src="../../static/images/front/search.jpg"
               alt=""></button>
      </div>
      <div class="searchHot">
        <p>热门搜索：
          <span>Cryptoitties</span>
          <span>ForkDelta</span>
          <span>ETHERBOTS</span>
        </p>
      </div>
    </div>

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
  name: 'HomeView',

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
.hero {
  width: 100vw;
  transform: translateX(-5%);
  margin-bottom: 2rem;
}
/* .hero.is-primary {
  background-color: #00d1b2;
} */
.searchHot {
  font-size: 14px;
  margin: 0.5em 0 2em 10%;
}
.searchHot p span {
  margin: 0 1em 0 0.3em;
}
.searchInput {
  margin: 0.1em 10%;
  height: 15%;
}
.searchButton {
  width: 13%;
  height: 2.9em;
  background: #4fd2b3;
  margin-left: -0.4em;
  outline: none;
  box-shadow: 0.2em 0px 50px rgba(0, 0, 0, 0.2);
}
.searchButton img {
  width: 2em;
  height: 2em;
  vertical-align: middle;
}
.searchContent {
  width: 70%;
  margin: 2em auto;
  border: 1px solid #ccc;
  padding: 2em auto;
}
.searchValue {
  border: 0 solid #ccc;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  margin: 3em 0 1em 0;
  display: inline-block;
  width: 60%;
  height: 2.8em;
  line-height: 2.4em;
  font-size: 16px;
  outline: none;
  padding-left: 1em;
  padding-bottom: 0.3em;
}
input::-webkit-input-placeholder {
  color: #c4c4c4;
}
</style>
