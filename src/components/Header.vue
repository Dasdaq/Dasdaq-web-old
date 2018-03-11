<template>
  <header class="Header">
    <nav :class="['navbar',$route.name === 'HomeView' ? 'is-primary' : '']">
      <div class="navbar-brand">
        <router-link class="navbar-item"
                     :to="{ name: 'HomeView'}">
          <img v-if="$route.name === 'HomeView'"
               src="../assets/logo.png"
               :alt="$t('header.nav.siteName')" />
          <img v-else
               src="../assets/heroLogo.png"
               :alt="$t('header.nav.siteName')" />
        </router-link>

        <router-link class="navbar-item "
                     :to="{ name: 'ExploreView'}">
          <span class="icon">
            <i class="mdi mdi-compass"></i>
          </span>
          <span>{{$t('header.nav.explore')}}</span>
        </router-link>

        <router-link v-if="me"
                     class="navbar-item"
                     :to="{ name: 'UserView', params:{address: me.address}}">
          <span class="icon">
            <i class="mdi mdi-account-circle"></i>
          </span>
          <span>{{$t('header.nav.myPage')}}</span>

        </router-link>
        <a v-else
           class="navbar-item"
           @click="onSignIn">
          <span class="icon">
            <i class="mdi mdi-account-circle"></i>
          </span>
          <span>{{$t('header.nav.signIn')}}</span>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary"
                 target="_blank"
                 :href="$config.submitDappLink">
                <span class="icon is-left">
                  <i class="mdi mdi-plus-circle"></i>
                </span>
                <span>
                  {{$t('header.nav.submitApp')}}
                </span>
              </a>
            </p>
            <div class="control">
              <div class="select">
                <I18nSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import I18nSwitcher from '@/components/I18nSwitcher';

export default {
  name: 'Header',

  components: {
    I18nSwitcher,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(['me', 'signInError']),
  },

  created() {
    this.$store.dispatch('FETCH_ME');
  },

  methods: {
    onSignIn() {
      this.$dialog.alert(this.$t(`Error.${this.signInError}`));
    },
  },

  watch: {},
};
</script>

<style scoped>
.navbar.is-primary {
  box-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
