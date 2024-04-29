<script lang="ts">
type Props = {
	slug: string;
	title: string;
	description: string;
	category: string;
	tags: Array<string>;
};
export let article: Props;
export let isLast: boolean = false;
</script>
<div class="article-preview hover:bg-theme-primary">
    <div class="flex-1">
        <h4 class="article-preview__title">
            <a href={`/${article.category}/${article.slug}`} title={article.title}>{article.title} &rarr;</a>
        </h4>
        <p class="article-preview__desc">
            {article.description}
        </p>
        <ul class="tag-list">
            {#each article.tags as tag}
                <a class="tag" href={`/articles/tags/${tag}`} title={tag}>{tag}</a>
            {/each}
        </ul>
    </div>
</div>
{#if !isLast}
    <hr class="my-4 text-theme-dark-primary"/>
{/if}
<style lang="postcss">
    .article-preview {
        @apply  flex gap-6 text-left;
    }
    .article-preview__title {
        @apply text-lg leading-tight font-semibold text-white mb-2;
    }
    .article-preview__desc {
        @apply text-base text-theme-dark-primary leading-5 line-clamp-2;
    }
    .tag-list {
        @apply list-none py-2 flex flex-wrap gap-2;
    }
    .tag {
        @apply inline-block text-xs px-4 py-1 rounded-full text-theme-primary bg-theme-dark-primary;
    }
</style>
