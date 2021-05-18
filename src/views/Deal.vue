<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div class="deal" v-else>
      <Dealitem  @statusChange="statusChange" :deal="deal"/>
      <Dealpred  :subjects="deal.subjects"/>
    </div>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import Dealitem from '../components/deal/Dealitem.vue'
  import Dealpred from '../components/deal/Dealpred.vue'
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
    methods:{
      async statusChange(deal){
        try{
          await this.$store.dispatch('changeDealStatus', deal)
          if(+deal.status === 3){
            let profit = 0
            this.deal.subjects.forEach(subj => profit += subj.sum)
            await this.$store.dispatch('completeDeal', {...deal, profit, weekday: (new Date()).toLocaleString('ru', { weekday:'long'}),})
          }
          this.$toast.success('Сохранено')
        } catch (e) {
          this.$toast.error(e.message)
        }
      }
    },
    async mounted(){
      await this.$store.dispatch('fetchDeal', this.key)
      this.deal = this.$store.getters.getDeal
      this.loading = false
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
