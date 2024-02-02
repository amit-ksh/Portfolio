<template>
  <div ref="project" class="flex flex-col h-full bg-white shadow-md rounded-lg">
    <div class="relative pb-48 overflow-hidden border-4 rounded-lg shadow-lg">
      <img
        class="absolute inset-0 h-full w-full object-cover bg-black px-4"
        :src="imageUrl"
        :alt="title"
      />
    </div>
    <div class="p-4">
      <h2 class="mt-2">
        <span class="text-xl font-bold">{{ title }}</span>

        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs p-1 rounded-md text-white ml-2 whitespace-nowrap"
          :class="tag === 'ai-ml' ? 'bg-blue-400 ai-ml' : 'bg-green-400 web'"
          >#{{ tag }}</span
        >
      </h2>
      <p class="mt-2 text-sm font-mono text-justify">{{ description }}</p>
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
            :name="logoToName(tech) || tech"
            class="w-8 h-8"
          />
        </div>
      </div>

      <!-- LINKS -->
      <div
        class="flex flex-wrap flex-row py-4 px-2 border-t text-xs text-gray-700"
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
  tags: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.web {
  -webkit-box-shadow: 0px 0px 25px 3px rgba(74, 222, 128, 0.9);
  -moz-box-shadow: 0px 0px 25px 3px rgba(74, 222, 128, 0.9);
  box-shadow: 0px 0px 25px 3px rgba(74, 222, 128, 0.9);
}

.ai-ml {
  -webkit-box-shadow: 0px 0px 25px 3px rgba(96, 165, 250, 0.9);
  -moz-box-shadow: 0px 0px 25px 3px rgba(96, 165, 250, 0.9);
  box-shadow: 0px 0px 25px 3px rgba(96, 165, 250, 0.9);
}
</style>
