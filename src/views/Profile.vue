<template>
<div>
 <Header/>
  
  <section class="content">
   <ProfileLeft/>
   <ProfileRight/>
  </section>
  </div>
</template>

<script>
import Header from "../components/Header"
import ProfileLeft from "../components/ProfileLeft"
import ProfileRight from "../components/ProfileRight"

export default {
  name: "Profile",
  components: {Header, ProfileLeft,ProfileRight},
  
};
</script>
<style lang="scss" scoped>
.content{
margin: auto;
margin-top:10px;
display: grid;
grid-gap: 10px;
grid-template-columns: 1fr 3fr;

width: 80%;


}
</style>
