<template>
  <layout-main>
      <Loader v-if="loading"/>
      <section class="content" v-else>
        <ProfileLeft :user="userData"/>
        <ProfileRight/>
      </section>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import Header from '../components/Header'
  import ProfileLeft from '../components/ProfileLeft'
  import ProfileRight from '../components/ProfileRight'
  import Loader from '../components/Loader'

  export default {
    name: 'Profile',
    data: () => ({
      userData: {},
      loading: true,
    }),
    components: {Loader, Header, ProfileLeft, ProfileRight, LayoutMain},
    async mounted() {
      try {
        if (!this.$store.getters.getUserData) throw new Error()
        this.userData = await this.$store.dispatch('fetchUserData')
      } catch (e) {
        this.$router.push('/login')
      } finally {
        this.loading = false
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
