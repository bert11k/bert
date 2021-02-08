<template>
  <div class="">
    <div class="auth">
      <h2>Войти в систему</h2>
      <form @submit.prevent="login">
        <div>
          <img src="../assets/user.png" alt="1" />
          <input type="email" placeholder="Почта"  required v-model.trim="email"/>
        </div>

        <div>
          <img src="../assets/pass.png" alt="2" />
          <input type="text" placeholder="Пароль" required v-model.trim="password"/>
        </div>

        <div class="checkpass">
          <input id="checkbox" type="checkbox" v-model="isChecked" required/>
          <label for="checkbox">Запомнить меня?</label><br />
        </div>
        <button type="submit">Авторизоваться</button>
        <br>  
        <small class="error" :class="{'display':error}">Неверный логин или пароль</small>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: ()=>({
    email: '',
    password: '',
    isChecked: false,
    error: false
  }),
  mounted() {
    if(this.$store.getters.isLogin){
      this.$router.push('/')
    }
  },
  methods:{
    async login(){
      let formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch("login", formData)
        await this.$router.push("/")
      } catch (e) {
        this.error = true
      }
      this.email = ''
      this.password = ''
      this.isChecked = ''
    },

  }
};
</script>
<style lang="scss" scoped>

.auth {
  margin: calc(50vh - 100px) auto auto;
  width: 400px;
  background-color: #39a098;
  border-radius: 10px;
  padding: 30px 30px 20px;
}

.error{
  margin-top: 15px;
  color: #202a40;
  font-weight: bold;
  text-transform: uppercase;
  display: none;
}
.display{
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
button{
  margin-top: 10px;
  width: 200px;
  height: 25px;
  border-radius: 10px;
  border:0;
  outline: none;
  cursor: pointer;
  &:hover{
    background:#35938b;
    box-shadow: 1px 1px 2px rgba(0,0,0, .3);
    border: 1px solid black;
    }


}

</style>
