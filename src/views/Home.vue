<template>
  <div class="home">
    <AddWeight />
    <WeightHistory />
  </div>
</template>

<script>
import AddWeight from "../components/AddWeight";
import WeightHistory from "../components/WeightHistory";

export default {
  name: "Home",
  components: {
    AddWeight,
    WeightHistory
  }
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>
