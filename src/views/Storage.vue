<template>
  <layout-main>
    <div>
      <section class="content">
        <div class="filter">
          <ul>
            <FilterItem :key="i" id="i" v-for="i of 6" :actv="false" :value="'значение ' + i"/>
          </ul>
        </div>
        <div class="catalog">
          <h2>Значение</h2>
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
    components: {FilterItem, LayoutMain, CatalogItem}
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
