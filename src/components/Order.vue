<template>
  <section>
    <div>
      <div>
        <img alt="transact" src="./../assets/transact.png">
        <p>Сделка №2421<br><a href="#">ООО Татнефть</a></p>
      </div>
      <button>Сменить статус</button>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Order'
  }
</script>
<style lang="scss" scoped>
  section div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    a {
      font-size: 10px;
    }

    img {
      margin: 10px 10px;
      width: 40px;
    }

    button {
      color: white;
      padding: 5px 1rem;
      background-color: #39a098;
      border: 0;
      border-radius: 10px;
    }
  }

</style>