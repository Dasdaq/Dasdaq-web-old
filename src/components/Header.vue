<template>
  <header class="Header">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item"
                     :to="{ name: 'HomeView'}">
          <img src="../assets/logo.png"
               :alt="$t('header.nav.siteName')" />
        </router-link>
        <router-link v-if="!me"
                     class="navbar-item"
                     :to="{ name: 'Login'}">
          <img src="../assets/avatar.png" /> &nbsp;{{$t('header.nav.signIn')}}
        </router-link>
        <router-link v-else
                     class="navbar-item"
                     :to="{ name: 'UserView', params:{ address: me.address }}">
          <img src="../assets/avatar.png" /> &nbsp;{{$t('header.nav.myPage')}}
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary"
                 target="_blank"
                 :href="$config.submitDappLink">
                {{$t('header.nav.submitApp')}}
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
    ...mapState(['me']),
  },

  created() {},

  methods: {},

  watch: {},
};
</script>

<style scoped>

</style>
