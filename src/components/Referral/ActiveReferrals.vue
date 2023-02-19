<script setup lang="ts">
interface ReferralList {
	url: string;
	count: number;
}

const referralList: ReferralList[] = [
	{ url: 'DIRECT', count: 99 },
	{ url: 'google', count: 70 },
	{ url: 'reddit', count: 50 },
	{ url: 'facebook', count: 14 },
	{ url: 'twitter', count: 2 },
];
</script>

<template>
	<div class="active-referrals">
		<span class="active-referrals__title">Most Active Referrals</span>
		<div class="active-referrals__container">
			<table>
				<tbody>
					<tr
						v-for="referral in referralList"
						:key="referral.url"
					>
						<td class="active-referrals__count">{{ referral.count }}</td>
						<td class="active-referrals__url">{{ referral.url }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped lang="css">
.active-referrals {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 20px;
	width: fit-content;
	min-width: 300px;
}

.active-referrals__title {
	font-weight: bold;
	margin-bottom: 20px;
}

.active-referrals__count {
	font-weight: bold;
	font-size: larger;
	width: 40px;
}

.active-referrals__url {
	font-size: larger;
}

tr {
	line-height: 40px;
}
</style>
