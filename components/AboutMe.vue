<template>
  <section id="about">
    <Header>About Me</Header>

    <div ref="aboutRef" class="
      px-6 py-4 md:mx-auto ml-4 max-w-2xl text-white border-2 border-blue-700 border-solid 
      rounded-sm opacity-0
    "
    >
      <div v-for="row in data" :key="row.attr" class="text-xl font-mono mb-2">
        <h3 class="font-bold text-xl md:text-2xl tracking-wide text-justify">{{ row.attr }}</h3>
        <p class="text-sm md:text-lg">{{ row.value }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';
import { diffDate } from '~/utils/helpers';

const daysLived = diffDate(2001, 11, 10)
const daysLivedString = computed(() =>
  `${daysLived.year} years, ${daysLived.month} months, ${daysLived.date} days!`
)

const data = [
  {
    attr: 'Name', value: 'Amit Kumar Sharma',
  },
  {
    attr: 'Days Lived', value: daysLivedString.value,
  },
  {
    attr: 'Location', value: 'Ranchi, Jharkhand, India',
  },
  {
    attr: 'Summary', value: `A ${daysLived.year} year old student, self-motivated tech enthusiast, full-stack developer and a ML enthusiast. 
                            I spend my time learning & experimenting new technologies.`,
  },
  {
    attr: '', value: `Over the last two years, I've gained expertise in modern tech stacks like React, Next, Vue, NodeJS and PostgreSQL.
                      I've worked on plenty of projects including REST APIs, Websites and CLIs.
                      I'm currently focusing on participating in developer friendly events and contributing to opensource projects & softwares.`,
  },
]

const aboutRef = ref()

onMounted(() => {
  gsap.to(aboutRef.value, {
    opacity: 1,
    duration: 2,
    ease: 'sine.out',
  })
})
</script>
