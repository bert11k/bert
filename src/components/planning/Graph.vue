<template>
  <div class="graph">
    <div class="img">
      <img :src="dealer.img" alt="">
    </div>
    <div class="fio">
      <p>{{dealer.fio}}</p>
    </div>
    <div class="graphLine">
      <div  class="graphColor" ref="graphColor">{{dealer.percent}}%</div>
      <span class="sum">{{target}}р.</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Graph',
    props: ['dealer', 'target'],
    mounted() {
      setTimeout(() => {
        this.$refs.graphColor.style.width = this.dealer.percent + '%'
      }, 10)
    },
  }
</script>

<style lang="scss" scoped>
  .graph {
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin: 10px 10px 10px 0;
    align-items: center;
    gap: 15px;
    border: 0;
    border-radius: 5px;
    background-color: rgba(58, 65, 161, 0.82);
    color: white;

    .img {
      width: 100px;
      height: 100%;
      max-width: 50px;
      text-align: center;
      margin-left: 5px;

      img {
        max-width: 50px;
        height: 100%;
        border-radius: 5px;
        padding: 5px;
      }
    }


    .fio {
      width: 350px;
    }

    .graphLine {
      background-color: #fff;
      margin-right: 10px;
      width: 100%;
      height: 20px;
      position: relative;

      .sum {
        position: absolute;
        right: 10px;
        top: 0;
        font-weight: bold;
        color: black;
      }

      .graphColor {
        width: 0;
        transition: width .75s ease;
        height: 100%;
        z-index: 1000;
        background-color: #39a098;
        text-align: center;
        color: white;
      }
    }
  }
</style>