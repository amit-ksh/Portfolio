<template>
  <div class="px-6 py-12 pb-20">
    <section id="projects">
      <H2>Projects</H2>
      <div class="flex flex-col gap-4">
        <Projects
          title="Web"
          :projects="web"
          :color="TailwindColors.green['400']"
        />
        <Projects
          title="AI & ML"
          :projects="ml"
          :color="TailwindColors.blue['400']"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TailwindColors from 'tailwindcss/colors'
import { ml, web } from '~/store/projects'

definePageMeta({
  layout: 'with-header',
})

useHead({
  title: 'Work',
})
</script>
