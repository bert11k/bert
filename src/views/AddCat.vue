<template>
  <main-layout>
    <div class="addCat">
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

  export default {
    name: 'AddCat',
    components: {MainLayout},
    data: () => ({
      title: '',
    }),
    methods: {
      async submitHandler() {
        try{
          await this.$store.dispatch('addCat', this.title)
          this.$toast.success('Добавлено')
        } catch (e) {
          this.$toast.error(e)
        }

      },
    },
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