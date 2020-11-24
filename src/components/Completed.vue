<template>
  <div>
    <h3 id="NameCompleted">Выполнение плана:</h3>
    <div class="completed">
      <p>План недели выполнен на: 85%</p>
      <p>Квартальный план выполнен на: 55%</p>

      <p>План за ноябрь выполнен на: 70%</p>
      <p>Годовой план выполнен на: 70%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Completed",
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
