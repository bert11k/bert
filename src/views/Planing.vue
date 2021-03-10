<template>
  <main-layout>
    <Loader v-if="loading" />
    <div></div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/LayoutMain";
import Loader from "../components/Loader";

export default {
  name: "Planing",
  components: { Loader, MainLayout },

  async mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.report {
  margin-top: 5px;
  background-color: #fff;
  padding: 30px;
}

input {
  margin: 10px 5px;
  width: 225px;
  height: 35px;
}

button {
  width: 225px;
  margin: 5px 5px;
  height: 35px;
  cursor: pointer;
  background-color: #39a098;
  border: 0;
}

select {
  display: block;
  margin: 10px 5px;
  width: 225px;
  height: 35px;
}
</style>
