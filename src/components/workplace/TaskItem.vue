<template>
  <div class="task">
    <p class="fLine">{{task.date}} <span @click="deleteTask">&times;</span></p>
    <p>Для связи:{{task.contact}}</p>
    <p>{{task.title}}</p>
    <p>{{task.description}}</p>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  methods:{
    deleteTask(){
      this.$emit('deleteTask', this.task.key)
    },
  },
  props: ['task'],
  emits: ['deleteTask'],
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

  .fLine{
    display: flex;
    justify-content: space-between;
    line-height: 1.3rem;

    span{
      cursor: pointer;
      font-size: 1.3rem;
    }
  }

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
