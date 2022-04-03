<template>
	<el-breadcrumb separator="/">
		<template v-for="(matchedRoute, index) in $route.matched" :key="index">
			<el-breadcrumb-item
				v-if="index === 0"
				:to="{ path: `${matchedRoute.path}` }">
				{{ matchedRoute.meta.title }}
			</el-breadcrumb-item>
			<el-breadcrumb-item v-else>
				{{ matchedRoute.meta.title }}
			</el-breadcrumb-item>
		</template>
	</el-breadcrumb>
</template>

<script setup></script>
