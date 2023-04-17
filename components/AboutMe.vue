<template>
  <section id="about">
    <H2>About Me</H2>

    <div
      ref="aboutRef"
      class="px-6 py-4 md:mx-auto ml-4 max-w-2xl text-white border-2 border-white border-solid rounded-lg bg-[#ffffff11]"
    >
      <div
        v-for="row in aboutme"
        :key="row.attr"
        class="text-xl font-mono mb-2"
      >
        <h2 class="font-bold text-xl md:text-2xl tracking-wide text-justify">
          {{ row.name }}
        </h2>
        <p class="text-sm md:text-lg text-justify">{{ row.value }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { aboutme } from '~~/store/about'

const aboutRef = ref()

onMounted(() => {
  gsap.fromTo(
    aboutRef.value,
    { xPercent: 0 },
    {
      opacity: 1,
      duration: 2,
      ease: 'sine.out',
      delay: 3,
    }
  )
})
</script>
