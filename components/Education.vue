<template>
  <section id="education">
    <Heading>Education</Heading>

    <div class="ml-6 md:mx-auto max-w-2xl">
      <Timeline :data="education"></Timeline>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    time: '15 Septmber 2022',
    title: 'B.Sc. in Computer Application and Cyber Security',
    place: '🏫 Jharkhand Raksha Shakti University, Ranchi',
  },
  {
    time: '14 May 2019',
    title: '12th/High School',
    place: "🏫 St. John's Inter College, Ranchi",
  },
  {
    time: '06 June 2017',
    title: '10th/GED',
    place: '🏫 Central Academy, Ranchi',
  },
]
</script>
