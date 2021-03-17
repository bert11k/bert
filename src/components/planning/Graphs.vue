<template>
   <div class="graphs">
     <Graph v-for="dealer of dealers" :dealer="dealer" :target="targets" :key="dealer.fio"/>
   </div>
</template>

<script>
  import Graph from './Graph'
  export default {
    name: 'Graphs',
    props: ['dealers', 'targets'],
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