<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="comp" v-else>
      <div class="scrndHeader">
        <h1>Планирование продаж</h1>
      </div>
      <Navigation :active="active" @click="changeActive"/>
      <div class="planing">
        <h3>Цель - <span @dblclick="changeble = true" v-show="!changeble">{{target}}</span> <input @keyup.enter="changeTarget"
                                                                                                   type="text"
                                                                                                   v-model.trim="target"
                                                                                                   v-show="changeble">
          рублей</h3>
        <Graphs/>
        <Progress/>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'
  import Navigation from '../components/planning/Navigation'
  import Progress from '../components/planning/Progress'
  import Graphs from '../components/planning/Graphs'

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
      changeTarget() {
        if (this.target > 0) {
          this.changeble = false
        } else {
          this.$toast.error('Цель должна быть больше нуля')
        }
      }
    },
    components: {Graphs, Progress, Navigation, Loader, MainLayout},
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

    .planing {
      background-color: #fff;
      margin-top: 5px;
      height: calc(100% - 174px);
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
  }

</style>
