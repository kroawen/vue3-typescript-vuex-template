<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent, provide, watch } from 'vue';
import { useStore } from './store';
import api from '@/api';
import axios from 'axios';

export default defineComponent({
	name: 'App',
	setup() {
		// use store
		const store = useStore();

		// state
		const appState = store.state.APP;

		// use provide
		provide('app', {
			...store,
			api,
			axios,
		});

		watch(
			() => appState?.appInfo?.name,
			(newName) => {
				document.title = newName || appState?.appInfo?.name;
			}
		);

		return {
			appState,
		};
	},
});
</script>

<style lang="scss" scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
