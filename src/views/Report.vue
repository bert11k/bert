<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="report" v-else>
      <form @submit.prevent="submitHandler">
        <h2>Отправить отчёт</h2>
        <input
            placeholder="Наименование"
            required
            type="text"
            v-model="title"
        /><br/>
        <select v-model="type">
          <option disabled hidden value="def">Тип отчета</option>
          <option value="week">Неделя</option>
          <option value="month">Месяц</option>
          <option value="year">Год</option>
        </select>
        <button type="submit">Отправить отчёт</button>
      </form>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'

  export default {
    name: 'Report',
    components: {Loader, MainLayout},
    data() {
      return {
        title: '',
        type: 'def',
        loading: false,
      }
    },
    methods: {
      async submitHandler() {
        this.loading = true
        const data = {
          title: this.title,
          type: this.type,
        }

        try {
          await this.$store.dispatch('createReport', data)
          this.title = ''
          this.type = 'def'
          this.$toast.success('Отчёт отправлен')
        } catch (e) {
          this.$toast.error(e.message)
          console.error(e)
        } finally {
          this.loading = false
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .report {
    margin-top: 5px;
    background-color: #fff;
    padding: 30px;

  }

  input {
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

  select {
    display: block;
    margin: 10px 5px;
    width: 225px;
    height: 35px;
  }
</style>
