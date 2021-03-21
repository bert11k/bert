<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div class="workplace" v-else>
        <TransactionDay :transactions="transactions"/>
        <Transaction :transactions="transactions"/>
        <Task @deleteTask="deleteTask" :tasks="tasks"/>
        <Refer />
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import TransactionDay from "../components/workplace/TransactionDay.vue";
import Task from "../components/workplace/Task.vue";
import Transaction from "../components/workplace/Transaction.vue";
import Refer from "../components/workplace/Refer.vue";
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
  methods:{
    async deleteTask(key){
      try{
        await this.$store.dispatch('deleteTask', key)
        this.$toast.success('Удалено')
      }catch (e) {
        this.$toast.error(e.message)
      } finally {
        this.tasks = await this.$store.getters.getTasks
      }

    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchTransactions')
      await this.$store.dispatch('fetchTasks')
      this.transactions = this.$store.getters.getNotCompleteTransactions
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
    margin: 5px auto auto;
}
</style>
