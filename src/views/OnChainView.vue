<template>
<div id="on-chain" class="container">
    <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        一键上链服务
      </h1>
      <figure class="image">
      <img src="https://ws1.sinaimg.cn/large/006tKfTcgy1fqo5xgdrfaj31kw0w10ux.jpg" alt="">
    </figure>
      <h2 class="subtitle">
        雷猴，我系 Ethereum Evergarden，你的区块链信使。有什么要我帮忙传达给全世界吗？我们提供信息一键上链服务！
      </h2>
    </div>
  </div>
</section>
<div id="result" class="field" v-if="result">
<section class="hero is-primary" v-if="isOK">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        上链成功
      </h1>
      <h2 class="subtitle">
        你的消息已经成功上链，以太坊交易流水号
        <a :href="getEtherScanUrl">{{result.tx}}</a>

      </h2>
    </div>
  </div>
</section>
<section class="hero is-danger" v-else>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        上链失败
      </h1>
      <h2 class="subtitle">
        {{result.msg}}
      </h2>
    </div>
  </div>
</section>

</div>

    <div class="field">
        <div class="control">
            <textarea class="textarea is-primary"
            v-model="inputData"
            type="text" placeholder="把你想说的话写在这里吧">
            </textarea>
    </div>
        </div>
        <div class="field is-grouped">
    <div class="control">
        <button class="button is-primary" @click="submitMsg">提交</button>
    </div>
    <div class="control">
        <button class="button is-danger">清空</button>
    </div>
    </div>

</div>
</template>

<script>
import request from 'axios';

export default {
  name: 'OnChainView',
  data() {
    return {
      inputData: '',
      result: null,
    };
  },
  computed: {
    isOK() {
      return this.result.ok === 1;
    },
    getEtherScanUrl() {
      const tx = this.result.tx;
      return `http://ropsten.etherscan.io/tx/${tx}`;
    },
  },
  methods: {
    async submitMsg() {
      const str = this.inputData;
      const result = await request.get(`http://api.dapdap.io/write/${str}`);
      const payload = result.data;
      this.result = payload;
      if (payload.ok === 1) {
        console.log(payload);
      } else {
        console.error(payload.msg);
      }
    },
  },
};
</script>
