<template>
  <div>
    <Header :fio="userData.fio"/>
    <section class="content">
      <ProfileLeft :user="userData"/>
      <ProfileRight/>
    </section>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import ProfileLeft from '../components/ProfileLeft'
  import ProfileRight from '../components/ProfileRight'

  export default {
    name: 'Profile',
    data:()=>({
      userData: {}
    }),
    components: {Header, ProfileLeft, ProfileRight},
    async mounted() {
      try {
        this.userData = await this.$store.dispatch('fetchUserData')
      }catch (e) {
         this.$router.push('/login')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    margin: 10px auto auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 3fr;
  }
</style>
