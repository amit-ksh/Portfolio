<template>
  <div id="projects">
    <H2>Projects</H2>

    <div class="flex flex-wrap sm:mx-4 ml-2">
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
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'

import { projects } from '~/store/projects'

const projectsRef = ref()

onMounted(() => {
  setTimeout(() => {
    projectsRef.value.forEach((project) =>
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
