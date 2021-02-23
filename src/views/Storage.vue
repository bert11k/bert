<template>
  <layout-main>
    <div>
      <section class="content">
        <div class="filter">
          <ul>
            <FilterItem @selectFilter="selectFilter" :key="i.id" :id="i.id" v-for="i of filter" :actv="i.active" :value="i.value"/>
          </ul>
        </div>
        <div class="catalog">
          <h2>{{catalog.title}}</h2>
          <CatalogItem v-for="i of 7" :key="i"/>
        </div>
      </section>
    </div>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import FilterItem from '../components/FilterItem'
  import CatalogItem from '../components/CatalogItem'

  export default {
    name: 'Storage',
    data(){
      return {
        filter: [
          {
            id: 0,
            value: 1,
            active: false
          },
          {
            id: 1,
            value: 2,
            active: false
          },
          {
            id: 2,
            value: 3,
            active: false
          },
          {
            id: 3,
            value: 4,
            active: false
          },
        ],
        catalog:{
          title: "Каталог"
        }
      }
    },
    components: {FilterItem, LayoutMain, CatalogItem},
    methods:{
      selectFilter(id){
        this.filter.forEach(item => item.active = false)
        this.filter[id].active = true
        this.catalog.title = this.filter[id].value
      }
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    margin: 10px auto auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 3fr;
  }

  .content div {
    background-color: #fff;
  }
  .catalog{
    padding: 1rem;
    h2{
      margin-bottom: .5rem;
    }
  }
</style>
