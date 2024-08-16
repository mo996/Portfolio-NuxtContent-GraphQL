<template>
    <footer class="bg-gray-800 py-6 text-gray-300">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <p>&copy; Aethelind Starlight {{ new Date().getFullYear() }}. All Rights Reserved</p>
        <nav class="flex gap-4 mt-4 sm:mt-0">
          <a v-for="link in links" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer" aria-label="Visit our [link.name] page">
            <Icon :name="link.icon" size="1.5rem" class="text-gray-300 hover:text-white transition-colors duration-300" />
          </a>
        </nav>
      </div>
    </footer>
  </template>
  
  <script setup>
  const links = [
    { name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'entypo-social:twitter' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'entypo-social:facebook' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'entypo-social:linkedin-with-circle' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'entypo-social:instagram' }
  ]
  </script>