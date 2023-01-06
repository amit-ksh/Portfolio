<template>
  <ol class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
    <div
      class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-[0.77rem] before:bg-white"
    >
      <li
        v-for="d in data"
        :key="d.time"
        class="bg-white p-4 rounded-md mb-10 flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white"
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
