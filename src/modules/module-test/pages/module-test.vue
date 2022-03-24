<template>
	<div>
		<div>module-test</div>
		<div>
			<el-button @click="openMessage">element-plus按钮</el-button>
			<!-- <div>{{ $t('hello') }}</div> -->
			<p>hello vue3 template</p>
			<div>国际化测试区域 {{ t('testName') }}</div>
		</div>
	</div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const openMessage = () => {
	ElMessageBox.alert(t('hello'));
};
</script>
<style scoped>
p {
	color: var(--el-color-primary);
}
</style>
