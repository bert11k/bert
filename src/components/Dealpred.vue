<template>
  <div class="dealtovar">
    <h2>Предмет договора</h2>
    <div class="table">
      <div class="line">
        <h3>Наименование товара</h3>
        <h3>Количество</h3>
        <h3>Стоимость</h3>
      </div>
      <div :key="subject.title" class="line" v-for="subject of subjects">
        <h4>{{subject.title}}</h4>
        <h4>{{subject.num}}</h4>
        <h4>{{subject.sum}}р.</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dealpred',
    props: ['subjects'],
  }
</script>
<style lang="scss" scoped>
  .dealtovar {
    background-color: #C4C4C4;
    width: 70%;
    margin-left: 50px;
    margin-top: 50px;
    padding: 15px;

    h2 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.4em;
    }
    .table {
      margin-top: 5px;
      padding: 5px;

      .line {
        display: flex;
        justify-content: space-around;
        h3, h4{
          text-align: center;
          width: 100%;
        }
      }
    }
  }


</style>
