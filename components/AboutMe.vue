<template>
  <section id="about">
    <Header>About Me</Header>

    <div
      ref="aboutRef"
      class="px-6 py-4 md:mx-auto ml-4 max-w-2xl text-white border-2 border-blue-700 border-solid rounded-sm opacity-0"
    >
      <div
        v-for="row in aboutme"
        :key="row.attr"
        class="text-xl font-mono mb-2"
      >
        <h3 class="font-bold text-xl md:text-2xl tracking-wide text-justify">
          {{ row.name }}
        </h3>
        <p class="text-sm md:text-lg">{{ row.value }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { aboutme } from '~/store/about'

const aboutRef = ref()

onMounted(() => {
  gsap.to(aboutRef.value, {
    opacity: 1,
    duration: 2,
    ease: 'sine.out',
  })
})
</script>
