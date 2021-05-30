<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div class="customers" v-else>
      <div class="table">
        <h2>Учет заказчиков</h2><br>
        <div class="line">
          <h3 @click="sortName" data-idx="0">Заказчик <span
              :class="{opened: +sorted[0] === 1 }">&triangledown; </span></h3>
          <h3>Последняя сделка</h3>
          <h3 @click="sortProfit" data-idx="1">Общая прибыль <span
              :class="{opened: +sorted[1] === 1 }">&triangledown; </span></h3>
        </div>
        <div :key="customer.customer" class="line" v-for="customer of customers">
          <h4>{{customer.customer}}</h4>
          <h4>{{customer.lastDeal}}</h4>
          <h4>{{customer.profit}}р.</h4>
        </div>
      </div>
    </div>
  </layout-main>
</template>

<script>
  import Loader from '../components/Loader'
  import LayoutMain from '../layouts/LayoutMain'

  export default {
    name: 'Customers',
    components: {Loader, LayoutMain},
    data() {
      return {
        loading: true,
        customers: [],
        sorted: [0, 0]
      }
    },
    async mounted() {
      try {
        await this.$store.dispatch('fetchCustomers')
        this.customers = this.$store.getters.getCustomers
        this.loading = false
      } catch (e) {
        this.$toast.error(e)
      }
    },
    methods: {
      sortProfit(e) {
        this.sort(e)
        this.customers.sort((a, b) => {
          if (a.profit > b.profit) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (a.profit < b.profit) {
            return this.sorted[+e.target.dataset.idx]
          }
          return 0
        })
      },
      sortName(e) {
        this.sort(e)
        this.customers.sort((a, b) => {
          if (a.customer > b.customer) {
            return -this.sorted[+e.target.dataset.idx]
          }
          if (a.customer < b.customer) {
            return this.sorted[+e.target.dataset.idx]
          }
          return 0
        })
      },
      sort(e) {
        this.sorted[+e.target.dataset.idx] = this.sorted[+e.target.dataset.idx] ? -this.sorted[+e.target.dataset.idx] : 1
        this.sorted = this.sorted.map((item, i) => {
          if (i !== +e.target.dataset.idx) {
            item = 0
          }
          return item
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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