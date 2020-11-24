<template>
  <div :class="{'grid': showNav}" id="content">
      <Nav v-if="showNav"/>
      <router-view/>
  </div>
</template>
<script>
  import Nav from './components/Nav'

  export default {
    name: 'App',
    data: () => ({
      showNav: true
    }),
    components: {Nav},
    watch: {
      '$route': 'updateRoute'
    },
    methods:{
      updateRoute(){
        if (this.$route.path === '/login') {
          this.showNav = false
        }else{
          this.showNav = true
        }
      }
    }

  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #content {
    width: 80%;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 70px auto;
    gap: 10px;
  }

  body {
    background-color: #C0C0C0;
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #39A098;
    }
  }

</style>
