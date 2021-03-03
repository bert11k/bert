<template>
  <main-layout>
    <Loader v-if="loading"/>
    <div class="addItem" v-else>
      <form @submit.prevent="submitHandler">
        <h2>Добавить товар</h2>
        <select required v-model="category">
          <option disabled selected value="null">Категория</option>
          <option value="1">Категория 1</option>
          <option value="2">Категория 2</option>
          <option value="3">Категория 3</option>
          <option value="4">Категория 4</option>
        </select><br/>
        <input
            placeholder="Название"
            required
            type="text"
            v-model="title"
        /><br/>
        <input
            placeholder="Тип"
            required
            type="text"
            v-model="type"
        /><br/>
        <input
            placeholder="Наличие"
            required
            type="number"
            v-model="num"
        /><br/>
        <input
            placeholder="Стоимость"
            required
            type="number"
            v-model="cost"
        /><br/>

        <input @change="loadPhoto" accept=".jpg,.png,.bmp,.jpeg" ref="file" required style="display:none" type="file"/>
        <button @click="addPhoto">Добавить фото</button>
        <button type="submit">Добавить товар</button>
        <br/>
      </form>
      <img ref="img"/>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/LayoutMain'
  import Loader from '../components/Loader'

  export default {
    name: 'AddItem',
    components: {Loader, MainLayout},
    data: () => ({
      category: null,
      title: '',
      num: '',
      cost: '',
      loading: false,
    }),
    methods: {
      async submitHandler() {
        this.loading = true
        const data = {
          category: this.category,
          title: this.title,
          num: this.num,
          cost: this.cost,
          type: this.type,
        }
        try {
          await this.$store.dispatch('saveProductImg', this.$refs.file.files[0])
          await this.$store.dispatch('createProduct', data)
          this.category = 1
          this.title = this.num = this.cost = this.type = ''
          this.$toast.success('Сохранено')
        } catch (e) {
          this.$toast.error(e.message)
          console.log(e)
        } finally {
          this.loading = false
        }
      },
      addPhoto() {
        this.$refs.file.click()
      },
      loadPhoto(e) {
        const reader = new FileReader()

        reader.onload = (ev) => {
          this.$refs.img.src = ev.target.result
        }

        reader.readAsDataURL(e.srcElement.files[0])
      }
    },
  }
</script>

<style lang="scss" scoped>
  .addItem {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      width: 250px;
      margin-top: 25px;
    }
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
    }
  }


</style>