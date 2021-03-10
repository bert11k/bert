<template>
  <main-layout>
    <Loader v-if="loading" />
  
      <div class="scrndHeader">
        <h1>Планирование продаж</h1>
        <div>
          <router-link class="btn" to="#"
            >Установить цель предприятия</router-link
          >
        </div>
      </div>
      <div class="planing">
        <div class="progress">
          <div class="done">
            Выполенено:<br />
            125 000 руб.
          </div>
          <div class="stay">
            Осталось:<br />
            125 000 руб.
          </div>
          <div class="completed">
            План выполнен на:<br />
            50%
          </div>
        </div>
      </div>

  </main-layout>
</template>

<script>
import MainLayout from "../layouts/LayoutMain";
import Loader from "../components/Loader";

export default {
  name: "Planing",
  data() {
    return {
      loading: true,
    };
  },
  components: { Loader, MainLayout },
  async mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.planing {
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
.progress {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 50px;
  div {
    text-align: center;
    font-size: 1.4rem;
    padding: 50px;
  }
  .done {
    background-color: #39a098;
  }
  .stay {
    background-color: #c4c4c4;
  }
  .completed {
    background-color: #374664;
  }
}
</style>
