<template>
	<div>
		<div>module-test</div>
		<div>
			<el-button @click="openMessage">element-plus按钮</el-button>
			<el-button type="primary" @click="apiTest" name="sadsd" hhh="sdsd">
				axios测试
			</el-button>
			<div
				type="primary"
				@click="apiTest"
				name="sadsd"
				hhh="sdsd"
				hsad="sadasd">
				sdasdad
			</div>
			<el-button type="danger" @click="apiTest2">axios测试2</el-button>
			<el-button type="success" @click="apiTest3">axios测试3</el-button>
			<el-button type="info" @click="toChild">模块子路由跳转</el-button>
			<!-- <div>{{ $t('hello') }}</div> -->
			<p>hello vue3 template</p>
			<div>国际化测试区域 {{ t('testName') }}</div>
		</div>
	</div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Api from '../api';

const { t } = useI18n();
const router = useRouter();

const openMessage = () => {
	ElMessageBox.alert(t('hello'));
};

const apiTest = () => {
	const url = 'configs';
	axios.post(url).then((res) => {
		console.log(res);
	});
};

const apiTest2 = () => {
	Api.getFiles().then((res) => {
		console.log(res);
	});
};

const apiTest3 = () => {
	Api.fileSearch().then((res) => {
		console.log(res);
	});
};

const toChild = () => {
	router.push({
		name: 'child',
	});
};
</script>
<style scoped>
p {
	color: var(--el-color-primary);
}
</style>
