<template>
  <main-layout>
    <Loader v-if="loading" />
    <div class="report" v-else>
        <form @submit.prevent="submitHandler">
      <h2>Отправить отчёт</h2>
      <input
        placeholder="Наименование:"
        required
        type="text"
        v-model="title"
      /><br />
      <input
        placeholder="Закзчик:"
        required
        type="text"
        v-model="customer"
      /><br />

      <input
        placeholder="Наименование проданного товара:"
        required
        type="text"
        v-model="titleProduct"
      /><br />
      <input
        placeholder="Ответственный сотрудник за сделку:"
        required
        type="text"
        v-model="responsible"
      /><br />
      <input
        placeholder="Цена за единицу продажи:"
        required
        type="text"
        v-model="priceOne"
      /><br />
      <input
        placeholder="Окончательная цена за продажу:"
        required
        type="text"
        v-model="priceEnd"
      /><br />
      <input
        placeholder="Дата подачи сделки:"
        required
        type="date"
        v-model="dataFirst"
      /><br />
      <input
        placeholder="Дата окончания сделки:"
        required
        type="date"
        v-model="dataEnd"
      /><br />
      <button type="submit">Отправить отчёт</button>
      </form>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/LayoutMain'
import Loader from '../components/Loader'

export default {
    name: 'Report',
    components: {Loader, MainLayout},
    data (){
    return{
    title: "",
    customer: "",
    titleProduct: "",
    responsible: "",
    priceOne: "",
    priceEnd: "",
    dataFirst: "",
    dataEnd:"",
    loading: false,
  }
    },
    methods: {
      async submitHandler() {
        this.loading = true
        const data = {
          title: this.title,
          customer: this.customer,
          titleProduct: this.titleProduct,
          responsible: this.responsible,
          priceOne: this.priceOne,
          priceEnd: this.priceEnd,
          dataFirst: this.dataFirst,
          dataEnd: this.dataEnd
        }
        try {
        await this.$store.dispatch("createReport", data)
        this.title = this.customer = this.titleProduct = this.responsible = this.priceOne = this.priceEnd = this.dataFirst = this.dataEnd = ""
        this.$toast.success('Отчёт отправлен')
      } catch (e) {
        this.$toast.error(e.message)
        console.error(e);
      } finally {
        this.loading = false;
      }
        
         
      }
    },
  }
</script>

<style lang="scss" scoped>
.report {
  margin-top: 10px;
  background-color: #fff;
  padding: 30px;
}
input {
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
</style>
