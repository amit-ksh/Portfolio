<template>
  <div>
    <p v-if="contestLink">
      <bold>Contest:</bold><a :href="contestLink" target="_blank"></a>
    </p>
    <p v-if="rank">
      <bold>Rank: {{ rank }}</bold>
    </p>
    <p v-if="winnersLink">
      <bold>Winners:</bold><a :href="winnersLink" target="_blank"></a>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  contestLink?: string
  winnersLink?: string
  rank?: number
}>()
</script>
