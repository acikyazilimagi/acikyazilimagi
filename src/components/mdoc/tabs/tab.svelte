<script>
	import { getContext } from 'svelte';
	import { TABS } from './tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
        @apply bg-none border-b-2 border-solid border-white m-0 text-slate-400 px-4 py-1;
	}

	.selected {
        @apply border-b-2 border-solid border-slate-700 text-slate-700;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>
