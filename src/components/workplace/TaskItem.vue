<template>
  <div class="task">
    <p>{{task.date}}</p>
    <p>{{task.title}}</p>
    <p>{{task.contact}}</p>
    <p>{{task.description}}</p>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ['task']
};
</script>
<style lang="scss" scoped>
.task {
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
  background-color: #c4c4c4;
  padding: 10px 10px 10px 20px;
  width: 90%;
  border-radius: 10px;

  a {
    font-size: 13px;
  }
  #call {
    display: flex;
    justify-content: right;
    margin-right: 10px;
  }
}
</style>
