<template>
  <h2
    ref="titleRef"
    class="text-white font-exo text-5xl mb-6 opacity-0 uppercase text-center"
    style="translate: 0 30px"
  >
    <slot />
  </h2>
</template>

<script setup>
import gsap from 'gsap'

const titleRef = ref(null)

onMounted(() => {
  setTimeout(() => {
    gsap.to(titleRef.value, {
      scrollTrigger: titleRef.value,
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'expo',
    })
  })
})
</script>
