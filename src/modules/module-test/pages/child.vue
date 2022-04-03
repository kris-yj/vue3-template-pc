<template>
	<div>
		<div>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">
					工时填报
				</el-breadcrumb-item>
				<el-breadcrumb-item>工时填报详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div>Child</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

console.log(useRouter().currentRoute.value);
</script>
