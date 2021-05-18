<template>
  <layout-main>
    <Loader v-if="loading"/>
  <div class="customers" v-else>
    <div class="table">
       <h2>Учет заказчиков</h2><br>
      <div class="line">
        <h3>Заказчик</h3>
        <h3>Последняя сделка</h3>
        <h3>Общая прибыль</h3>
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
    components: {Loader, LayoutMain },
    data(){
      return {
        loading: true,
        customers: [],
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
      }

      h4 {

        text-align: center;
        width: 100%;
      }
    }
  }
</style>