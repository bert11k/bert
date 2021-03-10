<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="scrndHeader">
      <h1>Планирование продаж</h1>
    </div>
    <Navigation />
    <div class="planing">
      <div>Цель - <span :contenteditable="isManager">9</span> рублей</div>
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
