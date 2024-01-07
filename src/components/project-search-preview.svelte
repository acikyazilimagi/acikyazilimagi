<script lang="ts">
    type Props = {
        slug: string
        title: string
        description: string
        category: string,
        tags: Array<string>
    }
    export let project: Props
    export let isLast: boolean = false
</script>
<div class="project-preview hover:bg-theme-primary">
    <div class="flex-1">
        <h4 class="project-preview__title">
            <a href={`/${project.category}/${project.slug}`} title={project.title}>{project.title} &rarr;</a>
        </h4>
        <p class="project-preview__desc">
            {project.description}
        </p>
        <ul class="tag-list">
            {#each project.tags as tag}
                <a class="tag" href={`/projects/tags/${tag}`} title={tag}>{tag}</a>
            {/each}
        </ul>
    </div>
</div>
{#if !isLast}
    <hr class="my-4 text-theme-dark-primary"/>
{/if}
<style lang="postcss">
    .project-preview {
        @apply  flex gap-6 text-left;
    }
    .project-preview__title {
        @apply text-lg leading-tight font-semibold text-white mb-2;
    }
    .project-preview__desc {
        @apply text-base text-theme-dark-primary leading-5 line-clamp-2;
    }
    .tag-list {
        @apply list-none py-2 flex flex-wrap gap-2;
    }
    .tag {
        @apply inline-block text-xs px-4 py-1 rounded-full text-theme-primary bg-theme-dark-primary;
    }
</style>
