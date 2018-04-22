<template>
  <main class="ItemView">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns is-desktop">
          <div class="column is-three-quarters-desktop is-two-thirds-tablet">
            <h1 class="title">{{item.title}}</h1>
            <span class="item-category tag is-warning
                        is-uppercase is-medium">{{item.category}}</span>
          </div>
          <div class="column item-siteBtnWrapper">
            <a class="button is-primary is-inverted is-outlined"
               target="_blank"
               :href="item.url">
              {{$t('ItemView.dAppSite')}}</a>
          </div>
        </div>

        <h2 v-if="false"
            class="subtitle">
          Primary bold subtitle
        </h2>

        <div class="info-item">
          <span class="icon info-icon">
            <img style="border-radius:50%;"
                 src="/static/images/header/time.png"
                 alt="time" />
          </span>
          <span class="info-title">{{$t('ItemView.publishDate')}}</span>
          <span class="info-content">{{item.createdAt}}</span>
        </div>

        <div class="info-item">
          <span class="icon info-icon">
            <img style="border-radius:50%;"
                 src="/static/images/header/tel.png"
                 alt="time" />
          </span>
          <span class="info-title">{{$t('ItemView.contact')}}</span>
          <span class="info-content">
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
          </span>
        </div>
      </div>
    </section>
    <br/>

    <div>
      <a class="item-ad-title" href="http://www.bitsoccer.io/" target="_blank">
        * {{$t('HomeView.adList.sanguo')}} - {{$t('HomeView.adList.sanguo-slogan')}}
      </a>
    </div>

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
.ItemView {
  margin-top: 0;
}
.hero {
  width: 100vw;
  transform: translateX(-5%);
}
.hero-body {
  padding: 3rem 5%;
}
.item-siteBtnWrapper {
  text-align: right;
}
.item-category {
  position: relative;
  top: -1.5em;
  left: 1em;
}
.info-item {
  margin: 0.6em;
}
.info-icon {
  vertical-align: middle;
}
.info-title {
  vertical-align: middle;
  margin-left: 0.2em;
}
.title {
  font-weight: 700;
  font-size: 3em;
  display: inline;
}
label {
  display: inline-block;
  vertical-align: middle;
}
</style>
