<template>
  <div class="progress">
    <div class="done">
      Выполенено:<br/>
      125 000 руб.
    </div>
    <div class="stay">
      Осталось:<br/>
      125 000 руб.
    </div>
    <div class="completed">
      План выполнен на:<br/>
      50%
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Progress'
  }
</script>

<style scoped lang="scss">
  .progress {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  div {
    text-align: center;
    font-size: 1.4rem;
    padding: 50px;
  }

  .done {
    background-color: #39a098;
    color: white;
  }

  .stay {
    background-color: #c4c4c4;
  }

  .completed {
    color: white;
    background-color: #374664;
  }
  }
</style>