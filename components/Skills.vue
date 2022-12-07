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
        grid grid-cols-3 md:grid-cols-4 gap-6
      "
      >  
          <Logo v-for="lang in languages" :key="lang" :logo="lang" :name="lang" />
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
        grid grid-cols-3 md:grid-cols-4 gap-6
      ">  
          <Logo v-for="skill in web" :key="skill" :logo="skill" :name="skill" class="w-20 h-20" />
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
        grid grid-cols-3 md:grid-cols-4 gap-6
        ">  
          <Logo v-for="skill in ml" :key="skill" :logo="skill" :name="skill" />
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
const ml = ["numpy", "pandas", "matplotlib", "scikit-learn", "pytorch"]
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