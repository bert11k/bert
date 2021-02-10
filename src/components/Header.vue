<template>
  <header>
    <h2>{{ fio }}</h2>
    <form>
      <div class="search">
        <a href="#"><img alt="1" src="../assets/search.png"/></a>
        <input
          placeholder="Искать сотрудника, документ, прочее..."
          type="text"
        />
      </div>
    </form>

    <div class="profiles">
      <img alt="2" src="../assets/profiles.jpg" />
      <a href="#">{{ fio }}</a>
    </div>
    <div>
      <p @click="signOut" style="cursor: pointer;">Выйти</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      showDropmenu: false,
    };
  },
  methods: {
    signOut(){
      this.$store.commit('signOut')
      this.$router.push('/login')
    }
  },
  props: ["fio"],
};
</script>
<style lang="scss" scoped>
header {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  height: 100px;
  background-color: #ffffff;
}
.dropMenu {
  display: block !important;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
}
.hide {
  display: none !important;
}
form {
  position: relative;
  /*width: 50%;*/
  flex-basis: 40%;
  justify-self: center;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid black;
    outline: none;
  }

  img {
    position: absolute;
    width: 20px;
    margin-top: 8px;
    right: 10px;
  }
}

.profiles {
  display: flex;
  align-items: center;
  justify-content: right;

  #down {
    width: 50px;
    height: 20px;
  }

  img {
    border-radius: 1000px;
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
}
</style>
