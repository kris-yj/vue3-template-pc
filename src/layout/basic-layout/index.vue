<template>
	<el-container class="main">
		<el-header class="header-wrap">
			<basic-header></basic-header>
		</el-header>
		<el-container class="container-wrap">
			<el-aside width="240px">
				<basic-aside></basic-aside>
			</el-aside>
			<el-main tyle="background: #f2f3f5">
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
import BasicHeader from './components/basic-header';
import BasicAside from './components/basic-aside';
</script>

<style scoped>
.main {
	width: 100% !important;
	height: 100% !important;
	overflow: hidden;
}
.header-wrap {
	padding: 0;
}
.container-wrap {
	background: #f4f8fb;
	overflow: hidden;
}
</style>
