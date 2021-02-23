<template>
	<div id="content" v-if="!loading">
		<Header :fio="userdata.fio"/>
		<slot @userdata="userdata" />
	</div>
</template>

<script>
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";
export default {
	name: "mainLayout",
	components: { Header, Nav },
	data: () => ({
		userdata: null,
		loading: true
	}),
	watch: {
		$route: "updateRoute",
	},
	mounted() {
		this.userdata = this.$store.getters.getUserData
		this.loading = false
	},
};
</script>
<style lang="scss">
#content {
	position: relative;
}
</style>
