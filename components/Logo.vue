<template>
  <div class="relative flex flex-col items-center group">
  <img :src="`/svg/${logo}.svg`" :alt="name" :data-tooltip-target="`tooltip-${name}`" 
    class="m-auto w-full h-full max-w-20 max-h-20 hover:scale-105 transition duration-200"/>
    <div class="absolute top-[-40px] flex flex-col items-center hidden mb-6 group-hover:flex">
			<span 
        class="relative z-10 px-4 py-2 text-sm leading-none text-white 
        whitespace-no-wrap bg-black shadow-lg rounded-sm"
      >
        {{ name }}
      </span>
			<div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
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
})
</script>