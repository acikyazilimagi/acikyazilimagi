export { default as Tabs } from "./tabs.svelte";
export { default as TabList } from "./tab-list.svelte";
export { default as TabPanel } from "./tab-panel.svelte";
export { default as Tab } from "./tab.svelte";

export interface TabItem {
	title: string;
	body: string;
}
