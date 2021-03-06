<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div class="deal" v-else>
      <Dealitem :deal="deal"/>
      <Dealpred :subjects="deal.subjects"/>
    </div>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import Dealitem from '../components/Dealitem.vue'
  import Dealpred from '../components/Dealpred.vue'
  import Loader from '../components/Loader'

  export default {
    name: 'Deal',
    data(){
      return {
        loading: true,
        key: this.$route.params.key,
        deal: null
      }
    },
    components: {Loader, LayoutMain, Dealitem, Dealpred},
    async mounted(){
      await this.$store.dispatch('fetchDeal', this.key)
      this.deal = this.$store.getters.getDeal
      this.loading =  false
    },
  }
</script>
<style lang="scss" scoped>
  .deal {
    padding-bottom: 50px;
    margin-top: 10px;
    background-color: white;
  }
</style>
