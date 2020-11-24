<template>

  
  <div class="contentRight">
    <Completed/>
   <DeadLine/>
   <WorkTime/>
  </div>
  
</template>

<script>
import Completed from "../components/Completed"
import DeadLine from "../components/DeadLine"
import WorkTime from "../components/WorkTime"
export default {
  name: "ProfileRight",
  components: {Completed,DeadLine,WorkTime},
  
};
</script>
<style lang="scss" scoped>

.contentRight{
    background-color: #ffffff;
}

</style>
