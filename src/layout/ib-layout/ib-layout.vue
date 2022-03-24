<template>
	<div class="container">
		<ib-header class="header"></ib-header>
		<div class="main-container">
			<ib-aside class="aside"></ib-aside>
			<ib-main class="main">
				<router-view></router-view>
			</ib-main>
		</div>
	</div>
</template>

<script setup>
import IbHeader from './components/ib-header';
import IbAside from './components/ib-aside';
import IbMain from './components/ib-main';
</script>

<style scoped>
.container {
	width: 100%;
	height: 100%;
}
.header {
	position: fixed;
	width: 100%;
	height: 60px;
	border-radius: 10px 10px 20px 20px;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0px 4px 30px 0px rgb(217 225 232 / 59%);
}
.main-container {
	display: flex;
	box-sizing: border-box;
	height: 100%;
	padding-top: 60px;
	overflow: hidden;
}
.aside {
	width: 240px;
	box-sizing: border-box;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0px 4px 30px 0px rgb(217 225 232 / 59%);
	overflow-y: auto;
	overflow-x: hidden;
}
.main {
	flex: 1;
	overflow: auto;
	padding: 23px 20px;
}
</style>
