<template>
  <div>
    <h3>Все сделки</h3>
    <Order :transaction="transaction" v-for="transaction of transactions" :key="transaction.title" />
  </div>
</template>

<script>
import Order from "../transaction/Order.vue";
export default {
  name: "Transaction",
  props: ['transactions'],
  components: { Order },
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
