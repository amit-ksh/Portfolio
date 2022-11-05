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
            <img :src="`/assets/svg/${lang}.svg`" :alt="lang" />
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
            <img :src="`/assets/svg/${skill}.svg`" :alt="skill" />
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
            <img :src="`/assets/svg/${skill}.svg`" :alt="skill" />
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const languages = ["python", "js",]
const web = [
"html", 
"css", 
"react", 
"vue", 
"nextjs", 
"chakraui", 
"tailwindcss", 
"node", 
"express", 
"prisma", 
"postgres", 
]
const ml = ["numpy", "pandas", "matplotlib", "scikit-learn", ]
</script>

<style scoped>
.skill img {
  width: 80px;
  height: 80px;
  transition: all 500ms;
}
</style>