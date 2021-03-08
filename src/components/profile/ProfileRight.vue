<template>

  
  <div class="contentRight">
    <Completed/>
   <DeadLine/>
   <WorkTime/>
  </div>
  
</template>

<script>
import Completed from "./Completed"
import DeadLine from "./DeadLine"
import WorkTime from "./WorkTime"
export default {
  name: "ProfileRight",
  components: {Completed,DeadLine,WorkTime},
  
};
</script>
<style lang="scss" scoped>

.contentRight{
    background-color: #ffffff;
  padding-bottom: 50px;
}

</style>
