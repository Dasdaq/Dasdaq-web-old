<template>
  <main class="UserView">
    <div class="columns user-profile box">
      <div class="column is-one-quarter">
        <figure class="user-avatar image is-128x128">
          <img src="../../assets/avatar.png">
        </figure>
      </div>
      <div class="column">
        <ul class="user-infoList">
          <li v-for="key in ['address','balance','income']"
              :key="key">
            <span class="info-label">{{$t('UserView.'+key)}}:</span>
            <span class="info-content">{{user[key]}}</span>
          </li>
        </ul>
      </div>
    </div>

    <b-tabs class="box"
            v-model="activeTab">
      <b-tab-item :label="$t('UserView.tabs.playedDApps.title')">
        <b-table class=""
                 :data="playedDApps"
                 default-sort-direction="asc"
                 default-sort="income"
                 :mobile-cards="true">
          <template slot-scope="props">
            <b-table-column :label="$t('UserView.tabs.playedDApps.index')"
                            width="80">
              {{ props.index+1 }}
            </b-table-column>
            <b-table-column field="name"
                            :label="$t('UserView.tabs.playedDApps.name')">
              <router-link class="navbar-item"
                           :to="{ name: 'ItemView', params:{ id:props.row.id}}">
                {{ props.row.name }}</router-link>
            </b-table-column>
            <b-table-column field="income"
                            :label="$t('UserView.tabs.playedDApps.income')"
                            sortable>
              {{ props.row.income }}
            </b-table-column>
          </template>
        </b-table>
      </b-tab-item>

      <b-tab-item :label="$t('UserView.tabs.messageBoard.title')">
        <Disqus :shortname="$config.disqus.shortname"
                :identifier="'user-'+address"></Disqus>
      </b-tab-item>
    </b-tabs>
  </main>
</template>

<script>
import Disqus from 'vue-disqus/VueDisqus';
import { getUser } from '@/api';

export default {
  name: 'UserView',

  components: {
    Disqus,
  },

  data() {
    return {
      activeTab: 0,
      user: {},
    };
  },

  computed: {
    address() {
      return this.$route.params.address.toUpperCase();
    },
    playedDApps() {
      return this.user ? this.user.playedDApps : [];
    },
  },

  async created() {
    this.user = await getUser(this.address);
  },

  methods: {},

  watch: {},
};
</script>

<style scoped>
.UserView {
  /* margin-top: 2rem; */
}
.user-profile {
  margin-left: 0;
  margin-right: 0;
}

.user-avatar {
  margin: auto;
}
.user-infoList {
  margin-top: 10px;
  list-style-type: none;
}
.info-label {
  font-size: 15px;
  font-weight: 600;
  line-height: 36px;
  color: #444;
}
.info-content {
  color: #1a1a1a;
  font-size: 15px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
