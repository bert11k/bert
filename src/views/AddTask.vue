<template>
  <main-layout>
    <Loader v-if="loading" />
    <div class="addtask" v-else>
      <form @submit.prevent="submitHandler">
        <h2>Создать задачу</h2>
        <input
          placeholder="Заказчик"
          required
          type="text"
          v-model="title"
        /><br />
        
        <input id="date" required type="date" v-model="date" /><br />
        <input
          placeholder="Контакты"
          required
          type="text"
          v-model="contact"
        /><br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Описание задачи"
          v-model="description"
        ></textarea
        ><br />
        <br />
        <button type="submit">Добавить задачу</button>
      </form>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from "../layouts/LayoutMain";
import Loader from "../components/Loader";

export default {
  name: "AddTask",
  components: { Loader, MainLayout },
  data: () => ({
    title: "",
    date: "",
    contact: "",
    description: "",
    loading: false,
  }),
  methods: {
    async submitHandler() {
      this.loading = true;
      const data = {
        title: this.title,
        date: this.date,
        contact: this.contact,
        description: this.description,
      };
      try {
        await this.$store.dispatch("createTask", data);
        this.title = this.date = this.contact = this.description = "";
        this.$toast.success("Сохранено");
      } catch (e) {
        this.$toast.error(e.message);
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.addtask {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
textarea{
    resize: none;
    width: 225px;
    margin-left: 5px;
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
