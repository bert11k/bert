<template>
  <main-layout>
    <Loader v-if="loading" />
    <div class="addtransaction" v-else>
      <form @submit.prevent="submitHandler">
        <h2>Создать сделку</h2>
        <input
            placeholder="Название"
            required
            type="text"
            v-model="title"
        /><br />
        <input
          placeholder="Заказчик"
          required
          type="text"
          v-model="customer"
        /><br />
        <input id="date" required type="date" v-model="date" /><br />
        <input
          placeholder="Адрес заказчика"
          required
          type="text"
          v-model="address"
        /><br />
        <select required v-model="status">
          <option disabled selected value="">Статус</option>
          <option value="1">В обработке</option>
          <option value="2">В ожидании</option>
          <option value="3">Выполняется</option>
          <option value="4">Отклонен</option> </select
        ><br />
        <select required v-model="type">
          <option disabled selected value="">Вид сделки:</option>
          <option value="1">Оптовая</option>
          <option value="2">Розничная</option> </select
        ><br />
        <button type="submit">Cоздать сделку</button>
      </form>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from "../layouts/LayoutMain";
import Loader from "../components/Loader";

export default {
  name: "AddTransaction",
  components: { Loader, MainLayout },
  data: () => ({
    title: "",
    date: "",
    address: "",
    status: "",
    type: "",
    customer: "",
    loading: false,
  }),
  methods: {
    async submitHandler() {
      this.loading = true;
      const data = {
        title: this.title,
        date: this.date,
        address: this.address,
        status: this.status,
        type: this.type,
        customer: this.customer
      };
      try {
        await this.$store.dispatch("createTransaction", data)
        this.title = this.date = this.address = this.status = this.type = this.customer =""
        this.$toast.success('Сохранено')
      } catch (e) {
        this.$toast.error(e.message)
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
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
  }
}
</style>
