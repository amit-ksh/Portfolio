<template>
  <section id="education">
    <H2>Education</H2>

    <div class="ml-6 md:mx-auto max-w-2xl">
      <Timeline :data="education"></Timeline>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    time: '2024',
    title: 'Master of Computer Application',
    place: '🏫 Marwari College, Ranchi',
  },
  {
    time: 'Septmber 2022',
    title: 'B.Sc. in Computer Application and Cyber Security',
    place: '🏫 Jharkhand Raksha Shakti University, Ranchi',
  },
  {
    time: 'May 2019',
    title: '12th/High School',
    place: "🏫 St. John's Inter College, Ranchi",
  },
  {
    time: 'June 2017',
    title: '10th/GED',
    place: '🏫 Central Academy, Ranchi',
  },
]
</script>
