<template>
  <main class="HomeView">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="animated bounceInDown box">
            <h1 class="title">
              <img src="../assets/heroLogo.png"
                   :alt="$t('HomeView.hero.title')" />
            </h1>
          </div>

          <h2 class="animated fadeIn subtitle home-hero">
            {{$t('HomeView.hero.subtitle')}}
          </h2>

          <router-link :to="{ name: 'ExploreView'}"
                       class="animated fadeIn is-outlined is-white button is-medium">
            {{$t('HomeView.hero.explore')}}
          </router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'HomeView',

  components: {},

  data() {
    return {};
  },

  computed: {},

  created() {},

  methods: {},

  watch: {},
};
</script>

<style scoped>
.HomeView {
  margin-top: 0;
}
.hero {
  width: 100vw;
  transform: translateX(-5%);
}
.hero .box {
  display: inline-block;
  padding: 2.5rem;
  border-radius: 32px;
  box-shadow: 0 20px 60px hsla(0, 0%, 4%, 0.05), 0 5px 10px hsla(0, 0%, 4%, 0.1),
    0 1px 1px hsla(0, 0%, 4%, 0.2);
}
.hero .title {
  color: #7957d5;
}
.button.is-white {
  border-color: #fff;
  color: #fff;
}
</style>
