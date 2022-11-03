<template>
  <div class="c-card flex flex-col h-full bg-white shadow-md hover:shadow-xl focus:shadow-xl rounded-lg overflow-hidden">
    <div class="relative pb-48 overflow-hidden">
        <img class="absolute inset-0 h-full w-full object-cover" :src="imageUrl" :alt="title">
    </div>
    <div class="p-4">
        <h4 class="mt-2 mb-2 font-bold">{{ title }}</h4>
        <p class="text-sm font-mono">{{ description }}</p>
    </div>
    <div class="flex flex-wrap flex-row mt-auto py-4 px-2 border-t border-b text-xs text-gray-700">
        <!-- GITHUB LINK -->
        <a
        v-if="url.github"
        :href="url.github"
        class="
          ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300
          focus:text-slate-500 dark:focus:text-slate-300
        "
        target="_blank"
        >
          <GithubLogo :label="title + ' on GitHub'" class="w-5 h-5" />
        </a>
        <!-- WEBSITE LINK -->
        <a
        v-if="url.website"
        :href="url.website"
        class="
          ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300
          focus:text-slate-500 dark:focus:text-slate-300
        "
        target="_blank"
        >
          <WebLogo :label="title + '\'s Website'" class="w-5 h-5" />
        </a>
    </div>
  </div>
</template>

<script setup>
import GithubLogo from '~/components/Logo/Github.vue';
import WebLogo from '~/components/Logo/Web.vue';

defineProps({
  title: String,
  description: String,
  imageUrl: String,
  url: {
    github: String,
    website: String,
  }
})
</script>

<style>
.c-card img {
    transition: transform .3s ease-in-out;
}

img:hover {
    transform: scale(1.05)
}

</style>