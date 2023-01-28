<template>
  <div class="h-full px-6 pt-12 pb-20">
    <div
      ref="blueBG"
      class="absolute !max-w-full min-h-[100vh] -inset-1 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] opacity-50 z-[-1]"
    ></div>

    <AboutMe />
    <Education />
    <Skills />
  </div>
</template>

<script setup>
import { getTotalHeight } from '~~/utils/helpers'

const blueBG = ref()

onMounted(() => {
  blueBG.value.style.height = getTotalHeight() + 'px'
  addEventListener('resize', () => {
    blueBG.value.style.height = getTotalHeight() + 'px'
  })
})
</script>
