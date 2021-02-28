<template>
  <div class="task">
    <p>15.11.2020 13:00</p>
    <a href="#">ООО Татнефть</a>
    <p>Связаться с клиентом: уточнить подробную информацию</p>
    <a id="call" href="tel:+222222">Позвонить</a>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
};
</script>
<style lang="scss" scoped>
.task {
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #c4c4c4;
  padding-top: 10px;
  padding-left: 20px;
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
