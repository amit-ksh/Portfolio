<template>
  <div class="sm:mx-4 ml-2">
    <h3
      class="capitalize text-3xl text-center font-medium sm:mx-4 px-2 border-current border-y-2"
      :class="`text-${color}-400`"
    >
      {{ title }}
    </h3>
    <div class="flex flex-wrap">
      <div
        v-for="project in projects"
        :id="project.title"
        :key="project.title"
        ref="projectsRef"
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 sm:p-4 py-4 opacity-0"
        style="transform: translateY(2vw)"
      >
        <Project
          :title="project.title"
          :description="project.description"
          :tech-stack="project.techStack"
          :image-url="project.image"
          :url="project.url"
          :tags="project.tags"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * DON'T REMOVE BELOW CLASSES:
 * Tailwind classes will not load if we remove below classes
 * text-green-400 text-blue-400
 */
import gsap from 'gsap'

import { type Project } from '~/store/projects'

defineProps<{
  projects: Project[]
  title: string
  color: 'green' | 'blue'
}>()

const projectsRef = ref()

onMounted(() => {
  setTimeout(() => {
    projectsRef.value.forEach((project: HTMLElement) =>
      gsap.fromTo(
        project,
        { y: '2vw' },
        {
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'expo',
        }
      )
    )
  }, 3000)
})
</script>
