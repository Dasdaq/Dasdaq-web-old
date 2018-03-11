<template>
  <div id="app">
    <Header />
    <router-view class="view"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  computed: {},
};
</script>

<style>
html,
body {
  height: 100%;
  background: #F1F1F1;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.view {
  flex-grow: 1;
  margin: 3% 5% 0% 5%;
}
</style>
