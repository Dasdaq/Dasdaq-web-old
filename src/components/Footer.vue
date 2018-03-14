<template>
  <footer class="Footer">
    <div class="container">
      <div class="content has-text-centered">
        <a href="mailto:www.dapdap.io@gmail.com">{{$t('footer.contact')}}</a>
        <p>
          <small>
            All rights reserved. <br> &copy; Copyright 2018
            <strong>DapDap</strong>
          </small>
        </p>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

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
.Footer {
  padding: 2vw;
}
</style>
