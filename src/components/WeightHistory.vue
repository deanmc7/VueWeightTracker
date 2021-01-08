<template>
  <div class="container">
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Weight History</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head>Date</md-table-head>
        <md-table-head md-numeric>Stone</md-table-head>
        <md-table-head md-numeric>Pounds</md-table-head>
      </md-table-row>

      <md-table-row v-for="weight in allWeights" :key="weight.date">
        <md-table-cell>{{ weight.date }}</md-table-cell>
        <md-table-cell md-numeric>{{ weight.stone }}</md-table-cell>
        <md-table-cell md-numeric>{{ weight.pound }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WeightHistory",
  computed: mapGetters(["allWeights"])
};
</script>

<style scoped>
.container {
  padding-left: 10px;
  padding-right: 10px;
  width: 60%;
}
</style>
