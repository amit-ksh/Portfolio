<template>
  <section id="achievement">
    <H2>Achievement</H2>

    <div class="ml-6 md:mx-auto max-w-2xl">
      <Timeline :data="achievement"></Timeline>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievement = [
  {
    time: 'November 2023',
    title: 'Mettl StackHack 1.0',
    details: {
      rank: 'Winner',
      contest: 'https://xathon.mettl.com/event/stackhack-2023',
    },
  },
  {
    time: 'October 2023',
    title: 'Hasura Supergraph Top-N Challenge',
    details: {
      rank: 'Winner',
      contest: 'https://github.com/hasura/supergraph-top-n-challenge',
    },
  },
  {
    time: 'October 2022',
    title: 'HackSqaud 2022',
    details: {
      rank: 'Top 10',
      contest: 'https://www.hacksquad.dev/',
    },
  },
  {
    time: 'Septmber 2022',
    title: 'Ballerina Coding Challenge',
    details: {
      rank: 'Top 50',
      contest:
        'https://www.hackerearth.com/challenges/new/competitive/ballerina-coding-challenge/#about',
    },
  },
  {
    time: 'August 2022',
    title: 'Get a room: ML Hackathon',
    details: {
      rank: 'Top 200',
      contest:
        'https://www.hackerearth.com/challenges/competitive/get-a-room-ml-hackathon/leaderboard/identify-the-habitability-score-of-a-property-12-464aae3e/page/4/',
    },
  },
]
</script>
