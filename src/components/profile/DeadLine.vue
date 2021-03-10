<template>
  <div>
    <div class="DeadLine">
      <p>До сдачи отчета за неделю осталось: {{deadline}}</p>
      <router-link to="/report">Сдать отчёт</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DeadLine',
    computed:{
      deadline(){
        const days = 7 - new Date().getDay()
        if(days < 1){
          return `${24 - new Date().getHours()} часов`
        } else if(days === 1){
          return `${days} день`
        } else if(days > 1 && days < 5){
          return `${days} дня`
        } else{
          return `${days} дней`
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
</style>
