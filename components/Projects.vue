<template>
  <section id="projects">
    <H2>Projects</H2>
    <div class="flex flex-col gap-8">
      <ProjectGroup title="Web" :projects="web" />
      <ProjectGroup title="AI & ML" :projects="ml" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ml, web } from '~/store/projects'
</script>
