<template>
  <div class="referitem">
    <div><img src="./../assets/sklad.png" alt="1" /><a href="#">Склады</a></div>
    <div>
      <img src="./../assets/prodaj.png" alt="2" /><a href="#">Продажи</a>
    </div>
    <div>
      <img src="./../assets/plan.png" alt="3" /><a href="#">Планирование</a>
    </div>
    <div>
      <img src="./../assets/otchet.png" alt="4" /><a href="#">Отчёты</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Referitem",
};
</script>
<style lang="scss" scoped>
.referitem {
  margin-top: 20px;
  margin-left: 20px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  img {
    width: 50px;
    margin-right: 10px;
  }
}
</style>
