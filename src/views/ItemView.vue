<template>
  <main class="ItemView">

     <div class="middle">
    <div class="content">
      <div class="columns is-desktop">
        <div class="column is-three-quarters-desktop is-two-thirds-tablet">
          <h1>ForkDelta</h1><span class="category">游戏</span>
        </div>
        <div class="column">
          <a class="button is-primary is-inverted is-outlined">平台官网</a>
        </div>
      </div>
      <p>
        <span class="icon item"><img style="background: #4fd2b3;border-radius:50%;" src="../../static/images/header/time.png" alt="time" /></span>
        上线时间：<span>2017-8-29</span>
      </p>
      <div class="">
        <span class="icon item1 item"><img style="background: #4fd2b3;border-radius:50%;" src="../../static/images/header/tel.png" alt="tel" /></span>
        联系方式：
        <label class="">
          <a href=""><span class="icon"><img src="../../static/images/header/twitter.png" alt="twitter" /></span></a>
          <a href=""><span class="icon"><img src="../../static/images/header/Reddit.png" alt="reddit" /></span></a>
          <a href=""><span class="icon"><img src="../../static/images/header/Telegram.png" alt="telegram" /></span></a>
          <a href=""><span class="icon"><img src="../../static/images/header/WeChat.png" alt="wechat" /></span></a>
          <a href=""><span class="icon"><img src="../../static/images/header/weibo.png" alt="weibo" /></span></a>
        </label>
      </div>
      
    </div>
    
  </div>
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
          <ContractList :itemId="id" />
        </b-tab-item>
      </b-tabs>
    </section>
  </main>
  
</template>

<script>
import Disqus from 'vue-disqus/VueDisqus';
import TransactionStatistics from '@/components/TransactionStatistics';
import PlayerStatistics from '@/components/PlayerStatistics';
import ContractList from '@/components/ItemView/ContractList';

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
  .middle{
    background:#4fd2b3;
  }
  .content{
    background:#4fd2b3;
    padding:6% 0 1% 12%;
    color:#fff;
    font-size:.8em;
    margin-bottom: 0; 
  }
  h1{
    color:#fff;
    font-weight: 700;
    font-size:3em;
    display: inline;
  }
  label{
    display: inline-block;
    vertical-align: middle;
  }
  a{
     text-decoration:none;
     outline: none;
     color:#fff;
     cursor: pointer;
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #fff;
  }
  .category{
    display: inline-block;
    font-size:.5em;
    vertical-align: top;
    margin-left:1.2em;
    padding:0 .8em;
    background:#fff;
    color:#4fd2b3; 
    
  }
  .icon{
    margin:0 .1em;
  }
  .item{
    vertical-align: bottom;
    margin-right: .2em;
  }
  .item1{
    vertical-align: top;
  }
  .tabs ul li{
    color:#fff;
    background: #4fd2b3;
  }
  .tabs {
    padding:.1em 12%;
  }
  .tabs li.is-active a{
    color:#fff;
    border-bottom-color:#000;
  }
</style>
