<template>
  <div class="workTime">
    <div>
      <img src="../assets/1.png" alt="1" />
      <p>Всего рабочее время</p>
      <p>250:50</p>
    </div>
    <div>
      <img src="../assets/2.png" alt="2" />
      <p>Текущий месяц</p>
      <p>19:00</p>
    </div>
    <div>
      <img src="../assets/3.png" alt="3" />
      <p>Текущая неделя</p>
      <p>50:50</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkTime",
};
</script>
<style lang="scss" scoped>
.workTime {
  display: flex;
  margin-top:100px;
  img {
    width: 70px;
  }
  div {
    margin: auto;
    text-align: center;
  }
}
</style>
