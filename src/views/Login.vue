<template>
  <layout-login>
    <div class="">
      <Loader v-if="loading"/>
      <div class="auth" v-else>
        <h2>Войти в систему</h2>
        <form @submit.prevent="login">
          <div>
            <img alt="1" src="../assets/user.png"/>
            <input placeholder="Почта" required type="email" v-model.trim="email"/>
          </div>

          <div>
            <img alt="2" src="../assets/pass.png"/>
            <input placeholder="Пароль" required type="password" v-model.trim="password"/>
          </div>
          <button type="submit">Авторизоваться</button>
          <br>
          <small :class="{'display':error}" class="error">Неверный логин или пароль</small>
        </form>
      </div>
    </div>
  </layout-login>
</template>

<script>
  import LayoutLogin from '../layouts/LayoutLogin.vue'
  import Loader from '../components/Loader'

  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: '',
      error: false,
      loading: false,
    }),
    components: {Loader, LayoutLogin},
    mounted() {
      if (this.$store.getters.isLogin) {
        this.$router.push('/')
      }
    },
    methods: {
      async login() {
        this.loading = true
        let formData = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$store.dispatch('login', formData)
          await this.$router.push('/')
        } catch (e) {
          this.$toast.error('Неверный логин или пароль')
          this.error = true
        }
        this.email = ''
        this.password = ''
        this.loading = false
      },

    }
  }
</script>
<style lang="scss" scoped>

  .auth {
    margin: calc(50vh - 250px / 2) auto auto;
    width: 400px;
    background-color: #39a098;
    border-radius: 10px;
    padding: 30px 30px 20px;
  }

  .error {
    margin-top: 15px;
    color: #202a40;
    font-weight: bold;
    text-transform: uppercase;
    display: none;
  }

  .display {
    display: block;
  }

  .auth h2 {
    text-align: center;
    margin-bottom: 17px;
  }

  form {
    text-align: center;
    margin: 0 auto;

  }

  .checkpass {
    display: flex;
    padding-left: 35px;

  }

  #checkbox {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  .auth div {
    margin: 10px;

    img {
      position: absolute;
      width: 20px;
      margin-left: 10px;
      margin-top: 4px;
    }

    input {
      width: 80%;
      height: 2rem;
      border: 0;
      border-radius: 7px;
      padding-left: 50px;
      outline: none;
    }
  }

  button {
    margin-top: 10px;
    width: 200px;
    height: 25px;
    border-radius: 10px;
    border: 0;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #35938b;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
      border: 1px solid black;
    }


  }

</style>
