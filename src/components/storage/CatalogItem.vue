<template>
  <div class="item">
    <div>
      <img :src="item.img" alt="img">
      <div class="info">
        <div>
          <h3>{{item.title}}</h3>
        </div>
        <div>
          <p>Категория: {{item.category}}</p>
          <p>Наличие: {{item.num}}{{item.type}}</p>
        </div>
      </div>
    </div>
    <div class="cost">
      <p><span @click="delItem">&xotime;</span> <br> Цена за 1 у.е.: <br> {{item.cost}}р.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogItem',
    props: ['item'],
    emits: ['delItem'],
    methods:{
      delItem(){
        this.$emit('delItem', {key: this.item.key, img: this.item.photoName})
      },
    }
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

    .cost{
      p{
        text-align: right;
        span{
          cursor: pointer;
        }
      }
    }

    div {
      display: flex;

      .info {
        display: grid;
        grid-template-rows: 1fr 1fr;
        margin-left: 1rem;

        p {
          display: inline-block;
          margin-right: 1rem;
        }
      }
    }

    .cost {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }

  }

</style>