<template>
  <div class="relative h-full px-6 pt-12 pb-20">
    <div
      class="absolute !max-w-full min-h-screen h-full -inset-1 bg-gradient-to-r from-[#2a2a72] opacity-50 z-[-1]"
    ></div>

    <AboutMe />
    <Education class="my-20" />
    <Skills />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'with-header',
})

useHead({
  title: 'About | Amit Sharma',
})
</script>
