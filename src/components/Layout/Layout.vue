<script setup lang="ts">
import Header from './Header.vue';
import SideBar from './SideBar.vue';
</script>

<template>
	<Header />
	<div class="content">
		<div class="sidebar">
			<SideBar />
		</div>
		<slot></slot>
		<div />
	</div>
</template>

<style scoped lang="css">
.content {
	margin-top: 20px;
	display: flex;
}

.sidebar {
	position: block;
	margin-left: 100px;
	margin-right: 100px;
}
</style>
