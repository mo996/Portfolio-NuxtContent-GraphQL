<template>
    <h1 class="text-3xl my-8">Projects</h1>
    <p class="text-lg mb-8">Here are some of my projects on GitHub.</p>
    <section class="grid grid-cols-2 gap-10">
        <div v-for="project in projects" :key="project.id" class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
            <a :href="project.url" target="_blank">
                <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
            </a>
            <p>{{ project.description }}</p>
            <div class="mt-4">
                <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: {{
                    project.stargazers.totalCount }}
                <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: {{
                    project.forks.totalCount }}
                <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{
                    project.watchers.totalCount }}
            </div>
        </div>
    </section>
</template>

<script setup>
import GetProjects from '~/graphql/queries/getProjects.gql'

const { data: projectsData } = await useAsyncData('projects', () => Gql(GetProjects))

const projects = projectsData.value?.viewer?.repositories?.nodes || []
</script>