<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="addtransaction" v-else>
      <div>
        <form @submit.prevent="submitHandler">
          <h2>Создать сделку</h2>
          <input
              placeholder="Название"
              required
              type="text"
              v-model="title"
          /><br/>
          <input
              placeholder="Заказчик"
              required
              type="text"
              v-model="customer"
          /><br/>
          <input id="date" required type="date" v-model="date"/><br/>
          <input
              placeholder="Адрес заказчика"
              required
              type="text"
              v-model="address"
          /><br/>
          <input
              placeholder="Номер договора"
              required
              type="text"
              v-model="num"
          /><br/>
          <select required v-model="status">
            <option disabled selected value="">Статус</option>
            <option value="1">В обработке</option>
            <option value="2">В ожидании</option>
            <option value="3">Выполняется</option>
            <option value="4">Отклонен</option>
          </select
          ><br/>
          <select required v-model="type">
            <option disabled selected value="">Вид сделки:</option>
            <option value="оптовая">Оптовая</option>
            <option value="розничная">Розничная</option>
          </select
          ><br/>
          <button type="submit">Cоздать сделку</button>
        </form>
      </div>
      <Subjects :catalog="catalog" :subjs="subjects" @subjects="subject"/>
    </div>

  </main-layout>
</template>
<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'
  import Subjects from '../components/transaction/Subjects'

  export default {
    name: 'AddTransaction',
    components: {Subjects, Loader, MainLayout},
    data() {
      return {
        title: '',
        date: '',
        address: '',
        status: '',
        type: '',
        customer: '',
        num: '',
        subjects: [],
        catalog: [],
        loading: true,
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchCatalog')
      this.catalog = this.$store.getters.getCatalog
      this.date = this.getDate
      this.loading = false
    },
    methods: {
      async submitHandler() {
        this.loading = true
        const data = {
          title: this.title,
          date: this.date,
          address: this.address,
          status: this.status,
          type: this.type,
          customer: this.customer,
          num: this.num,
          subjects: this.subjects,
        }
        if(this.subjects.length){
          try {
            await this.$store.dispatch('createTransaction', data)
            for (const subj of this.subjects) {
              const num = +this.catalog[subj.itemKey].num - +subj.num
              await this.$store.dispatch('changeCatalogNum', {key: subj.itemKey, num })
            }
            this.$toast.success('Сделка создана')
          } catch (e) {
            this.$toast.error(e.message)
            console.error(e)
          } finally {
            this.title = this.address = this.status = this.type = this.customer = this.num = ''
            this.date = this.getDate
            this.subjects = []
            this.loading = false
          }
        }

      },
      subject(subjects) {
        this.subjects = subjects
      }
    },
    computed: {
      getDate() {
        let dd = (new Date).getDate()
        if (dd < 10) dd = '0' + dd

        let mm = (new Date).getMonth() + 1
        if (mm < 10) mm = '0' + mm

        let yy = (new Date).getFullYear()
        if (yy < 10) yy = '0' + yy

        return yy + '-' + mm + '-' + dd
      }
    }
  }
</script>

<style lang="scss" scoped>
  .addtransaction {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  form {
    width: 300px;
    margin: 20px auto;

    input,
    select {
      margin: 10px 5px;
      width: 225px;
      height: 35px;
    }

    button {
      width: 225px;
      margin: 5px 5px;
      height: 35px;
      cursor: pointer;
      background-color: #39A098;
      border: 0;

    }
  }
</style>
