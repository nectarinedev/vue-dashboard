<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
	<header>
		<nav>
			<div class="header">
				<RouterLink to="/">
					<Button>Dashboard</Button>
				</RouterLink>
			</div>
		</nav>
	</header>
</template>

<style scoped lang="css">
.header {
	height: 100px;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 70px;
	padding-right: 50px;
}
</style>
