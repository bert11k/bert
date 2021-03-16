<template>
  <div class="contentRight">
    <Completed :completed="completed"/>
    <DeadLine/>
    <WorkTime/>
  </div>
</template>

<script>
  import Completed from './Completed'
  import DeadLine from './DeadLine'
  import WorkTime from './WorkTime'

  export default {
    name: 'ProfileRight',
    props: ['completed'],
    components: {Completed, DeadLine, WorkTime},
  }
</script>
<style lang="scss" scoped>
  .contentRight {
    background-color: #ffffff;
    padding-bottom: 50px;
  }
</style>
