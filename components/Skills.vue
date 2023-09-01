<template>
  <section id="skills">
    <H2>Skills</H2>

    <!-- LANGUAGES -->
    <Skill title="Languages">
      <Logo
        v-for="lang in languages"
        :key="lang"
        :logo="lang"
        :name="logoToName(lang)"
        class="logo scale-0"
      />
    </Skill>

    <!-- WEB -->
    <Skill title="Web">
      <Logo
        v-for="skill in web"
        :key="skill"
        :logo="skill"
        :name="logoToName(skill)"
        class="logo w-20 h-20 scale-0"
      />
    </Skill>

    <!-- AI & ML -->
    <Skill title="AI & ML">
      <Logo
        v-for="skill in ml"
        :key="skill"
        :logo="skill"
        :name="logoToName(skill)"
        class="logo scale-0"
      />
    </Skill>
  </section>
</template>

<script setup>
import { languages, web, ml } from '~~/store/skills'
import { logoToName } from '~/utils/helpers'
import { gsap } from 'gsap'

onMounted(() => {
  setTimeout(() => {
    const skills = document.querySelectorAll('.skill')

    // Skill heading animation
    gsap.fromTo(
      'h3 span',
      { xPercent: -40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: 'h3 span',
          start: 'top 65%',
        },
        opacity: 1,
        xPercent: 0,
        duration: 1,
        onComplete: () => {
          gsap.to('h3 span', {
            '--width': '100%',
          })
        },
      }
    )

    skills.forEach((skill) => {
      const logos = skill.querySelectorAll('.logo')

      gsap.from(logos, { scale: 0 })

      // Skills container animation
      gsap.fromTo(
        skill,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 65%',
          },
        }
      )

      // Skill logo animation
      gsap.to(logos, {
        scale: 1,
        stagger: 0.5,
        duration: 0.5,
        ease: 'expo',
        delay: 2.1,
        scrollTrigger: {
          trigger: skill,
          start: 'top 65%',
        },
      })
    })
  }, 3000)
})
</script>
