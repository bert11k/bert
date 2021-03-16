<template>
  <layout-main>
    <Loader v-if="loading"/>
    <section class="content" v-else>
      <ProfileLeft :user="userData"/>
      <ProfileRight :completed="completed"/>
    </section>
  </layout-main>
</template>

<script>
  import LayoutMain from '../layouts/LayoutMain.vue'
  import ProfileLeft from '../components/profile/ProfileLeft'
  import ProfileRight from '../components/profile/ProfileRight'
  import Loader from '../components/Loader'

  export default {
    name: 'Profile',
    data: () => ({
      userData: {},
      completed: {
        perYear: null,
        perMonth: null,
        perWeek: null,
      },
      loading: true,
    }),
    components: {Loader, ProfileLeft, ProfileRight, LayoutMain},
    async mounted() {
      try {
        if (!this.$store.getters.getUserData) throw new Error()
        this.userData = await this.$store.dispatch('fetchUserData')
        await this.$store.dispatch('fetchDealersStatisticPerYear', {uid: true})
        this.completed.perYear = (this.$store.getters.getDealers)[0].percent
        await this.$store.dispatch('fetchDealersStatisticPerMonth', {uid: true})
        this.completed.perMonth = (this.$store.getters.getDealers)[0].percent
        await this.$store.dispatch('fetchDealersStatisticPerWeek', {uid: true})
        this.completed.perWeek = (this.$store.getters.getDealers)[0].percent
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
    margin: 5px auto auto;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 3fr;
  }
</style>
