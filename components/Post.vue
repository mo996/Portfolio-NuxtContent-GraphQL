<script setup>
const props = defineProps(['posts'])
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
    <NuxtLink :to="post._path">
      <img :src="`/images/blog/${post.cover}`" alt="Blog Post Cover Image" 
           class="w-auto h-auto object-cover"> 
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <NuxtLink :to="post._path"
        class="inline-block bg-orange-400 hover:bg-gray-700 text-amber-900 hover:text-white py-2 px-4 rounded-md float-right mb-8 transition-colors duration-200 ease-in-out">
        Read More
      </NuxtLink>
    </div>
  </div>
</template>
