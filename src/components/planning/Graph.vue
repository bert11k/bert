<template>
  <div class="graph">
    <img src="../../assets/sklad.png" alt="">
    <div class="fio">
      <p>КТОТО ТАМ КТОТОТАМЫЧ</p>
    </div>
    <div class="graphLine">
      <div class="graphColor" :style="{width: 40 + '%'}">40%</div>
      <span class="sum">400000р.</span>
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
    margin: 10px;
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

    .graphLine{
      background-color: #fff;
      margin-right: 10px;
      width: 100%;
      height: 20px;
      position: relative;

      .sum{
        position: absolute;
        right: 10px;
        top: 0;
        font-weight: bold;
        color: black;
      }

      .graphColor{
        height: 100%;
        z-index: 1000;
        background-color: #39a098;
        text-align: center;
        color: white;
      }
    }
  }
</style>