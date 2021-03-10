<template>
  <div class="navigation">
    <div class="navigation-btn">
      На Год
    </div>
    <div class="navigation-btn navigation-btn-active">
      На месяц
    </div>
    <div class="navigation-btn">
      На неделю
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    background-color: #fff;
    gap: 10px;

    &-btn {
      width: 90px;
      height: 100%;
      padding: 5px;

      &:hover, &-active {
        background-color: #39a098;
        cursor: pointer;
        color: white;
      }
    }
  }
</style>