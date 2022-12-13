<template>
  <div
    class="c-card flex flex-col h-full bg-white shadow-md hover:shadow-xl focus:shadow-xl rounded-lg overflow-hidden"
  >
    <div class="relative pb-48 overflow-hidden">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="imageUrl"
        :alt="title"
      />
    </div>
    <div class="p-4">
      <h2 class="text-xl mt-2 mb-2 font-bold">{{ title }}</h2>
      <p class="text-sm font-mono">{{ description }}</p>
    </div>
    <div class="mt-auto">
      <!-- TECH STACK -->
      <div class="px-4 py-2">
        <h3 class="font-semibold">Tech Stack</h3>

        <div class="flex gap-4 flex-wrap my-2">
          <Logo
            v-for="tech in techStack"
            :key="tech"
            :logo="tech"
            :name="logoToName(tech)"
            class="w-8 h-8"
          />
        </div>
      </div>

      <!-- LINKS -->
      <div
        class="flex flex-wrap flex-row py-4 px-2 border-t border-b text-xs text-gray-700"
      >
        <!-- GITHUB LINK -->
        <a
          v-if="url.github"
          :href="url.github"
          class="ml-6 block"
          target="_blank"
        >
          <Logo
            logo="github"
            :name="title + ' on GitHub'"
            :show-tooltip="false"
            class="w-5 h-5 cursor-pointer"
          />
        </a>
        <!-- WEBSITE LINK -->
        <a
          v-if="url.website"
          :href="url.website"
          class="ml-6 block"
          target="_blank"
        >
          <Logo
            logo="web"
            :name="title + '\'s Website'"
            :show-tooltip="false"
            class="w-5 h-5 cursor-pointer"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { logoToName } from '~/utils/helpers'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  techStack: {
    type: Array,
    required: true,
  },
  url: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}
</style>
