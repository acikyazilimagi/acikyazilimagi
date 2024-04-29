<script lang="ts">
import SearchIcon from "./search-icon.svelte";
import { isSearchVisible } from "../store/search";

function showSearchDialog() {
	isSearchVisible.set(true);
}
</script>
<button on:click={showSearchDialog}>
    <SearchIcon />
</button>
