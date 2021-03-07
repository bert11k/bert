<template>
  <div class="subjects">
    <h2>Предмет договора</h2>
    <div class="form">
<!--      <input placeholder="Товар" type="text" v-model.trim="title">-->
      <select v-model="title">
        <option value="def" selected hidden disabled>Товар</option>
        <option :value="item.title" v-for="item of catalog" :key="item.title">{{item.title}}</option>
      </select>
      <input placeholder="Кол-во" type="number" v-model.trim="num">
      <button @click="addSubject">Добавить</button>
    </div>
    <div class="table">
      <div class="line">
        <h4>Наименование товара</h4>
        <h4>Количество</h4>
        <h4>Сумма</h4>
      </div>
      <div :key="subject.title" class="line" v-for="subject of subjects">
        <h5>{{subject.title}}</h5>
        <h5>{{subject.num}}</h5>
        <h5>сумма</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Subjects',
    props: ['subjs', 'catalog'],
    data() {
      return {
        title: '',
        num: 1,
        subjects: this.subjs,
      }
    },
    methods: {
      addSubject() {
        if (this.title !== '' && this.num !== '') {
          const idx = this.subjects.findIndex(subj => subj.title === this.title)
          if (idx !== -1) {

            if(+this.num === 0) this.subjects = this.subjects.filter(subject => subject.title !== this.title)
            else this.subjects[idx].num = this.num

          } else this.subjects.push({title: this.title, num: this.num})

          this.title = ''
          this.num = 1
          this.$emit('subjects', this.subjects)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .subjects {
    width: 320px;
    margin: 20px auto;

    .form {
      display: flex;

      input,select {
        margin: 10px 10px 5px 0;
        height: 35px;

        &[type=number] {
          width: 55px;
        }
      }
      select{
        width: 200px;
      }

      button {
        width: 225px;
        margin: 10px 0;
        height: 35px;
        cursor: pointer;
        background-color: #39A098;
        border: 0;
      
      }
    }

    .table {
      margin-top: 5px;
      width: 335px;
      padding: 5px;
      border: 1px solid #3c3c3c;

      .line {
        display: flex;
        justify-content: space-between;

        h4:last-of-type, h5:last-of-type{
          width: 50%;
        }
        h5{
          margin-left: 5px;
        }
        h4,h5{
          margin-right: 10px;
          width: 100%;
        }
      }
    }
  }

</style>