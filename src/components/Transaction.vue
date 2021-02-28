<template>
  <div>
    <h3>Все сделки</h3>
    <Order v-for="i of 7" :key="i" />
  </div>
</template>

<script>
import Order from "./Order.vue";
export default {
  components: { Order },
  name: "Transaction",
};
</script>
<style lang="scss" scoped>
div {
  background-color: white;
  overflow: auto;
  h3 {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 1.3rem;
  }
}
</style>
