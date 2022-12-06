<template>
  <section id="about">
    <Header>About Me</Header>

    <div ref="aboutRef" class="
      px-6 py-4 md:mx-auto ml-4 max-w-2xl text-white border-2 border-blue-700 border-solid 
      rounded-sm opacity-0
    "
    >
      <div v-for="row in aboutme" :key="row.attr" class="text-xl font-mono mb-2">
        <h3 class="font-bold text-xl md:text-2xl tracking-wide text-justify">{{ row.name }}</h3>
        <p class="text-sm md:text-lg">{{ row.value }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';
import { diffDate } from '~/utils/helpers';
import { gql } from 'graphql-request';

  const {data} = await useAsyncData(
    `author`,
    async function ({ $hygraph }) {
      const { authors } = await $hygraph.request(
        gql`
          {
            authors {
              name
              intro
              bio
              dob
              location 
            }
          }
        `
      );

      return authors[0];
    }
  );
  
  const dob = data.value.dob.split('-').map(n => +n) // yyyy-mm-dd
  const totalDays = diffDate(...dob)
  const daysLivedString = computed(() =>
  `${totalDays.year} years, ${totalDays.month} months, ${totalDays.date} days!`
  )
  const daysLived = {
    name: 'Days Lived',
    value: daysLivedString.value
  }

  const name = {
    name: 'Name',
    value: data.value.name
  }
  const location = {
    name: 'Location',
    value: data.value.location
  }
  const summary = {
    name: 'Summary',
    value: data.value.intro.replace('#daysLived', totalDays.year)
  }
  const bio = {
    name: '',
    value: data.value.bio
  }
  
const aboutme = [name, daysLived, location, summary, bio]
const aboutRef = ref()

onMounted(() => {
  gsap.to(aboutRef.value, {
    opacity: 1,
    duration: 2,
    ease: 'sine.out',
  })
})
</script>
