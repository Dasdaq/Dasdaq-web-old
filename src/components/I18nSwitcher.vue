<template>
  <div class="I18nSwitcher">
    <p class="control has-icons-left">
      <span class="select">
        <select v-model="locale">
          <option v-for="(item) in $config.i18n"
                  :key="item.locale"
                  :value="item.locale">
            {{item.langDisplay}}</option>
        </select>
      </span>
      <span class="icon is-left">
        <i class="mdi mdi-earth"></i>
      </span>
    </p>
  </div>

</template>

<script>
export default {
  name: 'I18nSwitcher',

  computed: {
    locale: {
      get() {
        return this.$store.state.locale;
      },
      set(value) {
        this.$store.dispatch('setLocale', value);
      },
    },
  },

  created() {
    this.$store.dispatch('initLocale');
  },

  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>
