<script setup lang="ts"></script>

<template>
	<div class="unique-visitors">
		<span class="unique-visitors__title">Unique Visitors</span>
		<span class="unique-visitors__count">200</span>
		<span class="unique-visitors__comparison">17% since last week</span>
	</div>
</template>

<style scoped lang="css">
.unique-visitors {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 20px;
	width: fit-content;
	min-width: 300px;
}

.unique-visitors__title {
	font-weight: bold;
}

.unique-visitors__count {
	font-weight: bolder;
	font-size: 100px;
}

.unique-visitors__comparison {
	color: #6ebe71;
}
</style>
