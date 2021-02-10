<template>
  <div v-if="!loading" :class="{grid: nav}">
    <div v-if="nav">      
      <Nav />
    </div>
    <router-view />
  </div>
  <p v-else>1</p>
</template>
<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {Nav},
  data() {
    return {
      loading: true,
      nav: false
    };
  },
  watch:{
    $route: "updateMav",
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
  methods: {
    updateMav(){
      this.$route.name.toLowerCase() !== 'login' ? this.nav = true : null
    }
  }

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

.grid{
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 71px auto;
}

a {
  text-decoration: none;
  color: black;

  &:hover {
    color: #39a098;
  }
}
</style>
