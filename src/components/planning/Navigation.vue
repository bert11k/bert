<template>
  <div class="navigation">
        <div class="navigation-btn" data-idx="0" :class="{'navigation-btn-active': active === 0}">
      На Год
  </div>
  <div class="navigation-btn" data-idx="1" :class="{'navigation-btn-active': active === 1}">
      На месяц
  </div>
  <div class="navigation-btn" data-idx="2" :class="{'navigation-btn-active': active === 2}">
      На неделю
  </div>
  </div>
  </template>

  <script>
  export default {
    name: 'Navigation',
    props: ['active'],
  }
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    background-color: #fff;
    gap: 10px;
    padding-left: 10px;

    &-btn {
      width: 100px;
      text-align: center;
      height: 100%;
      padding: 5px 0;
      user-select: none;

      &:hover, &-active {
        background-color: #39a098;
        cursor: pointer;
        color: white;
      }
    }
  }
</style>