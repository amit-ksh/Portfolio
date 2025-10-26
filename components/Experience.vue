<template>
  <section id="achievement">
    <H2>Experience</H2>

    <div class="ml-6 md:mx-auto max-w-2xl">
      <Timeline :data="achievement"></Timeline>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievement = [
  {
    time: 'December 2024 - Present',
    title: 'Software Development Engineer',
    details: {
      company: '9AI',
    },
  },
  {
    time: 'June 2024 - November 2024',
    title: 'Frontend Developer Intern',
    details: {
      company: '9AI',
    },
  },
]
</script>
