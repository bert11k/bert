<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div v-else>
      <div class="scrndHeader">
        <div>
          <router-link class="btn" to="/addTransaction">Создать сделку</router-link>
        </div>
        <div>
          <router-link class="btn" to="/addTask">Добавить задачу</router-link>
        </div>
      </div>
      <div class="workplacemanager">
        <Transaction :transactions="transactions"/>
        <Task :tasks="tasks" @deleteTask="deleteTask"/>
        <CompleteTransaction :transactions="completedTransactions"/>
      </div>
    </div>

  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import Transaction from "../components/workplace/Transaction.vue";
import Task from "../components/workplace/Task.vue";
import Loader from '../components/Loader'
import CompleteTransaction from "../components/workplace/CompleteTransaction.vue";

export default {
  name: "Workplace",
  data(){
    return{
      loading: true,
      transactions: null,
      tasks: null,
      completedTransactions: null,
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
  components: {Loader, LayoutMain, Task, Transaction, CompleteTransaction},
  async mounted() {
    try {
      await this.$store.dispatch('fetchAllTransactions')
      await this.$store.dispatch('fetchCompleteTransactions')
      await this.$store.dispatch('fetchTasks')
      this.transactions = this.$store.getters.getTransactions
      this.completedTransactions = this.$store.getters.getCompleteTransactions
      this.tasks = this.$store.getters.getTasks
    } catch (e) {
      this.$toast.error(e.message)
    } finally {
      this.loading = false
    }
  }
};
</script>
<style lang="scss" scoped>
.workplacemanager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 35vh 50vh;
  grid-gap: 10px;
  margin: 5px auto auto;
}
.scrndHeader {
    display: flex;
    background-color: #fff;
    gap: 15px;
    margin: 5px 0;
    padding: 10px;

    .btn {
      color: #5c6bd4;
      font-weight: bold;
      cursor: pointer;
    }
  }
</style>
