<template>
  <div class="relative flex flex-col items-center group">
    <img
      :src="`/svg/tech/${logo}.svg`"
      :alt="name"
      :data-tooltip-target="`tooltip-${name}`"
      class="m-auto w-full h-full max-h-20 hover:scale-105 transition duration-400"
    />
    <div
      v-if="showTooltip"
      class="absolute w-max top-[-40px] flex flex-col items-center hidden mb-6 group-hover:flex"
    >
      <span
        class="relative z-10 px-4 py-2 text-sm leading-none text-gray self-center whitespace-no-wrap bg-white shadow-lg rounded-sm font-mono font-semibold"
      >
        {{ name }}
      </span>
      <div class="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
    </div>
  </div>
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
  showTooltip: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>
