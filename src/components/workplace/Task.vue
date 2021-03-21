<template>
  <div class="taskdiv">
    <h3>Задачи</h3>
    <TaskItem @deleteTask="deleteTask" :task="i" v-for="i of tasks" :key="i.title" />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  name: "Task",
  props:['tasks'],
  components: { TaskItem },
  methods:{
    deleteTask(key) {
      this.$emit('deleteTask', key)
    },
  },
  emits: ['deleteTask'],
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
