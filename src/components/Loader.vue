<template>
  <div class="loadingio-spinner-gear-0s58hh19vf1"><div class="ldio-0ec3gvsr97xo">
    <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div></div>

</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style scoped>
  @keyframes ldio-0ec3gvsr97xo {
    0% { transform: rotate(0deg) }
    50% { transform: rotate(22.5deg) }
    100% { transform: rotate(45deg) }
  }
  .ldio-0ec3gvsr97xo > div {
    transform-origin: 100px 100px;
    animation: ldio-0ec3gvsr97xo 0.2s infinite linear;
  }
  .ldio-0ec3gvsr97xo > div div {
    position: absolute;
    width: 22px;
    height: 152px;
    background: #374664;
    left: 100px;
    top: 100px;
    transform: translate(-50%,-50%);
  }
  .ldio-0ec3gvsr97xo > div div:nth-child(1) {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .ldio-0ec3gvsr97xo > div div:nth-child(6) {
    width: 80px;
    height: 80px;
    background: #ffffff;
    border-radius: 50%;
  }.ldio-0ec3gvsr97xo > div div:nth-child(3) {
     transform: translate(-50%,-50%) rotate(45deg)
   }.ldio-0ec3gvsr97xo > div div:nth-child(4) {
      transform: translate(-50%,-50%) rotate(90deg)
    }.ldio-0ec3gvsr97xo > div div:nth-child(5) {
       transform: translate(-50%,-50%) rotate(135deg)
     }
  .loadingio-spinner-gear-0s58hh19vf1 {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-0ec3gvsr97xo {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    padding: 5% 40%;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-0ec3gvsr97xo div { box-sizing: content-box; }

</style>