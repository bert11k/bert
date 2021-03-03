<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div v-else>
      <div class="scrndHeader">
        <div>
          <router-link class="btn" to="AddTransaction">Создать сделку</router-link>
        </div>
        <div>
          <router-link class="btn" to="addTask">Добавить задачу</router-link>
        </div>
      </div>
      <div class="workplacemanager">
        <Transaction :transactions="transactions"/>
        <Task :tasks="tasks"/>
      </div>
    </div>

  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import Transaction from "../components/Transaction.vue";
import Task from "../components/Task.vue";
import Loader from '../components/Loader'

export default {
  name: "Workplace",
  data(){
    return{
      loading: true,
      transactions: null,
      tasks: null,
    }
  },
  components: {Loader, LayoutMain, Task, Transaction },
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
  }
};
</script>
<style lang="scss" scoped>
.workplacemanager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 35vh 50vh;
  grid-gap: 10px;
  margin: 10px auto auto;
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
