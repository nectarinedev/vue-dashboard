<script setup lang="ts">
interface SidebarList {
	name: string;
	link: string;
}

const sidebarList: SidebarList[] = [{ name: 'Overview', link: 'Traffic Source' }];
</script>

<template>
	<aside>
		<nav>
			<div class="sidebar">
				<ul>
					<RouterLink to="/"><li>Overview</li></RouterLink>
					<RouterLink to="/trafficsource"><li>Traffic Source</li></RouterLink>
				</ul>
			</div>
		</nav>
	</aside>
</template>

<style scoped lang="css">
.sidebar {
	width: 200px;
	background-color: white;
	display: flex;
	flex-direction: column;
}

a {
	text-decoration: none;
}

ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

li {
	width: 100%;
	padding: 13px 30px;
	font-weight: bold;
	font-size: large;
	width: 100%;
}

li:hover {
	background-color: #dee4ec;
}

li:active {
	background-color: #b6bfca;
}
</style>
