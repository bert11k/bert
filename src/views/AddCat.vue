<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="addCat" v-else>
      <form @submit.prevent="submitHandler">
        <h2>Добавить категорию</h2>
        <input
            placeholder="Название"
            required
            type="text"
            v-model="title"
        /><br/>
        

    
        <button type="submit">Добавить категорию</button>
        <br/>
      </form>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'

  export default {
    name: 'AddCat',
    components: {Loader, MainLayout},
    data: () => ({
      title: '',
    }),
  }
</script>

<style lang="scss" scoped>
  .addCat {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;

  }

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
      background-color: #39A098;
      border: 0;
      
    }
  }


</style>