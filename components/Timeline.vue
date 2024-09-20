<template>
  <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
    <ol
      class="col-span-12 space-y-12 relative px-4 py-4 before:absolute before:top-0 before:bottom-0 before:h-full before:w-1 before:-left-[13px] before:bg-white"
    >
      <li
        v-for="d in data"
        :key="d.time"
        class="mb-10 relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:bg-white"
      >
        <div
          class="content relative bg-[#ffffff11] text-white rounded-md p-4 flex flex-col"
        >
          <div class="arrow" aria-hidden></div>
          <time class="text-sm font-exo leading-none">{{ d.time }}</time>
          <p class="my-2 text-lg text-[#aaa6c3]">
            <strong class="font-bold">{{ d.title }}</strong>
          </p>
          <p
            v-for="(value, key) in d.details"
            :key="key"
            class="text-base font-exo break-words"
          >
            <span class="capitalize font-semibold">{{ key }}: </span>
            <span v-if="!isValidURL(value)" class="font-medium">{{
              value
            }}</span>
            <span v-else class="text-blue-400 font-medium"
              ><a :href="value" :alt="`${key}'s link`">link</a></span
            >
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { isValidURL } from '@/utils/helpers'

defineProps<{
  data: {
    time: string
    title: string
    details: Record<string, string>
  }[]
}>()

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.batch('ol li .content', {
      onEnter: (batch) => {
        batch.forEach((ele) =>
          gsap.fromTo(
            ele,
            { x: '100vw' },
            {
              scrollTrigger: {
                trigger: ele,
                start: 'top 65%',
              },
              x: 0,
              duration: 2,
              ease: 'expo',
            }
          )
        )
      },
      once: true,
    })
  }, 3000)
})
</script>

<style>
.arrow {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #ffffff11;
}

.content {
  transform: translateX(100vw);
}
</style>
