<template>
  <div class="graph">
    <img src="../../assets/sklad.png" alt="">
    <div class="fio">
      <p>КТОТО ТАМ КТОТОТАМЫЧ</p>
    </div>
    <div>
      ГРАФИК
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Graph'
  }
</script>

<style scoped lang="scss">
  .graph{
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin: 10px 0;
    align-items: center;
    gap: 15px;
    border: 0;
    border-radius: 5px;
    background-color: rgba(58, 65, 161, 0.82);
    color: white;

    img{
      height: 100%;
      border-radius: 5px;
      margin-left: 5px;
      padding: 5px;
    }

    .fio{
      width: 350px;
    }

    :last-child{
      width: 100%;
    }
  }
</style>