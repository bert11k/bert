<template>
<div>
  <Nav/>
  <router-view/>
  </div>
</template>
<script>
import Nav from "./components/Nav"


export default {
  name: "App",
  components: {Nav},
  
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #C0C0C0;
  font-family: 'Exo', sans-serif;
 }
 a{
   text-decoration: none;
   color: black;
   &:hover{
     color: #39A098;
   }
 }
 
</style>
