<template>
  <li @click="click" :class="{'active' : !!actv}"><input :id="id" name="filter" type="radio"><label :for="id">{{value}}</label></li>
</template>

<script>
  export default {
    name: 'FilterItem',
    props: ['value', 'id', 'actv'],
    methods:{
      click(){
        this.$emit('selectFilter', this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  input[type='radio'] {
    display: none;
  }

  label{
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
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
    color: white;
    background-color: #39a098;
  }
</style>