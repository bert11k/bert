<template>
  <layout-main>
    <div class="deal">
    <Dealitem/>
    <Dealpred/>
        
  
    </div>
  </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import Dealitem from "../components/Dealitem.vue";
import Dealpred from "../components/Dealpred.vue";

export default {
  name: "Deal",
  components: { LayoutMain, Dealitem, Dealpred},
};
</script>
<style lang="scss" scoped>
.deal{
  padding-bottom: 50px;
  margin-top: 10px;
  background-color:white;
}
</style>
