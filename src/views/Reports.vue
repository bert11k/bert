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
            <h3 @click="sortTitle" data-idx="0">Наименование отчета <span
                :class="{opened: +sorted[0] === 1 }">&triangledown; </span></h3>
            <h3 @click="sortDate" data-idx="1">Дата сдачи <span :class="{opened: +sorted[1] === 1   }">&triangledown;</span></h3>
            <h3 @click="sortType" data-idx="2">Тип отчёта <span :class="{opened: +sorted[2] === 1  }">&triangledown;</span></h3>
            <h3 @click="sortProfit" data-idx="3">Прибыль <span :class="{opened: +sorted[3] === 1  }">&triangledown;</span></h3>
            <h3 @click="sortDiler" data-idx="4">Ответственный <span :class="{opened: +sorted[4] === 1  }">&triangledown;</span></h3>
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
        sorted: [0, 0, 0, 0, 0]
      }
    },
    components: {Loader, LayoutMain},
    async mounted() {
      await this.$store.dispatch('fetchReports')
      this.reports = this.$store.getters.getReports
      this.loading = false
    },
    methods: {
      sortDate(e) {
        this.sort(e)
        const d = {
          'января': '01',
          'февраля': '02',
          'марта': '03',
          'апреля': '04',
          'мая': '05',
          'июня': '06',
          'июля': '07',
          'августа': '08',
          'сентября': '09',
          'октября': '10',
          'ноября': '11',
          'декабря': '12'
        }

        const toDate = (item) => {
          let date = item.date.split(' ')
          date[1] = d[date[1]]
          return `${date[1]} ${date[0]} ${date[2]}`
        }

        this.reports.sort((a, b) => {
          a.tmpDate = toDate(a)
          b.tmpDate = toDate(b)
          if (Date.parse(a.tmpDate) > Date.parse(b.tmpDate)) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (Date.parse(a.tmpDate) < Date.parse(b.tmpDate)) {
            return this.sorted[+e.target.dataset.idx]
          }
          a.tmpDate = b.tmpDate = undefined
          return 0
        })
      },
      sortTitle(e){
        this.sort(e)
        this.reports.sort((a,b) => {
          if (a.title > b.title) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (a.title < b.title) {
            return this.sorted[+e.target.dataset.idx]
          }
          return 0
        })
      },
      sortType(e){
        this.sort(e)
        this.reports.sort((a,b) => {
          if (a.type > b.type) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (a.type < b.type) {
            return this.sorted[+e.target.dataset.idx]
          }
          return 0
        })
      },
      sortProfit(e){
        this.sort(e)
        this.reports.sort((a,b) => {
          if (a.profit > b.profit) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (a.profit < b.profit) {
            return this.sorted[+e.target.dataset.idx]
          }
          return 0
        })
      },
      sortDiler(e){
        this.sort(e)
        this.reports.sort((a,b) => {
          if (a.worker > b.worker) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (a.worker < b.worker) {
            return this.sorted[+e.target.dataset.idx]
          }
          return 0
        })
      },
      sort(e) {
        this.sorted[+e.target.dataset.idx] = this.sorted[+e.target.dataset.idx] ? -this.sorted[+e.target.dataset.idx] : 1
        this.sorted = this.sorted.map((item, i) => {
          if (i !== +e.target.dataset.idx){
            item = 0
          }
          return item
        })
      }
    }
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
    overflow-y: auto;

    .line {
      display: flex;
      justify-content: space-around;
      padding: 5px 0;
      border-bottom: 1px solid black;

      h3 {
        font-size: 1.4rem;
        text-align: center;
        width: 100%;
        cursor: pointer;

        span {
          display: inline-block;
          font-size: 1.6rem;
          transition: all .5s;
        }

        span.opened {
          transform: rotate(180deg);
        }
      }

      h4 {

        text-align: center;
        width: 100%;
      }
    }
  }
</style>
