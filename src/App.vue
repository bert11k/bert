<template>
  <div v-if="!loading">
    <router-view />
  </div>
  <p v-else>1</p>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout;
      } else {
        return "Main";
      }
    },
  },
  mounted() {
    if (!this.$store.getters.getUserData) {
      this.$router.push("/login");
    }
    this.loading = false;
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #c0c0c0;
  font-family: "Nunito", sans-serif;
}

a {
  text-decoration: none;
  color: black;

  &:hover {
    color: #39a098;
  }
}
</style>
