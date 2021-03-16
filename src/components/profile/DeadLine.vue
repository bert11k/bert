<template>
  <div>
    <div class="DeadLine">
      <p :class="{red: days < 1}">До сдачи отчета за неделю осталось: {{deadline}}</p>
      <router-link to="/report">Сдать отчёт</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DeadLine',
    data() {
      return{
        days: 7 - new Date().getDay()
      }
    },
    computed: {
      deadline() {
        if (this.days < 1) {
          return `${24 - new Date().getHours()} часов`
        } else if (this.days === 1) {
          return `${this.days} день`
        } else if (this.days > 1 && this.days < 5) {
          return `$this.{days} дня`
        } else {
          return `${this.days} дней`
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .DeadLine {
    display: flex;
    border: 1.8px solid black;
    width: 70%;
    height: 50px;
    margin: 50px auto auto;

    p {
      font-size: 20px;
      padding-top: 10px;
      margin-left: 100px;
    }

    a {
      display: block;
      padding: 5px 10px;
      height: 30px;
      margin-top: 7px;
      margin-left: 70px;
      background-color: #39a098;
      border-radius: 20px;
      border: 0;
      outline: 0;
      cursor: pointer;
      text-align: center;
    }

    a:hover {
      color: white;
    }
  }
  .red{
    color: red;
  }
</style>
