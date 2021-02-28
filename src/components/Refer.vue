<template>
  <div class="referdiv">
    <h3>Справочники</h3>
    <Referitem />
  </div>
</template>

<script>
import Referitem from "./Referitem.vue";
export default {
  components: { Referitem },
  name: "Refer",
};
</script>
<style lang="scss" scoped>
.referdiv{
  background-color:white;

  h3 {
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>
