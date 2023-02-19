<script setup lang="ts"></script>

<template>
	<div class="current-visitors">
		<span class="current-visitors__title">Current Active Visitors</span>
		<span class="current-visitors__count">7</span>
		<span class="current-visitors__comparison">4% since last week</span>
	</div>
</template>

<style scoped lang="css">
.current-visitors {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 20px;
	width: fit-content;
	min-width: 300px;
}

.current-visitors__title {
	font-weight: bold;
}

.current-visitors__count {
	font-weight: bolder;
	font-size: 100px;
}

.current-visitors__comparison {
	color: #6ebe71;
}
</style>
