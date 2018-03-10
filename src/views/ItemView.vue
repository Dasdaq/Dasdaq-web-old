<template>
  <main class="ItemView">
    ItemView {{id}}
  </main>
</template>

<script>
export default {
  name: 'ItemView',

  components: {},

  data() {
    return {};
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
