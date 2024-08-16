<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
    queryContent('/blog')
        .sort({ data: 1 })
        .limit(3)
        .find()
)
</script>

<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">👋🏻 Hello, I'm Aethelind Starlight!</h1>
        <p class="text-base text-gray-900 p-2 italic">Spring and Vue Developer</p>
    </section>
    <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4">
            <h2 class="text-3xl font-bold mt-8">Crafting Digital Experiences with Spring and Vue</h2>
            <p class="text-lg py-2">
                I'm a dedicated full-stack developer based in the energetic city of Berlin. I thrive on bringing ideas
                to life through clean, efficient, and user-friendly web applications.
            </p>
            <p class="text-lg py-2">
                With over 10 years of experience, I've honed my skills in Spring and Vue.js, crafting robust backends
                and dynamic frontends that deliver seamless user experiences.
            </p>
            <p class="text-lg py-2">
                When I'm not coding, you'll find me attending tech meetups, cycling along the Spree River, or brewing my
                own craft beer at home.
            </p>
        </div>

        <img src="../assets/images/avatar.svg" class="w-1/2 md:max-w-sm p-8 mx-auto"
            alt="A portrait of a smiling woman with short brown hair, wearing a colorful scarf">
    </section>

    <section>
        <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
        <div class="grid md:grid-cols-3 pt-8 gap-10">
            <Post :posts="posts" />
        </div>
    </section>
</template>