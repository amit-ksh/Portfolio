<template>
  <div id="projects">
    <Header>Projects</Header>

    <div class="flex flex-wrap sm:mx-4 ml-2">
      <div
        v-for="project in projects"
        :id="project.title"
        ref="projectRef"
        :key="project.title"
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 sm:p-4 py-4"
        style="transform: translateX(-100vw)"
      >
        <Project
          :title="project.title"
          :description="project.description"
          :tech-stack="project.techStack"
          :image-url="project.image"
          :url="project.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { projects } from '~~/store/projects'

const projectRef = ref()

onMounted(() => {
  gsap.to(projectRef.value, {
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.1,
    ease: 'expo',
    delay: 3,
  })
})
</script>
