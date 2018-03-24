<template>
  <footer class="Footer">
    <div class="columns">
      <div class="has-text-left column">
        {{$t('footer.blogroll')}}
        <a href="http://luckyeth.io" class="icon" style="vertical-align:middle">
          <img src="/static/images/header/luckyeth.png" alt="luckyeth" /></a>
        <a href="http://luckyeth.io" >{{$t('blogroll.luckyeth')}}</a>
      </div>
      <div class="content has-text-centered column">
        <p>
          <small>
            All rights reserved. <br> &copy; Copyright 2018
            <strong>DapDap</strong>
          </small>
        </p>
      </div>
      <div class="has-text-right column">
        <a href="mailto:www.dapdap.io@gmail.com" class="icon">
          <img src="/static/images/header/gmail.png" alt="gmail" /></a>
        <a href="https://jq.qq.com/?_wv=1027&k=5e9frrq" class="icon">
          <img src="/static/images/header/qq.png" alt="qq" /></a>
      </div>
      
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  components: {},

  data() {
    return {};
  },

  computed: {},

  created() {},

  methods: {},

  watch: {},

  shareout(){

  }
};
</script>

<style scoped>
.Footer {
  padding: 2vw;
}
</style>
