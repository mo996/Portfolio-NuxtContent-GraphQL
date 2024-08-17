<template>
    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
    <div class="my-8">
        <a v-for="tag in data.tags" :key="tag" :href="`/blog/tags/${tag}`"
            class="text-sm font-semibold inline-block py-2 px-4 rounded-md text-amber-900 bg-orange-400 uppercase last:mr-0 mr-4 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out">
            <Icon name="pajamas:label" size="1.5rem" class="text-amber-900 mr-2" /> {{ tag }}
        </a>
    </div>
</template>

<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
        .where({ _path: path })
        .findOne()
})
</script>
