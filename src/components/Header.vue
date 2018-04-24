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
               <span class="tag">Beta</span>
        </router-link>
        <router-link class="navbar-item "
                     :to="{ name: 'ExploreView'}">
          <span class="icon">
            <i class="mdi mdi-compass"></i>
          </span>
          <span>{{$t('header.nav.explore')}}</span>
        </router-link>

        <router-link class="navbar-item "
                     :to="{ name: 'HeadLineView'}">
          <span class="icon">
            <i class="mdi mdi-compass"></i>
          </span>
          <span>{{$t('header.nav.headLine')}}</span>
        </router-link>

        <a class="navbar-item"
                 target="_blank"
                 :href="$t('config.submitAppUrl')">
                <span class="icon is-left">
                  <i class="mdi mdi-plus-circle"></i>
                </span>
                <span>
                  {{$t('header.nav.submitApp')}}
                </span>
        </a>
          <router-link class="navbar-item "
                     :to="{ name: 'uploadToBlockchain'}">
                <span class="icon is-left">
                  <i class="mdi mdi-upload"></i>
                </span>
                <span>
                  {{$t('header.nav.OneClickToBlockchain')}}
                </span>
                <span class="tag is-danger">
                  Beta
                </span>
          </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">

            </p>
            <p class="control">
              <router-link v-if="me"
                     class=""
                     :to="{ name: 'UserView', params:{address: me.address}}">
                     <img :src="getAvatar" class="avatar" />
                     <span class="info">
                     <p> {{getBalance}} ETH </p>
                     <p> {{getNetwork}}</p>
                     </span>

                     </router-link>
              <a v-else
                class="button is-primary" @click="onSignIn">
                <span class="icon is-left">
                  <i class="mdi mdi-account-circle"></i>
                </span>
                <span>{{$t('header.nav.signIn')}}</span>
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
import Dravatar from 'dravatar';
import { getNetwork as network } from '@/api';

export default {
  name: 'Header',
  asyncComputed: {
    async getAvatar() {
      const uri = await Dravatar(this.me.address);
      return uri;
    },
  },
  components: {
    I18nSwitcher,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(['me', 'signInError']),
    getBalance() {
      const weiToEth = wei => wei / 1000000000000000000;
      return weiToEth(this.me.balance).toFixed(2);
    },
    getNetwork() {
      return network.name;
    },
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
.avatar {
  border-radius: 100%;
  margin-right: 5px;
  max-height: 3rem;
  float: left;
}
.is-primary .info {
  color: white;
}
.info {
  float: left;
}
</style>
