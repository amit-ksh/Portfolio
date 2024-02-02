<template>
  <div class="px-6 py-12 pb-20">
    <section id="projects">
      <H2>Projects</H2>
      <div class="flex flex-col gap-8">
        <Projects title="Web" :projects="web" color="green" />
        <Projects title="AI & ML" :projects="ml" color="blue" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ml, web } from '~/store/projects'

definePageMeta({
  layout: 'with-header',
})

useHead({
  title: 'Work',
})
</script>
