<template>
  <layout-main>
    <Loader v-if="loading" />
    <div v-else>
    <div>
        <div class="scrndHeader">
        <h1>Отчётность</h1>
      </div>
      <div class="table">
        <div class="line">
          <h3>Наименование товара</h3>
          <h3>Дата сдачи</h3>
          <h3>Тип отчёта</h3>
          <h3>Прибыль</h3>
          <h3>Ответственный</h3>
        </div>
        <div class="line">
          <h4><router-link to="/reportdeal">1</router-link></h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
        </div>
      </div>
    </div>
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import Loader from "../components/Loader";

export default {
  name: "Reports",
  components: { Loader, LayoutMain },
};
</script>
<style lang="scss" scoped>
.scrndHeader {
    background-color: #fff;
    margin: 5px 0;
    padding: 10px;
}


    h2 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.4em;
    }
    .table {
      margin-top: 5px;
      padding: 30px;
      background-color: #fff;
      max-height: 60vh;
      overflow-y: auto;
      

      .line {
        display: flex;
        justify-content: space-around;
        h3{
            font-size: 1.4rem;
            text-align: center;
          width: 100%;
        }
        
         h4{
            
          text-align: center;
          width: 100%;
        }
        
    }
  }
</style>
