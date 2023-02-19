<script setup lang="ts">
import UniqueVisitors from '@/components/Visitor/UniqueVisitors.vue';
import ReturningVisitors from '@/components/Visitor/ReturningVisitors.vue';
import CurrentVisitors from '@/components/Visitor/CurrentVisitors.vue';
import ActivePages from '@/components/Page/ActivePages.vue';
import ActiveLocations from '@/components/Location/ActiveLocations.vue';
</script>

<template>
	<main>
		<div class="visitors__container">
			<UniqueVisitors />
			<ReturningVisitors />
			<CurrentVisitors />
		</div>
		<div class="summary__container">
			<ActivePages />
			<ActiveLocations />
		</div>
	</main>
</template>

<style lang="css">
main {
	display: flex;
	flex-direction: column;
	gap: 50px;
	margin: 50px;
}

.visitors__container {
	display: flex;
	gap: 50px;
}

.summary__container {
	display: flex;
	gap: 50px;
}
</style>
