<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div v-else>
      <div>
        <div class="scrndHeader">
          <h1>Сделки за текущий отчет</h1>
        </div>
        <div class="table">
          <div class="line">
            <h3>Наименование</h3>
            <h3>Оргазнизация</h3>
            <h3>Дата открытия</h3>
            <h3>Предмет договора</h3>
            <h3>Прибыль</h3>
          </div>
          <div :key="deal.key" class="line" v-for="deal of deals">
            <h4>
              <router-link :to="'/reportdeal/'+deal.key ">{{deal.title}}</router-link>
            </h4>
            <h4>{{deal.customer}}</h4>
            <h4>{{deal.date}}</h4>
            <div>
              <h4 :key="subj.title" v-for="subj of deal.subjects">{{subj.title}}</h4>
            </div>
            <h4>{{deal.profit}}р.</h4>
          </div>
        </div>
      </div>
    </div>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import Loader from '../components/Loader'

  export default {
    name: 'Reports',
    data() {
      return {
        deals: [],
        loading: true,
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchReportDeals', this.$route.params)
      this.deals = this.$store.getters.getReportDeals
      this.deals = this.deals.map(deal => {
        let profit = 0
        deal.subjects.forEach(subj => profit += subj.sum)
        return {...deal, profit}
      })
      this.loading = false
    },
    components: {Loader, LayoutMain},
  }
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
      padding: 5px 0;
      border-bottom: 1px solid black;

      div{
        width: 100%;
      }

      h3 {
        font-size: 1.4rem;
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
      }

      h4 {
        text-align: center;
        width: 100%;
      }
    }
  }
</style>
