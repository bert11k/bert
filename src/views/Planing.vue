<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="comp" v-else>
      <div class="scrndHeader">
        <h1>Планирование продаж</h1>
      </div>
      <Navigation :active="active" @click="changeActive"/>
      <div class="planing">
        <h3>Цель - <span @dblclick="showInput" v-show="!changeble">{{target}}</span> <input @keyup.enter="changeTarget"
                                                                                            type="text"
                                                                                            v-model.trim="target"
                                                                                            v-show="changeble">
          рублей</h3>
        <Graphs :dealers="dealers" :targets="dealerTarget"/>
        <Progress :planData="planData"/>
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
        dealers: [],
        dealerTarget: '',
        changeble: false,
        planData: {
          planCompleted: 0,
          planCompletedPercentage: 0,
          planNeed: 0,
        },
      }
    },
    methods: {
      async changeActive(e) {
        if (e.target.dataset.idx) {
          this.active = +e.target.dataset.idx
          this.fetchData()
        }
      },
      async changeTarget() {
        if (this.target > 0) {
          this.loading = true
          await this.$store.dispatch('createPlaningTarget', {target: this.target, type: this.active})
          this.target = this.$store.getters.getPlanTarget
          this.changeble = this.loading = false
          this.dealerTarget = Math.round(this.target / this.dealers.length)
          this.$toast.success('Сохранено')
          this.fetchData()
        } else {
          this.$toast.error('Цель должна быть больше нуля')
        }
      },
      showInput() {
        if (this.$store.getters.getUserData.position === 'Менеджер') {
          this.changeble = true
        }
      },
      async fetchData() {
        this.loading = true
        if (this.active === 0) {
          await this.$store.dispatch('fetchDealersStatisticPerYear', {update: true})
        } else if (this.active === 1) {
          await this.$store.dispatch('fetchDealersStatisticPerMonth', {update: true})
        } else {
          await this.$store.dispatch('fetchDealersStatisticPerWeek', {update: true})
        }
        await this.$store.dispatch('fetchTarget', this.active)
        this.target = this.$store.getters.getPlanTarget
        this.dealers = this.$store.getters.getDealers
        this.dealerTarget = Math.round(this.target / this.dealers.length)
        this.planComplete()
        this.loading = false
      },
      planComplete() {
        this.planData.planCompletedPercentage = this.planData.planNeed = this.planData.planCompleted = 0
        this.dealers.forEach(dealer => {
          this.planData.planCompleted += dealer.profit
        })
        this.planData.planNeed = +this.target - +this.planData.planCompleted
        if (this.planData.planNeed < 0) this.planData.planNeed = 0
        this.planData.planCompletedPercentage = Math.round(+this.planData.planCompleted / +this.target * 100)
      }
    },
    components: {Graphs, Progress, Navigation, Loader, MainLayout},
    async mounted() {
      this.fetchData()
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
