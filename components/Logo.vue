<template>
  <img :src="`/assets/svg/${logo}.svg`" :alt="name" />
</template>

<script setup>
defineProps({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>