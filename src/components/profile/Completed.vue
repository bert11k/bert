<template>
  <div>
    <h3 id="NameCompleted">Выполнение плана:</h3>
    <div class="completed">
      <p>План недели выполнен на: {{completed.perWeek}}%</p>
      <p>План за ноябрь выполнен на: {{completed.perMonth}}%</p>
      <p>Годовой план выполнен на: {{completed.perYear}}%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Completed",
  props: ['completed'],
};
</script>
<style lang="scss" scoped>
#NameCompleted {
  position: relative;
  top: 30px;
  left: 115px;
}
.completed {
  margin: auto;
  width: 80%;
  height: 150px;
  background-color: #c4c4c4;
  display: grid;
  grid-template-columns: 2fr 2fr;
  border-radius: 15px;
  margin-top: 50px;

  p {
    margin-left: 80px;
    margin-top: 20px;
  }
}
</style>
