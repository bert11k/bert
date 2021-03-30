<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="reportdeal" v-else>
      <div class="textinformation">
        <div id="print">
          <div>
            <p>Наименование: {{deal.title}}</p>
            <p>Закзчик: {{deal.customer}}</p>
            <p>Дата подачи сделки: {{deal.date}}</p>
            <p>Адрес заказчика: {{deal.address}}</p>
            <p>Вид сделки: {{deal.type}}</p>
            <p>Номер договора: {{deal.num}}</p>
            <p>Номер прибыль: {{deal.num}}</p>
          </div>

          <div class="printLast">
            <h3>Предметы договора</h3>
            <ol>
              <li :key="subj.key" class="subj" v-for="subj of deal.subjects">
                <p>Наименование товара: {{subj.title}}</p>
                <p>Количество товара: {{subj.num}}</p>
                <p>Сумма заказа: {{subj.sum}}р.</p>
              </li>
            </ol>
          </div>
        </div>
        <button @click="print">Распечатать</button>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'
  const {ipcRenderer} = window.require('electron')

  export default {
    name: 'ReportDeal',
    data() {
      return {
        loading: true,
        deal: null,
      }
    },
    components: {Loader, MainLayout},
    async mounted() {
      await this.$store.dispatch('fetchDeal', this.$route.params.key)
      this.deal = this.$store.getters.getDeal
      this.loading = false
    },
    methods: {
      print() {
        ipcRenderer.send('print')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reportdeal {
    margin-top: 10px;
    background-color: #fff;
    padding: 30px;

    .textinformation {
      font-size: 1.5rem;
      line-height: 50px;

      #print {
        display: flex;
        justify-content: space-between;

        .printLast{
          width: 40%;
        }

        .subj {

          padding-bottom: 1rem;
          border-bottom: 1px solid black;

          p {
            font-size: 1.3rem;
            line-height: 1.5rem;
          }
        }
      }
    }
  }

  button {
    width: 225px;
    margin: 5px 5px;
    height: 35px;
    cursor: pointer;
    background-color: #39A098;
    border: 0;

    a:hover {
      color: white;
    }
  }
</style>
