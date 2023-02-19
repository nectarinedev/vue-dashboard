<script setup lang="ts">
interface PageList {
	url: string;
	count: number;
}

const pageList: PageList[] = [
	{ url: '/', count: 99 },
	{ url: '/overview', count: 70 },
	{ url: '/trafficsource', count: 50 },
	{ url: '/test', count: 14 },
	{ url: '/error', count: 2 },
];
</script>

<template>
	<div class="active-pages">
		<span class="active-pages__title">Most Active Page Views</span>
		<div class="active-pages__container">
			<table>
				<tbody>
					<tr
						v-for="page in pageList"
						:key="page.url"
					>
						<td class="active-pages__count">{{ page.count }}</td>
						<td class="active-pages__url">{{ page.url }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped lang="css">
.active-pages {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 20px;
	width: fit-content;
	min-width: 300px;
}

.active-pages__title {
	font-weight: bold;
	margin-bottom: 20px;
}

.active-pages__count {
	font-weight: bold;
	font-size: larger;
	width: 40px;
}

.active-pages__url {
	font-size: larger;
}

tr {
	line-height: 40px;
}
</style>
