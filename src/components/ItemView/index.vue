<template>
  <main class="ItemView">

    <div class="middle item-hero">
      <div class="content">
        <div class="columns is-desktop">
          <div class="column is-three-quarters-desktop is-two-thirds-tablet">
            <h1>{{item.title}}</h1>
            <span class="category">{{item.category}}</span>
          </div>
          <div class="column">
            <a class="button is-primary is-inverted is-outlined"
               target="_blank"
               :href="item.url">
              {{$t('ItemView.dAppSite')}}</a>
          </div>
        </div>
        <p>
          <span class="icon item"><img style="background: #4fd2b3;border-radius:50%;"
                 src="/static/images/header/time.png"
                 alt="time" /></span>
          {{$t('ItemView.publishDate')}}
          <span>{{item.createdAt}}</span>
        </p>
        <div class="">
          <span class="icon item1 item"><img style="background: #4fd2b3;border-radius:50%;"
                 src="/static/images/header/tel.png"
                 alt="tel" /></span>
          {{$t('ItemView.contact')}}
          <label class="">
            <a href="">
              <span class="icon"><img src="/static/images/header/twitter.png"
                     alt="twitter" /></span>
            </a>
            <a href="">
              <span class="icon"><img src="/static/images/header/Reddit.png"
                     alt="reddit" /></span>
            </a>
            <a href="">
              <span class="icon"><img src="/static/images/header/Telegram.png"
                     alt="telegram" /></span>
            </a>
            <a href="">
              <span class="icon"><img src="/static/images/header/WeChat.png"
                     alt="wechat" /></span>
            </a>
            <a href="">
              <span class="icon"><img src="/static/images/header/weibo.png"
                     alt="weibo" /></span>
            </a>
          </label>
        </div>

      </div>

    </div>

    <section>
      <b-tabs v-model="activeTab">
        <b-tab-item :label="$t('ItemView.tabs.transaction.title')">
          <TransactionStatistics :itemId="id"
                                 :item="item" />
        </b-tab-item>

        <b-tab-item :label="$t('ItemView.tabs.player.title')">
          <PlayerStatistics :itemId="id" />
        </b-tab-item>

        <b-tab-item :label="$t('ItemView.tabs.contract.title')">
          <ContractList :itemId="id" />
        </b-tab-item>

        <b-tab-item :label="$t('ItemView.tabs.comment')">
          <Disqus :shortname="$config.disqus.shortname"
                  :identifier="'dapp-'+id"></Disqus>
        </b-tab-item>
      </b-tabs>
    </section>
  </main>

</template>

<script>
import { getItem } from '@/api';
import Disqus from 'vue-disqus/VueDisqus';
import TransactionStatistics from './TransactionStatistics';
import PlayerStatistics from './PlayerStatistics';
import ContractList from './ContractList';

export default {
  name: 'ItemView',

  components: {
    Disqus,
    TransactionStatistics,
    PlayerStatistics,
    ContractList,
  },

  data() {
    return {
      activeTab: 0,
      item: {},
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  async created() {
    this.item = await getItem(this.id);
  },

  methods: {},

  watch: {},
};
</script>

<style scoped>
.item-hero {
  width: 100vw;
  transform: translateX(-4rem);
}
.middle {
  background: #4fd2b3;
}
.content {
  background: #4fd2b3;
  padding: 6% 0 2% 12%;
  color: #fff;
  font-size: 0.8em;
  margin-bottom: 0;
}
h1 {
  color: #fff;
  font-weight: 700;
  font-size: 3em;
  display: inline;
}
label {
  display: inline-block;
  vertical-align: middle;
}
a {
  text-decoration: none;
  outline: none;
  color: #fff;
  cursor: pointer;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.category {
  display: inline-block;
  font-size: 1.2em;
  vertical-align: top;
  margin-left: 1.2em;
  padding: 0 0.8em;
  background: #fff;
  color: #4fd2b3;
}
.icon {
  margin: 0 0.1em;
}
.item {
  vertical-align: bottom;
  margin-right: 0.2em;
}
.item1 {
  vertical-align: top;
}
.tabs ul li {
  color: #fff;
  background: #4fd2b3;
}
.tabs {
  padding: 0.1em 12%;
}
.tabs li.is-active a {
  color: #fff;
  border-bottom-color: #000;
}
</style>
