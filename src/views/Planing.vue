<template>
  <main-layout>
    <Loader v-if="loading" />
    <div class="scrndHeader">
        <h1>Планирование продаж</h1>
        <div>
          <router-link class="btn" to="#">Установить цель предприятия</router-link>
        </div>
      </div>
    <div class="planing">
      
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/LayoutMain";
import Loader from "../components/Loader";

export default {
  name: "Planing",
  data(){
    return{
      loading: true,
    }
  },
  components: { Loader, MainLayout },
  async mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.planing{
  background-color: #fff;
  margin-top: 5px;
  height: calc(100% - 195px);
}
.scrndHeader {
    background-color: #fff;
    margin: 5px 0;
    padding: 10px;
}
.btn {
      color: #5c6bd4;
      font-weight: bold;
      cursor: pointer;
    }
</style>
