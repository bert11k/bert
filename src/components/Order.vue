<template>
  <section>
    <div>
      <img src="./../assets/transact.png" alt="transact" />
      <p><router-link to="/deal">{{transaction.title}}<br /></router-link>{{transaction.customer}}</p>
      <button>Сменить статус</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Order",
  props: ['transaction'],
};
</script>
<style lang="scss" scoped>
section div {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 20px;
  padding: 10px;
  position: relative;
  a {
    font-size: 1rem;
  }
  img {
    margin-right: 10px;
    width: 40px;
  }
  button {
    width: 120px;
    height: 30px;
    background-color: #39a098;
    border: 0;
    border-radius: 10px;
    position: absolute;
    padding: 0 10px;
    right: 25px;
  }
}
</style>