<template>
  <div class="taskdiv">
    <h3>Задачи</h3>
    <TaskItem v-for="i of 5" :key="i" />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  components: { TaskItem },
  name: "Task",
};
</script>
<style lang="scss" scoped>
.taskdiv {
  
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 100%;
  background-color: white;
  h3 {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 1.3rem;
  }
}
</style>
