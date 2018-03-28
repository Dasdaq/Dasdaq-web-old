<template>
  <div class="GameRank">
    <div>
      <a href="www.cryptosanguo.pro" target="_blank"> {{$t('HomeView.adList.sanguo')}} - {{$t('HomeView.adList.sanguo-slogan')}} </a>
    </div>

    <b-table :data="item"
             :mobile-cards="true"
             default-sort-direction="desc">

      <template slot-scope="props">
        <b-table-column :label="$t('HomeView.appList.index')">
          {{ props.index + 1}}
        </b-table-column>

        <b-table-column field="title"
                        :label="$t('HomeView.appList.title')"
                        sortable>
          <router-link :to="{
                  name: 'ItemView',
                  params:{id: props.row.id}}">
            {{ props.row.title }}
          </router-link>
        </b-table-column>

        <b-table-column field="category"
                        :label="$t('HomeView.appList.category')"
                        sortable>
          {{ props.row.category.toUpperCase() }}
        </b-table-column>
        <b-table-column field="createdAt"
                        :label="$t('HomeView.appList.createdAt')"
                        sortable>
          {{ (new Date(props.row.createdAt)).toLocaleDateString() }}
        </b-table-column>
        <b-table-column v-for="key in
        ['balance','dauLastDay','volumeLastDay','volumeLastWeek','txLastDay','txLastWeek']"
                        :key="key"
                        :field="key"
                        :label="$t('HomeView.appList.'+key)"
                        numeric
                        sortable>
          {{ props.row[key] }}
        </b-table-column>
      </template>
    </b-table>




  </div>
</template>

<script>
export default {
  name: 'GameRank',
  components: {},
  props: ['item'],
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
.GameRank{
  font-size: 14px;
}
</style>
