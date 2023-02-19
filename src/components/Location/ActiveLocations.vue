``
<script setup lang="ts">
interface LocationList {
	country: string;
	count: number;
}

const locationList: LocationList[] = [
	{ country: 'Australia', count: 98 },
	{ country: 'New Zealand', count: 70 },
	{ country: 'United States', count: 50 },
	{ country: 'France', count: 14 },
	{ country: 'Germany', count: 2 },
	{ country: 'India', count: 1 },
];
</script>

<template>
	<div class="active-locations">
		<span class="active-locations__title">Most Active Countries</span>
		<div class="active-locations__container">
			<table>
				<tbody>
					<tr
						v-for="location in locationList"
						:key="location.country"
					>
						<td class="active-locations__count">{{ location.count }}</td>
						<td class="active-locations__country">{{ location.country }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped lang="css">
.active-locations {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 20px;
	width: fit-content;
	min-width: 300px;
}

.active-locations__title {
	font-weight: bold;
	margin-bottom: 20px;
}

.active-locations__count {
	font-weight: bold;
	font-size: larger;
	width: 40px;
}

.active-locations__country {
	font-size: larger;
}

tr {
	line-height: 40px;
}
</style>
