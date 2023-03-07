<template>
  <section id="skills">
    <H2>Skills</H2>

    <!-- LANGUAGES -->
    <div class="mb-8">
      <h2
        class="mb-4 text-white border-b-2 mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
      >
        Languages
      </h2>
      <div
        class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-white rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        <Logo
          v-for="lang in languages"
          :key="lang"
          :logo="lang"
          :name="logoToName(lang)"
        />
      </div>
    </div>

    <!-- WEB -->
    <div class="mb-8">
      <h2
        class="mb-4 text-white border-b-2 mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
      >
        Web
      </h2>
      <div
        class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-white rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        <Logo
          v-for="skill in web"
          :key="skill"
          :logo="skill"
          :name="logoToName(skill)"
          class="w-20 h-20"
        />
      </div>
    </div>

    <!-- AI & ML -->
    <div class="mb-8">
      <h2
        class="mb-4 text-white border-b-2 mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
      >
        AI & ML
      </h2>
      <div
        class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-white rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        <Logo
          v-for="skill in ml"
          :key="skill"
          :logo="skill"
          :name="logoToName(skill)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { languages, web, ml } from '~~/store/skills'
import { logoToName } from '~/utils/helpers'
</script>

<style scoped>
.skill img {
  width: 80px;
  height: 80px;
  transition: all 500ms;
}

.skill img:hover {
  scale: 1.05;
}
</style>
