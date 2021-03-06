// https://vuex.vuejs.org/en/mutations.html

// The only way to actually change state in a Vuex store is by committing a mutation.

// You cannot directly call a mutation handler.
// Think of it more like event registration: "When a mutation with type increment is triggered,
// call this handler." To invoke a mutation handler, you need to call store.commit with its type.

// Mutation handler functions must be synchronous
// One important rule to remember is that mutation handler functions must be synchronous.

// Using Constants for Mutation Types
// import * as types from './mutation-types';
import { i18n } from '@/config';

export default {
  setLocale(state, locale) {
    const isValid = i18n.some(item => (item.locale === locale));
    if (isValid) state.locale = locale;
    else throw Error('INVALID_LOCALE');
  },
  SET_ME(state, me) {
    state.me = me;
  },
  SET_SIGN_IN_ERROR(state, error) {
    state.signInError = error;
  },
  /* Examples:
  [types.ADD_TO_CART](state, payload) {
    state.cart.push(payload);
  },
  // this.$store.commit(types.ADD_TO_CART, product);

  increment(state) {
    state.count++;
  },
  // this.$store.commit('increment');
  */
};
