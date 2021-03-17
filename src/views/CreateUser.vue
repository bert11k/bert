<template>
  <layout-main>
    <Loader v-if="loading"/>
    <div class="createUser" v-else>
      <div class="auth" v-if="auth">
        <label for="pass">Введите пароль</label>
        <input type="password" id="pass" v-model="authPass" />
        <button @click="checkAuth">Войти</button>
      </div>
      <div class="mainPart" v-else>
      <form @submit.prevent="submitHandler" >
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
        <select v-model="position" required>
          <option value="Дилер">Дилер</option>
          <option value="Менеджер">Менеджер</option>
        </select><br />
        <input required @change="loadPhoto" accept=".jpg,.png,.bmp,.jpeg" type="file" style="display:none" ref="file"/>
        <button @click="addPhoto">Добавить фото</button>
        <button type="submit">Добавить пользователя</button>
        <br />
      </form>
      <img ref="img"/>
    </div>
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import Loader from '../components/Loader'
export default {
  name: "CreateUser",
  data: () => ({
    loading: false,
    auth: true,
    authPass: "",
    email: "",
    password: "",
    fio: "",
    phone: "",
    phoneWork: "",
    position: "",
  }),
  components: {Loader, LayoutMain },
  methods: {
    async submitHandler() {
      this.loading = true
      const data = {
        email: this.email,
        password: this.password,
        fio: this.fio,
        phone: this.phone,
        phoneWork: this.phoneWork,
        position: this.position,
        photo: this.$refs.file.files[0].name
      };
      try {
        await this.$store.dispatch('savePhoto', this.$refs.file.files[0])
        await this.$store.dispatch("createUser", data);
        this.$toast.success(`Сохранено`)
      } catch (e) {
        this.$toast.error(e.message)
        console.error()
      } finally {
        this.loading = false
      }
    },
    checkAuth() {
      if (this.authPass === "admin") {
        this.auth = false;
      }
    },
    addPhoto(){
      this.$refs.file.click()
    },
    loadPhoto(e){
      const reader = new FileReader()

      reader.onload = (ev) => {
        this.$refs.img.src = ev.target.result
      }

      reader.readAsDataURL(e.srcElement.files[0])
    }
  },
};
</script>
<style lang="scss" scoped>
.createUser {
  margin-top: 10px;
  background: white;
  padding: 5px 5px;
  form {
    width: 300px;
    margin: 20px auto;
    input, select {
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
  
  .mainPart{
    display: grid;
    grid-template-columns: 1fr 1fr;

    img{
      width: 250px;
      margin-top: 25px;
    }
  }
}
</style>
