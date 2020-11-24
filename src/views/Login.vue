<template>
  <div class="">
    <div class="auth">
      <h2>Войти в систему</h2>
      <form>
        <div>
          <img src="../assets/user.png" alt="1" />
          <input type="text" placeholder="Логин"  required/>
        </div>

        <div>
          <img src="../assets/pass.png" alt="2" />
          <input type="text" placeholder="Пароль" required />
        </div>

        <div class="checkpass">
          <input id="checkbox" type="checkbox" />
          <label for="checkbox">Запомнить меня?</label><br />
        </div>
        <button type="submit">Авторизоваться</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>
<style lang="scss" scoped>

.auth {
  margin: auto;
  margin-top: calc(50vh - 100px);
  height: 245px;
  width: 400px;
  background-color: #39a098;
  border-radius: 10px;
  padding: 30px;
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
}
</style>
