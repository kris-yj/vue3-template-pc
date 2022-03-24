<template>
	<div class="menu-wrap">
		<div class="collapse-area">
			<!-- <div class="collapse"></div> -->
		</div>
		<div class="menu-content">
			<el-menu default-active="1" class="menu" :collapse="false">
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
		<div class="menu-pic">
			<img src="@/assets/images/p.png" />
		</div>
	</div>
</template>

<script setup>
// import { ref } from 'vue';
import { Setting, Document, Menu as IconMenu } from '@element-plus/icons-vue';

// const isCollapse = ref(false);

// const collapse = () => {
// 	isCollapse.value = !isCollapse.value;
// };
</script>

<style scoped>
.menu-wrap {
	padding-right: 10px;
}
.menu-content {
	height: calc(100% - 328px);
}
.menu {
	--el-menu-active-color: #0d4ded;
	--el-menu-text-color: #393b41;
	--el-menu-item-font-size: 16px;
	--el-menu-border-color: transparent;
	--el-menu-item-height: 48px;
	/* font-weight: 500; */
}
.collapse-area {
	height: 68px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.collapse {
	height: 36px;
	width: 36px;
	border: 1px solid #333333;
}
.el-menu-item {
	color: #0d4ded;
	border-left: 4px solid transparent;
	&.is-active {
		background-color: var(--el-menu-hover-bg-color);
		border-radius: 4px;
		border-left: 4px solid #0d4ded;
		font-weight: 500;
	}
}
.menu-pic {
	width: 220px;
	height: 230px;
	padding-left: 10px;
	img {
		width: 220px;
		height: 230px;
	}
}
</style>
