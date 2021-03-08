<template>
  <div>
    <h3>Сделки на сегодня</h3>
    <Order :transaction="transaction" v-for="transaction of transactions" :key="transaction.title" />
  </div>
</template>

<script>
import Order from "../transaction/Order";
export default {
  name: "TransactionDay",
  props: ['transactions'],
  components: { Order },
};
</script>
<style lang="scss" scoped>
div {
  background-color: white;
  overflow: auto;
  h3 {
    margin-top: 20px;
    font-size: 1.3rem;
    margin-left: 20px;
  }
}
</style>
