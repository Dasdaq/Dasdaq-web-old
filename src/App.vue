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

<style lang="scss">

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #096dd9;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
//    "white": ($white, $black),
//    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

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
