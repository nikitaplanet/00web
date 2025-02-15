<template>
	<div>
		<!--左側欄-->
		<SideBar />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script lang="ts" setup>
import SideBar from '@components/organisms/SideBar.vue';
</script>

<style scoped></style>
