<template>
  <section>
    <div>
      <img src="./../assets/transact.png" alt="transact" />
      <p><router-link :to="'/deal/' + transaction.key">{{transaction.title}}<br /></router-link>{{transaction.customer}}</p>
      <div class="btn"><router-link :to="'/deal/' + transaction.key">Сменить статус</router-link></div>
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
  .btn {
    text-align: center;
    width: auto;
    height: 30px;
    background-color: #39a098;
    border: 0;
    border-radius: 10px;
    position: absolute;
    padding: 0 10px;
    right: 25px;
  }
  .btn a {
    color: white;
  }
}
</style>