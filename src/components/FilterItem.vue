<template>
  <li :class="{'active' : !!actv}"><input  :id="id" name="filter" type="radio"><label :for="id">{{value}}</label></li>
</template>

<script>
  export default {
    name: 'FilterItem',
    props: ['value', 'id', 'actv']
  }
</script>

<style lang="scss" scoped>
  input[type='radio'] {
    display: none;
  }

  li {
    padding: .5rem;
    border-bottom: 1px solid #3c3c3c;
    cursor: pointer;
  }

  li:hover {
    background-color: #39a098;
    color: white;
  }

  .active{
    background-color: #39a098;
  }
</style>