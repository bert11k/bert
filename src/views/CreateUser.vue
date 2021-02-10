<template>
  <layout-main>
    <div class="createUser">
      <div class="auth" v-if="auth">
        <label for="pass">Введите пароль</label>
        <input type="password" id="pass" v-model="authPass" />
        <button @click="checkAuth">Войти</button>
      </div>
      <form @submit.prevent="submitHandler" v-else>
        <h2>Добавить работника</h2>
        <input
          placeholder="Почта"
          required
          type="email"
          v-model="email"
        /><br />
        <input
          placeholder="Пароль"
          required
          type="password"
          v-model="password"
        /><br />
        <input placeholder="ФИО" required type="text" v-model="fio" /><br />
        <input
          placeholder="Телефон"
          required
          type="tel"
          v-model="phone"
        /><br />
        <input
          placeholder="Рабочий телефон"
          required
          type="tel"
          v-model="phoneWork"
        /><br />
        <input
          placeholder="Должность"
          required
          type="text"
          v-model="position"
        /><br />
        <button type="submit">Добавить пользователя</button>
        <br />
      </form>
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
export default {
  name: "CreateUser",
  data: () => ({
    auth: true,
    authPass: "",
    email: "",
    password: "",
    fio: "",
    phone: "",
    phoneWork: "",
    position: "",
  }),
  components: { LayoutMain },
  methods: {
    async submitHandler() {
      const data = {
        email: this.email,
        password: this.password,
        fio: this.fio,
        phone: this.phone,
        phoneWork: this.phoneWork,
        position: this.position,
      };
      try {
        this.$store.dispatch("createUser", data);
      } catch (e) {
        console.log(e);
      }
    },
    checkAuth() {
      if (this.authPass === "admin") {
        this.auth = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.createUser {
  background: white;
  min-height:100%;
  padding: 5px 5px;
  form {
    width: 300px;
    margin: 20px auto;
    input {
      margin: 10px 5px;
      width: 225px;
      height: 35px;
    }
    button {
      width: 225px;
      margin: 0 5px;
      height: 35px;
      cursor: pointer;
    }
  }
}
</style>
