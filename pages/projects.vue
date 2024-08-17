<script setup>
const query = gql`
{
  viewer {
    repositories(first: 8, orderBy:{field:CREATED_AT,direction: DESC}) {
      totalCount
      nodes {
        id
        name
        createdAt
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`

const { data, error } = await useAsyncQuery(query);
console.log(data);
console.log(error);
</script>

<template>
  <h1 class="text-3xl my-8 text-amber-900">Projects</h1>
  <p class="text-lg mb-8 text-gray-700">Here are some of my projects on GitHub.</p>
  <section class="grid grid-cols-2 gap-8">
    <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
      class="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <a :href="project.url" target="_blank" class="block mb-4">
        <h2 class="text-xl text-gray-900 font-semibold hover:text-orange-400 transition-colors">{{ project.name }}</h2>
      </a>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex items-center gap-4 text-gray-700">
        <span class="flex items-center">
          <Icon name="fontisto:star" size="1.1rem" class="text-orange-400 mr-1" /> 
          {{ project.stargazers.totalCount }}
        </span>
        <span class="flex items-center">
          <Icon name="system-uicons:branch" size="1.1rem" class="text-orange-400 mr-1" /> 
          {{ project.forks.totalCount }}
        </span>
        <span class="flex items-center">
          <Icon name="system-uicons:eye" size="1.1rem" class="text-orange-400 mr-1" /> 
          {{ project.watchers.totalCount }}
        </span>
      </div>
    </div>
  </section>
</template>
