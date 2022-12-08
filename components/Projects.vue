<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div
        id="project"
        ref="projectRef"
        v-for="project in projects"
        :key="project.title"
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4"
        style="transform: translateX(-100vw)"
      >
        <Project 
          :title="project.title" 
          :description="project.description" 
          :techStack="project.techStack"
          :imageUrl="project.image" 
          :url="project.url" 
        />
      </div>
    </div>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { projects } from '~/store/projects'

const projectRef = ref()

onMounted(() => {
  gsap.to(projectRef.value, {
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.1,
    ease: 'expo',
    delay: 0.3
  });
});
</script>
