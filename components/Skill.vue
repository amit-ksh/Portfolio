<template>
  <div class="mb-8">
    <h3
      class="relative mb-4 text-white mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
    >
      <span class="block after:block after:mt-1 after:h-[2px] after:bg-white">{{
        props.title
      }}</span>
    </h3>
    <div
      class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-[#ffffff11] rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
</script>

<style scoped>
h3 {
  --width: 0;
}

h3 span::after {
  width: var(--width);
}
.skill {
  margin: 0 auto;
}
.skill img {
  width: 80px;
  height: 80px;
}

.skill img:hover {
  scale: 1.05;
}
</style>
