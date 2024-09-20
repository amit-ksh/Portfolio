<template>
  <div class="px-6 py-12 pb-20 flex flex-col gap-12">
    <Experience />
    <Achievement />
    <Projects />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'with-header',
})

useHead({
  title: 'Work | Amit Sharma',
})
</script>
