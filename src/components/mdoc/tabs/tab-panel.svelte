<script>
	import { getContext } from 'svelte';
	import { TABS } from './tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<slot></slot>
{/if}
