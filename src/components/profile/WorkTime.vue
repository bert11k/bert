<template>
  <div class="workTime">
    <div>
      <img src="../../assets/1.png" alt="1" />
      <p>Всего рабочее время</p>
      <p>40ч</p>
    </div>
    <div>
      <img src="../../assets/2.png" alt="2" />
      <p>Текущий месяц</p>
      <p>{{(new Date()).toLocaleString('ru-RU', {month: 'long'})}}</p>
    </div>
    <div>
      <img src="../../assets/3.png" alt="3" />
      <p>Текущая неделя:</p>
      <p>{{(new Date()).toLocaleString('ru-RU', {weekday: 'long'})}}</p>
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
