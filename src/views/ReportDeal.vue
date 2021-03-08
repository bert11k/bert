<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="reportdeal" v-else>
      <div class="textinformation">
        <div id="print">
          <p>Закзчик: ООО ТРАНСНЕФТЬ</p>
          <p>Дата подачи сделки: 24.02.2021</p>
          <p>Дата окончания сделки: 25.02.2021</p>
          <p>Наименование проданного товара: Бензин</p>
          <p>Количество проданного товара: 20т</p>
          <p>Ответственный сотрудник за сделку: Каримов</p>
          <p>Цена за 1 тонну товара: 54 600р</p>
          <p>Конечная цена за продажу: 1 000 000р</p>
        </div>

        <br>
        <button @click="print">Распечатать</button>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'

  export default {
    name: 'ReportDeal',
    components: {Loader, MainLayout},
    methods: {
      print() {
        this.$htmlToPaper('print')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reportdeal {
    margin-top: 10px;
    background-color: #fff;
    padding: 30px;

    .textinformation {
      font-size: 1.5rem;
      line-height: 50px;
    }
  }

  button {
    width: 225px;
    margin: 5px 5px;
    height: 35px;
    cursor: pointer;
    background-color: #39A098;
    border: 0;
  }
</style>
