<template>
	<div class="menu-wrap" :class="{ 'menu-collapse': isCollapse }">
		<div class="collapse-area">
			<div class="collapse-btn" @click="collapseClick">
				<el-icon color="#0d4ded">
					<fold />
				</el-icon>
			</div>
		</div>
		<div class="menu-content">
			<el-menu
				class="menu"
				:collapse="isCollapse"
				:router="true"
				default-active="module-test">
				<el-menu-item index="sdsd">
					<el-icon><icon-menu /></el-icon>
					<template #title>工时填报</template>
				</el-menu-item>
				<el-menu-item index="module-test">
					<el-icon><setting /></el-icon>
					<template #title>工时审核</template>
				</el-menu-item>
				<el-menu-item index="3">
					<el-icon><Document /></el-icon>
					<template #title>历史审核</template>
				</el-menu-item>
			</el-menu>
		</div>
		<div v-show="!isCollapse" class="menu-pic">
			<img src="@/assets/images/p.png" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import {
	Setting,
	Document,
	Fold,
	Menu as IconMenu,
} from '@element-plus/icons-vue';

const isCollapse = ref(false);

const collapseClick = () => {
	isCollapse.value = !isCollapse.value;
};
</script>

<style scoped>
.menu-wrap {
	display: flex;
	flex-direction: column;
	padding-right: 10px;
	padding-bottom: 30px;
	transition: width 0.28s;

	&.menu-collapse {
		padding-right: 0px;

		.collapse-btn {
			margin-right: 10px;
		}
	}
}
.menu-content {
	flex: 1;
	flex-shrink: 0;
}
.menu {
	--el-menu-active-color: #0d4ded;
	--el-menu-text-color: #393b41;
	--el-menu-item-font-size: 16px;
	--el-menu-border-color: transparent;
	--el-menu-item-height: 48px;
	width: 230px;

	&.el-menu--collapse {
		width: 64px;
	}
}
.collapse-area {
	height: 68px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-shrink: 0;
}
.collapse-btn {
	height: 36px;
	width: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #e7eefe;
	border-radius: 25px;
	font-size: 20px;
	cursor: pointer;
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
