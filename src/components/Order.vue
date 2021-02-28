<template>
  <section>
    <div>
      <img src="./../assets/transact.png" alt="transact" />
      <p>Сделка №2421<br /><a href="#">ООО Татнефть</a></p>
      <button>Сменить статус</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Order",
};
</script>
<style lang="scss" scoped>
section div {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 20px;
  padding: 10px;
  a {
    font-size: 10px;
  }
  img {
    margin-right: 10px;
    width: 40px;
  }
  button {
    width: 100px;
    height: 30px;
    background-color: #39a098;
    border: 0;
    border-radius: 10px;
    margin-left: 420px;
  }
}
</style>
