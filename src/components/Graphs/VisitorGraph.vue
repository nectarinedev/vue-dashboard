<script setup lang="ts">
import { ref } from 'vue';
import Chart from 'primevue/chart';

const lineStylesData = ref({
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Unique Visitors',
			data: [12, 13, 75, 53, 24, 45, 78],
			fill: false,
			tension: 0.4,
			borderColor: 'black',
		},
		{
			label: 'Returning Visitors',
			data: [1, 7, 3, 46, 24, 90, 36, 46],
			fill: false,
			borderDash: [5, 5],
			tension: 0.4,
			borderColor: 'red',
		},
		{
			label: 'Current Active Visitors',
			data: [12, 57, 33, 46, 35, 64, 23],
			fill: true,
			borderColor: 'green',
			tension: 0.4,
			backgroundColor: 'rgba(255,167,38,0.2)',
		},
	],
});

const basicOptions = ref({
	plugins: {
		legend: {
			labels: {
				color: '#495057',
			},
		},
	},
	scales: {
		x: {
			ticks: {
				color: '#495057',
			},
			grid: {
				color: '#ebedef',
			},
		},
		y: {
			ticks: {
				color: '#495057',
			},
			grid: {
				color: '#ebedef',
			},
		},
	},
});

const width = 1000;
const height = 300;
</script>

<template>
	<div class="visitor-graph">
		<h2>Visitor Graph</h2>
		<Chart
			type="line"
			:width="width"
			:height="height"
			:data="lineStylesData"
			:options="basicOptions"
		/>
	</div>
</template>

<style>
.visitor-graph {
	background-color: white;
	border-radius: 20px;
	padding: 10px;
}
</style>
