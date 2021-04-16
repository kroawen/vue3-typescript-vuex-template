<template>
	<div class="home">
		<div>
			<h1>示例</h1>
			<h3>{{ count }}</h3>
			<button @click="onIncrease">+</button>
			<button @click="onDecrease">-</button>
		</div>

		<div>
			<h1>使用vuex</h1>
			<h3>app名称：{{ appName }}</h3>
			<input @input="onInput" placeholder="输入名称" />
		</div>

		<div>
			<h1>使用组合式API</h1>
			<h3>窗口宽度{{ width }}</h3>
			<h3>窗口高度{{ height }}</h3>
		</div>
	</div>
</template>

<script lang="ts">
import store, { AllActionTypes } from '@/store';
import { computed, defineComponent, ref } from 'vue';
import useWindowSize from '@/composables/use-window-size';

export default defineComponent({
	setup() {
		const count = ref<number>(0);

		function onIncrease() {
			count.value += 1;
		}

		function onDecrease() {
			count.value -= 1;
		}

		const appName = computed(() => store.state.APP.appInfo.name);

		// window size
		const { width, height } = useWindowSize();

		function onInput(event: InputEvent) {
			let value = (event.target as HTMLInputElement).value;

			store.dispatch(AllActionTypes.APP.SetAppName, value);
		}

		return { count, onIncrease, onDecrease, appName, onInput, width, height };
	},
});
</script>

<style lang="scss" scoped>
.home {
	margin: 0 auto;

	width: 900px;
	display: flex;
	justify-content: space-around;
	flex-direction: row;
}
</style>
