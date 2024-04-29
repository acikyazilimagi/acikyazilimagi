<script lang="ts">
import { onMount } from "svelte";
import SearchIcon from "./search-icon.svelte";
import ArticleSearchPreview from "./article-search-preview.svelte";

let searchInput;
let searchableDocs;
let searchIndex;

let searchQuery = "";
let searchResults = [];

onMount(async () => {
	const lunr = (await import("lunr")).default;
	const resp = await fetch("/search-index.json");
	searchableDocs = await resp.json();
	// Initialize indexing
	searchIndex = lunr(function () {
		// the match key...
		this.ref("slug");

		// indexable properties
		this.field("title");
		this.field("description");
		this.field("tags");

		// Omit, if you don't want to search on `body`
		this.field("body");

		// Index every document
		searchableDocs.forEach((doc) => {
			this.add(doc);
		}, this);
	});
	searchInput.focus();
});

$: {
	if (searchQuery && searchQuery.length >= 3) {
		const matches = searchIndex.search(searchQuery);
		searchResults = [];
		matches.map((match) => {
			searchableDocs.filter((doc) => {
				if (match.ref === doc.slug) {
					searchResults.push(doc);
				}
			});
		});
	}
}
</script>
<div class="search">
    <div class="search__ctrl">
        <label for="search"><SearchIcon found={searchResults.length > 0} /></label>
        <input type="text" name="search" bind:this={searchInput} placeholder="Aradığınız anahtar kelimeleri girin" bind:value={searchQuery} />
    </div>
    <div class="search__results">
        {#if searchResults.length}
            {#each searchResults as article, i }
                <ArticleSearchPreview article={article} isLast={ i === searchResults.length - 1 } />
            {/each}
        {:else}
            <div class="search__results--none">
                {#if searchQuery.length}
                    Eşleşen bir kayıt bulunamadı
                {/if}
            </div>
        {/if}
    </div>
    <div class="note"><small>pencereyi kapatmak için dışına tıklayın</small></div>
</div>
<style>
    .search {
        @apply w-full relative bg-slate-700 p-8 rounded-md shadow-lg;
    }
    input {
        @apply w-full px-4 py-2 pl-10 text-xl font-semibold text-slate-600 border-0 shadow-inner rounded-md bg-slate-100 placeholder-theme-dark-primary;
    }
    .search__ctrl {
        @apply pb-4 relative;
    }
    .search__ctrl label {
        @apply text-theme-primary absolute top-2 left-2;
    }
    .search__results {
        @apply w-96 h-64 py-4 overflow-y-auto;
    }
    .search__results--none {
        @apply  text-center text-theme-dark-primary;
    }
    .note {
        @apply w-full text-center text-white;
    }
</style>
