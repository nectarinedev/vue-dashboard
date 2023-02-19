<script setup lang="ts">
import UniqueVisitors from '@/components/Visitor/UniqueVisitors.vue';
import ReturningVisitors from '@/components/Visitor/ReturningVisitors.vue';
import CurrentVisitors from '@/components/Visitor/CurrentVisitors.vue';
import ActivePages from '@/components/Page/ActivePages.vue';
import ActiveLocations from '@/components/Location/ActiveLocations.vue';
import ActiveReferrals from '@/components/Referral/ActiveReferrals.vue';
import VisitorGraph from '@/components/Graphs/VisitorGraph.vue';
</script>

<template>
	<main>
		<div class="visitors__container">
			<UniqueVisitors />
			<ReturningVisitors />
			<CurrentVisitors />
		</div>
		<div>
			<VisitorGraph />
		</div>
		<div class="summary__container">
			<ActivePages />
			<ActiveLocations />
			<ActiveReferrals />
		</div>
	</main>
</template>

<style lang="css">
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
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
