<template>
  <layout-main>
    <div>
      <section>
        <TransactionDay />
        <Transaction />
        <Task /> 
        <Refer />
      </section>
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import TransactionDay from "../components/TransactionDay.vue";
import Task from "../components/Task.vue";
import Transaction from "../components/Transaction.vue";
import Refer from "../components/Refer.vue";
export default {
  name: "Workplace",
  components: { LayoutMain, TransactionDay, Task, Transaction, Refer },
};
</script>
<style lang="scss" scoped>
section{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin: 10px auto auto;
    
}
</style>
