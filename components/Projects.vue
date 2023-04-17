<template>
  <div id="projects">
    <H2>Projects</H2>

    <div class="flex flex-wrap sm:mx-4 ml-2">
      <div
        v-for="project in projects"
        :id="project.title"
        :key="project.title"
        ref="projectRef"
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
import { ScrollTrigger } from 'gsap/all'

import { projects } from '~/store/projects'

const projectRef = ref()

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.batch(projectRef.value, {
      onEnter: (batch) => {
        batch.forEach((project, index) =>
          gsap.fromTo(
            project,
            { x: '-100vw' },
            {
              scrollTrigger: project.value,
              x: 0,
              stagger: 0.2,
              duration: 2,
              ease: 'expo',
              delay: index * 0.2,
            }
          )
        )
      },
      once: true,
    })
  }, 3000)
})
</script>
