<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
export default {
  name: "GameRank",
  components: {},
  
  data() {
    return {
      data: [
        {
          id: 1,
          player_address: "Jesse",
          profitablity: "Simmons",
          profit_game: "Cryptkitties",
        },
        {
          id: 2,
          player_address: "Jesse",
          profitablity: "Simmons",
          profit_game: "Cryptkitties",
 
        },
        {
          id: 3,
          player_address: "Jesse",
          profitablity: "Simmons",
          profit_game: "Cryptkitties",

        },
        {
          id: 4,
          player_address: "Jesse",
          profitablity: "Simmons",
          profit_game: "Cryptkitties",

        },
        {
          id: 5,
          player_address: "Jesse",
          profitablity: "Simmons",
          profit_game: "Cryptkitties",

        }
      ],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "player_address",
          label: "玩家地址"
        },
        {
          field: "profitablity",
          label: "盈利情况"
        },
        {
          field: "profit_game",
          label: "盈利最多游戏",
          centered: true
        },
      ]
    };
  },

  computed: {},

  created() {},

  methods: {},

  watch: {}
};
</script>