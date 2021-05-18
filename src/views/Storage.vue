<template>
  <layout-main>
    <div>
      <div class="scrndHeader">
        <h1>Продукты</h1>
        <div>
          <router-link class="btn" to="addItem">Добавить продукт</router-link>
          <router-link class="btn" to="addCat">Добавить категорию</router-link>
        </div>
      </div>
      <Loader v-if="loading"/>
      <div class="content" v-else>
        <div class="filter">
          <ul>
            <FilterItem :actv="i.active" :id="i.id" :key="i.id" :value="i.title" @selectFilter="selectFilter"
                        v-for="i of filter"/>
          </ul>
        </div>
        <div class="catalog">
          <h2>{{catalog.title}}</h2>
          <CatalogItem :item="item" :key="item.title" @delItem="delItem" v-for="item of catalog.items"/>
        </div>
      </div>
    </div>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import FilterItem from '../components/storage/FilterItem'
  import CatalogItem from '../components/storage/CatalogItem'
  import Loader from '../components/Loader'

  export default {
    name: 'Storage',
    data() {
      return {
        loading: true,
        catalog: {
          title: 'Каталог',
          items: [],
        },
        filter: [],
        active: null,
      }
    },
    components: {Loader, FilterItem, LayoutMain, CatalogItem},
    methods: {
      async selectFilter(id) {
        this.loading = true
        if (id !== this.active) {
          this.active = id
          this.filter.forEach(item => item.active = false)
          this.filter[id].active = true
          this.catalog.title = this.filter[id].value

          const catalogTmp = Object.values(await this.$store.getters.getCatalog)
          this.catalog.items = catalogTmp.filter(item => {
            if (item.category.toLowerCase().trim() === this.filter[id].title.toLowerCase().trim()) return item
          })
        } else {
          this.active = null
          this.filter.forEach(item => item.active = false)
          this.catalog.items = Object.values(await this.$store.getters.getCatalog)
        }

        this.loading = false
      },
      async delItem({key, img}) {
        this.loading = true
        try {
          await this.$store.dispatch('deleteItem', {key, img})
          this.$toast.success('Удалено')
          await this.$store.dispatch('fetchCatalog')
          this.catalog.items = this.$store.getters.getCatalog
        } catch (e) {
          this.$toast.error(e)
        }
        this.loading = false
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchCatalog')
      this.catalog.items = this.$store.getters.getCatalog
      await this.$store.dispatch('fetchCat')
      const cats = this.$store.getters.getCat
      this.filter = cats.map((item, idx) => {
        return {
          active: false,
          id: idx,
          title: item.title
        }
      })
      this.loading = false
    }
  }
</script>
<style lang="scss" scoped>
  .scrndHeader {
    background-color: #fff;
    margin: 5px 0;
    padding: 10px;

    div {
      a {
        margin-right: 10px;
      }
    }

    .btn {
      color: #5c6bd4;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .content {
    margin: 5px auto auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 60vh;
  }

  .filter {
    overflow: auto;
    min-height: 369px;
  }

  .content div {
    background-color: #fff;
  }

  .catalog {
    padding: 1rem;
    min-height: 369px;
    overflow: auto;

    h2 {
      margin-bottom: .5rem;
    }
  }
</style>
