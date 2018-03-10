<template>
  <main class="ItemView">
    ItemView {{id}}

    <section>
      <b-tabs v-model="activeTab">
        <b-tab-item :label="$t('itemView.tabs.transaction')">
          Transaction
        </b-tab-item>

        <b-tab-item :label="$t('itemView.tabs.comment')">
          Comment
        </b-tab-item>

        <b-tab-item :label="$t('itemView.tabs.player')">
          Player
        </b-tab-item>

        <b-tab-item :label="$t('itemView.tabs.contract')">
          Contract
        </b-tab-item>
      </b-tabs>
    </section>

  </main>
</template>

<script>
export default {
  name: 'ItemView',

  components: {},

  data() {
    return {
      activeTab: 0,
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  created() {},

  methods: {},

  watch: {},
};
</script>

<style scoped>

</style>
