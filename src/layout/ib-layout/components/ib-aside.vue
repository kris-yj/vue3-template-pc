<template>
	<div class="menu-wrap">
		<el-menu default-active="1" class="menu">
			<el-menu-item index="1">
				<el-icon><icon-menu /></el-icon>
				<span>工时填报</span>
			</el-menu-item>
			<el-menu-item index="2">
				<el-icon><setting /></el-icon>
				<span>工时审核</span>
			</el-menu-item>
			<el-menu-item index="3">
				<el-icon><Document /></el-icon>
				<span>历史审核</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script setup>
import { Setting, Document, Menu as IconMenu } from '@element-plus/icons-vue';
</script>

<style scoped>
.menu-wrap {
	padding-top: 69px;
	padding-right: 10px;
}
.menu {
	--el-menu-active-color: #0d4ded;
	--el-menu-text-color: #393b41;
	--el-menu-item-font-size: 16px;
	--el-menu-border-color: transparent;
	--el-menu-item-height: 48px;
	font-weight: 500;
}
.el-menu-item {
	color: #0d4ded;
	border-left: 4px solid transparent;

	&.is-active {
		background-color: var(--el-menu-hover-bg-color);
		border-radius: 4px;
		border-left: 4px solid #0d4ded;
	}
}
</style>
