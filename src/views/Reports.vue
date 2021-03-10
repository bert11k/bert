<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div v-else>
      <div>
        <div class="scrndHeader">
          <h1>Отчётность</h1>
        </div>
        <div class="table">
          <div class="line">
            <h3>Наименование отчета</h3>
            <h3>Дата сдачи</h3>
            <h3>Тип отчёта</h3>
            <h3>Прибыль</h3>
            <h3>Ответственный</h3>
          </div>
          <div :key="report.key" class="line" v-for="report of reports">
            <h4>
              <router-link :to="'/reportperiod/' + report.workerKey + '/' + report.key">{{report.title}}</router-link>
            </h4>
            <h4>{{report.date}}</h4>
            <h4>{{report.type}}</h4>
            <h4>{{report.profit}}р.</h4>
            <h4>{{report.worker}}</h4>
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
        loading: true,
        reports: [],
      }
    },
    components: {Loader, LayoutMain},
    async mounted() {
      await this.$store.dispatch('fetchReports')
      this.reports = this.$store.getters.getReports
      this.loading = false
    },
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

      h3 {
        font-size: 1.4rem;
        text-align: center;
        width: 100%;
      }

      h4 {

        text-align: center;
        width: 100%;
      }
    }
  }
</style>
