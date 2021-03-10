<template>
  <main-layout>
    <Loader v-if="loading" />
    <div class="planing">
      
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/LayoutMain";
import Loader from "../components/Loader";

export default {
  name: "Planing",
  data(){
    return{
      loading: true,
    }
  },
  components: { Loader, MainLayout },
  async mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.planing{
  background-color: #fff;
  margin-top: 5px;
  height: calc(100% - 105px);
}
</style>
