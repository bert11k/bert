<template>
  <layout-main>
    <div class="scrndHeader">
      <div>
        <router-link class="btn" to="AddTransaction">Cоздать сделку</router-link>
      </div>
      <div>
        <router-link class="btn" to="addTask">Добавить задачу</router-link>
      </div>
    </div>
    <div class="workplacemanager">
      <Transaction />
      <Task />
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import Transaction from "../components/Transaction.vue";
import Task from "../components/Task.vue";

export default {
  name: "Workplace",
  components: { LayoutMain, Task, Transaction },
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
