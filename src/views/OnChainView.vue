<template>
<div id="on-chain" class="container">
    <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Point Card Redeem
      </h1>
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
        Success!
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
            <textarea id="public-key" class="textarea is-primary"
            type="text" placeholder="Public Key:">
            </textarea>
       </div>
       <div class="control">
            <textarea id="private-key" class="textarea is-primary"
            type="text" placeholder="Private Key:">
            </textarea>
       </div>  
       <div class="control">
            <textarea id="tx" class="textarea is-primary"
            type="text" placeholder="tx:">
            </textarea>
       </div>             
        </div>
        <div class="field is-grouped">
    <div class="control">
        <button class="button is-primary" @click="submitMsg">Redeem</button>
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
      const result = await request.get(`http://47.75.69.142:5000/new`);
      console.log(result.data);
      const pri = result.data["private key"];
      const add = result.data[`address`];
      const tx = result.data.tx;
      this.result = result;
    //    console.log($('tx')[0]);    
      console.log( document.getElementById("public-key"));
 document.getElementById("public-key").value = add;
        document.getElementById("private-key").value= pri; 
        document.getElementById('tx').value = "https://kovan.etherscan.io/tx/" + tx; 

      if (result.ok === 1) { 
   //     console.log($('tx')[0]);    
//        console.log(result);
      } else {
  //      console.error(result.msg);
      }

    },
  },
};
</script>
