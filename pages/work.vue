<template>
  <div class="px-6 py-12 pb-20">
    <Projects />
  </div>
</template>

<script setup>
import gsap from 'gsap'

onMounted(() => {
  gsap.to(app, {
    opacity: 1,
  })
})
</script>
