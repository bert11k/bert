<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="comp" v-else>
      <div class="scrndHeader">
        <h1>Планирование продаж</h1>
      </div>
      <Navigation :active="active" @click="changeActive"/>
      <div class="planing">
        <div>Цель - <span :contenteditable="isManager">9</span> рублей</div>
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
      }
    },
    methods: {
      changeActive(e) {
        if (e.target.dataset.idx) {
          this.active = +e.target.dataset.idx
        }
      }
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
