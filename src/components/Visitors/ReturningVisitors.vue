<script setup lang="ts"></script>

<template>
	<div class="returning-visitors">
		<span class="returning-visitors__title">Returning Visitors</span>
		<span class="returning-visitors__count">50</span>
		<span class="returning-visitors__comparison">36% since last week</span>
	</div>
</template>

<style scoped lang="css">
.returning-visitors {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 20px;
	width: fit-content;
	min-width: 300px;
}

.returning-visitors__title {
	font-weight: bold;
}

.returning-visitors__count {
	font-weight: bolder;
	font-size: 100px;
}

.returning-visitors__comparison {
	color: #6ebe71;
}
</style>
