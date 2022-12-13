<template>
  <ol class="relative border-l border-white">
    <li
      v-for="d in data"
      :key="d.time"
      class="bg-white p-4 rounded-md mb-10 ml-4"
    >
      <div
        class="absolute w-3 h-3 bg-gray-200 z-[5] rounded-full mt-2 left-[-0.390rem] border border-white"
      ></div>
      <div
        class="absolute w-6 h-[1.5px] bg-white rounded-full mt-[0.8rem] left-[-0.390rem]"
      ></div>
      <div>
        <time class="text-sm font-exo leading-none">
          {{ d.time }}
        </time>
        <h3 class="text-lg font-semibold text-gray-900">
          {{ d.title }}
        </h3>
      </div>
      <p class="text-base font-exo">
        {{ d.place }}
      </p>
    </li>
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
