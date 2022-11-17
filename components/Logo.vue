<template>
  <img :src="`/svg/${logo}.svg`" :alt="name" class="m-auto" />
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