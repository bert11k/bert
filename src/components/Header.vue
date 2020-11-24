<template>
 <header>
    <h2>Каримов Альберт Линарович</h2>
    <form>
      <div class="search">
        <a href="#"><img src="../assets/search.png" alt="1"/></a>
        <input
          type="text"
          placeholder="Искать сотрудника, документ, прочее..."
        />
      </div>
    </form>

    <div class="profiles">
      <img src="../assets/profiles.jpg" alt="2" />
      <a href="#">Каримов А.Л</a>
      <img id="down" src="../assets/down.svg" alt="3" />
    </div>
  </header>
  </template>

<script>
export default {
    name:"header"
}
</script>
<style lang="scss" scoped>
header {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  height: 100px;
  display: grid;
  grid-template-columns: 1.5fr 3fr 1.5fr;
  background-color: #ffffff;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid black;
    outline: none;
  }
}
form {
  position: relative;
  width: 50%;
  justify-self: center;
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
  flex-direction: right;
  justify-content: right;
  width: content;
#down{
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