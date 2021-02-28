<template>
  <layout-main>
    <div class="workplace">
    
        <TransactionDay />
        <Transaction />
        <Task /> 
        <Refer />
  
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
.workplace{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 35vh 50vh;
    grid-gap: 10px;
    margin: 10px auto auto;
    
}
</style>
