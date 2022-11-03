<template>
  <section class="mt-20">
    <Header>Skills</Header>

    <!-- LANGUAGES -->
    <div class="mb-8">
      <h2 class="
        mb-4 text-white border-b-2 mx-auto max-w-xl 
        font-bold tracking-wider font-exo text-2xl text-center
      "
      >Languages</h2>
      <div class="
        skill ml-4 md:mx-auto max-w-2xl p-6 bg-white rounded-lg 
        grid grid-cols-4 place-content-center gap-6
      "
      >  
          <div v-for="lang in languages" class="">
            <img :src="lang.logo" :alt="lang.name" />
          </div>
      </div>
    </div>

    <!-- WEB -->
    <div class="mb-8">
      <h2 class="
        mb-4 text-white border-b-2 mx-auto max-w-xl 
        font-bold tracking-wider font-exo text-2xl text-center
      "
      >Web</h2>
      <div class="
        skill ml-4 md:mx-auto max-w-2xl p-6 bg-white rounded-lg 
        grid grid-cols-4 gap-6
      ">  
          <div v-for="skill in web">
            <img :src="skill.logo" :alt="skill.name" />
          </div>
      </div>
    </div>

    <!-- AI & ML -->
    <div class="mb-8">
      <h2 class="
        mb-4 text-white border-b-2 mx-auto max-w-xl 
        font-bold tracking-wider font-exo text-2xl text-center
      ">AI & ML</h2>
      <div class="
        skill ml-4 md:mx-auto max-w-2xl p-6 bg-white rounded-lg 
        grid grid-cols-4 gap-6
        ">  
          <div v-for="skill in ml" class="">
            <img :src="skill.logo" :alt="skill.name" />
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import pythonLogo from '~/assets/svg/python.svg'
import jsLogo from '~/assets/svg/js.svg'
import htmlLogo from '~/assets/svg/html.svg'
import cssLogo from '~/assets/svg/css.svg'
import reactLogo from '~/assets/svg/react.svg'
import vueLogo from '~/assets/svg/vue.svg'
import chakrauiLogo from '~/assets/svg/chakraui.svg'
import tailwindcssLogo from '~/assets/svg/tailwindcss.svg'
import nextLogo from '~/assets/svg/nextjs.svg'
import nodeLogo from '~/assets/svg/node.svg'
import expressLogo from '~/assets/svg/express.svg'
import prismaLogo from '~/assets/svg/prisma.svg'
import postgresLogo from '~/assets/svg/postgres.svg'
import numpyLogo from '~/assets/svg/numpy.svg'
import pandasLogo from '~/assets/svg/pandas.svg'
import scikitLogo from '~/assets/svg/scikit-learn.svg'

const languages = [
  { name: "python", logo: pythonLogo },
  { name: "javascript", logo: jsLogo },
]
const web = [
  { name: "html", logo: htmlLogo },
  { name: "css", logo: cssLogo },
  { name: "react", logo: reactLogo },
  { name: "vue", logo: vueLogo },
  { name: "nextjs", logo: nextLogo },
  { name: "chakra-ui", logo: chakrauiLogo },
  { name: "tailwindcss", logo: tailwindcssLogo },
  { name: "nodejs", logo: nodeLogo }, 
  { name: "expressjs", logo: expressLogo }, 
  { name: "prisma", logo: prismaLogo }, 
  { name: "postgresdb", logo: postgresLogo }, 
]
const ml = [
  { name: "numpy", logo: numpyLogo },
  { name: "pandas", logo: pandasLogo },
  { name: "scikit-learn", logo: scikitLogo },
]
</script>

<style scoped>
.skill img {
  width: 80px;
  height: 80px;
  transition: all 500ms;
}
</style>