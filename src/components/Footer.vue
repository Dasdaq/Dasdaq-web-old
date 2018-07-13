<template>
  <footer class="Footer">
    <div class="columns">
      <div class="has-text-left column">
        <!-- {{$t('footer.blogroll')}} -->
      </div>
      <div class="content has-text-centered column">
        <h1 class="title">Dasdaq</h1>
        <p>
          <small>
            All rights reserved. <br> 
            &copy; Dasdaq Copyright 2018
          </small>
        </p>
      </div>
      <div class="has-text-right column">
        <h1>我们的社区</h1>
        <a :href="contact.url" v-for="contact in contacts" :key="contact">
          <i :class="getIconName(contact)"></i>
          </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  components: {},

  data() {
    return {
      contacts: [
        {
          way: 'email',
          url: 'mailto:www.Dasdaq.io@gmail.com',
        },
        {
          way: 'qqchat',
          url: 'https://jq.qq.com/?_wv=1027&k=5e9frrq',
        },
        {
          way: 'telegram',
          url: 'https://t.me/joinchat/CWXWGxEc4QOpJ7N2b7FuFg',
        },
        {
          way: 'discord',
          url: 'https://discord.gg/7Jtpkwr',
        },
      ],
    };
  },

  computed: {},

  created() {},

  methods: {
    getIconName({ way, url }) {
      return `mdi mdi-${way}`;
    },
  },

  watch: {},

  shareout() {},
};
</script>

<style scoped>
.Footer {
  padding: 2vw;
}
.mdi {
  font-size: 3rem;
}
</style>