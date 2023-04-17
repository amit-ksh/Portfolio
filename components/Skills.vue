<template>
  <section id="skills">
    <H2>Skills</H2>

    <!-- LANGUAGES -->
    <div class="mb-8">
      <h3
        class="mb-4 text-white border-b-2 mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
      >
        <span class="block">Languages</span>
      </h3>
      <div
        class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-[#ffffff11] rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        <Logo
          v-for="lang in languages"
          :key="lang"
          :logo="lang"
          :name="logoToName(lang)"
          class="logo"
        />
      </div>
    </div>

    <!-- WEB -->
    <div class="mb-8">
      <h3
        class="mb-4 text-white border-b-2 mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
      >
        <span class="block">Web</span>
      </h3>
      <div
        class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-[#ffffff11] rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        <Logo
          v-for="skill in web"
          :key="skill"
          :logo="skill"
          :name="logoToName(skill)"
          class="logo w-20 h-20"
        />
      </div>
    </div>

    <!-- AI & ML -->
    <div class="mb-8">
      <h3
        class="mb-4 text-white border-b-2 mx-auto max-w-xl font-bold tracking-wider font-exo text-2xl text-center"
      >
        <span class="block">AI & ML</span>
      </h3>
      <div
        class="skill ml-4 md:mx-auto max-w-2xl p-6 bg-[#ffffff11] rounded-lg grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        <Logo
          v-for="skill in ml"
          :key="skill"
          :logo="skill"
          :name="logoToName(skill)"
          class="logo"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { languages, web, ml } from '~~/store/skills'
import { logoToName } from '~/utils/helpers'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

onMounted(() => {
  setTimeout(() => {
    gsap.fromTo(
      'h3 span',
      { xPercent: -40 },
      {
        scrollTrigger: 'h3 span',
        xPercent: 0,
        stagger: 0.2,
        duration: 1,
      }
    )

    ScrollTrigger.batch('.skill .logo', {
      onEnter: (batch) => {
        batch.forEach((ele, index) =>
          gsap.fromTo(
            ele,
            { scale: 0 },
            {
              scrollTrigger: ele,
              scale: 1,
              stagger: 0.2,
              duration: 1.5,
              ease: 'back.out',
              delay: index * 0.2,
            }
          )
        )
      },
      once: true,
    })
  }, 3000)
})
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
