<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div class="workplace" v-else>
        <TransactionDay :transactions="transactions"/>
        <Transaction :transactions="transactions"/>
        <Task :tasks="tasks"/>
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
import Loader from '../components/Loader'
export default {
  name: "Workplace",
  components: {Loader, LayoutMain, TransactionDay, Task, Transaction, Refer },
  data(){
    return{
      loading: true,
      transactions: null,
      tasks: null,
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchTransactions')
      await this.$store.dispatch('fetchTasks')
      this.transactions = this.$store.getters.getTransactions
      this.tasks = this.$store.getters.getTasks
    } catch (e) {
      this.$toast.error(e.message)
    } finally {
      this.loading = false
    }
  },
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
