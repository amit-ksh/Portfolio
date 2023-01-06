<template>
  <ol class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
    <div
      class="col-span-12 space-y-12 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-[0.77rem] before:bg-white"
    >
      <li
        v-for="d in data"
        :key="d.time"
        class="bg-white p-4 rounded-md mb-10 flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:bg-white"
      >
        <time class="text-sm font-exo leading-none">{{ d.time }}</time>
        <h3 class="mt-1 text-lg font-semibold text-gray-900">
          {{ d.title }}
        </h3>
        <p class="text-base font-exo">
          {{ d.place }}
        </p>
      </li>
    </div>
  </ol>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>
