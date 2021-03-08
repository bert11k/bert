<template>
  <div class="item">
    <div>
      <img alt="img" src="../../assets/placeholder.jpg">
      <div class="info">
        <div><h3>{{item.title}}</h3></div>
        <div>
          <p>Категория: {{item.category}}</p>
          <p>Тип: {{item.type}}</p>
          <p>Наличие: {{item.num}}</p>
        </div>
      </div>
    </div>
    <div class="cost">
      <p>Цена: <br> {{item.cost}}р.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogItem',
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  .item {
    border: 1px solid #3c3c3c;
    height: 100px;
    padding: .5rem;
    position: relative;
    margin-bottom: 1rem;

    img {
      width: 80px;
      height: 80px;
    }

    div{
      display: flex;
      .info {
        display: grid;
        grid-template-rows: 1fr 1fr;
        margin-left: 1rem;

        p{
          display: inline-block;
          margin-right: 1rem;
        }
      }
    }
    .cost{
      position: absolute;
      right: 1rem;
      top: 1rem;
    }

  }

</style>