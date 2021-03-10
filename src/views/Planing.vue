<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="comp" v-else>
      <div class="scrndHeader">
        <h1>Планирование продаж</h1>
      </div>
      <Navigation :active="active" @click="changeActive"/>
      <div class="planing">
        <h3>Цель - <span @dblclick="changeble = true"  v-show="!changeble">{{active}}</span> <input type="text" @keyup.enter="changeble = false" v-model.trim="active" v-show="changeble"> рублей</h3>
        <div class="progress">
          <div class="done">
            Выполенено:<br/>
            125 000 руб.
          </div>
          <div class="stay">
            Осталось:<br/>
            125 000 руб.
          </div>
          <div class="completed">
            План выполнен на:<br/>
            50%
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'
  import Navigation from '../components/planning/Navigation'

  export default {
    name: 'Planing',
    data() {
      return {
        loading: true,
        active: 0,
        target: 10,
        changeble: false,
      }
    },
    methods: {
      changeActive(e) {
        if (e.target.dataset.idx) {
          this.active = +e.target.dataset.idx
        }
      },
    },
    components: {Navigation, Loader, MainLayout},
    async mounted() {
      this.loading = false
    },
    computed: {
      isManager() {
        return this.$store.getters.getUserData.position === 'Менеджер'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .comp {
    height: calc(100% - 36px);
  }

  .planing {
    background-color: #fff;
    margin-top: 5px;
    height: calc(100% - 174px);
    position: relative;
    padding: 10px;
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    div {
      text-align: center;
      font-size: 1.4rem;
      padding: 50px;
    }

    .done {
      background-color: #39a098;
      color: white;
    }

    .stay {
      background-color: #c4c4c4;
    }

    .completed {
      color: white;
      background-color: #374664;
    }
  }

</style>
