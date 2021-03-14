<template>
   <div class="graphs">
     <Graph v-for="i of 15" :key="i"/>
   </div>
</template>

<script>
  import Graph from './Graph'
  export default {
    name: 'Graphs',
    components: {Graph}
  }
</script>

<style scoped lang="scss">
  .graphs{
    overflow-y: auto;
    height: 40vh;
    max-height: 40vh;
    margin: 10px 0;
  }
</style>