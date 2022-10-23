<template>
  <div class="bg-black px-6 py-12">
      <h2 id="title"
        ref="titleRef"
        class="text-white font-exo text-5xl mb-6 opacity-0 uppercase"
        style="transform: translateY(30px)"
      >
      Projects
      </h2>

    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div
          id="projects"
          ref="projectsRef"
          v-for="project in projects"
          :key="project.title   "
          class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4"
          style="transform: translateX(-100vw)"
        >
          <div class="c-card flex flex-col h-full bg-white shadow-md hover:shadow-xl focus:shadow-xl rounded-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                  <img class="absolute inset-0 h-full w-full object-cover" :src="project.image.url" :alt="project.title">
              </div>
              <div class="p-4">
                  <h4 class="mt-2 mb-2 font-bold">{{ project.title }}</h4>
                  <p class="text-sm font-mono">{{ project.description }}</p>
              </div>
              <div class="flex flex-wrap flex-row mt-auto py-4 px-2 border-t border-b text-xs text-gray-700">
                  <!-- GITHUB LINK -->
                  <a
                  v-if="project.url.github"
                  :href="project.url.github"
                  class="
                    ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300
                    focus:text-slate-500 dark:focus:text-slate-300
                  "
                  target="_blank"
                  >
                      <GithubLogo :label="project.title + ' on GitHub'" class="w-5 h-5" />
                  </a>
                  <!-- WEBSITE LINK -->
                  <a
                  v-if="project.url.website"
                  :href="project.url.website"
                  class="
                    ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300
                   focus:text-slate-500 dark:focus:text-slate-300
                  "
                  target="_blank"
                  >
                      <WebLogo :label="project.title + '\'s Website'" class="w-5 h-5" />
                  </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import iphoneImg from '~/assets/images/iphone.jpg'
import laptopImg from '~/assets/images/laptop.jpg'
import personImg from '~/assets/images/person.jpg'
import GithubLogo from '~/components/Logo/Github.vue';
import WebLogo from '~/components/Logo/Web.vue';


const projects = [
  {
    image: {
      url: iphoneImg
    },
    title: 'Locknest',
    description: 'Locknest is the Progressive Web App(PWA) application that allows users to store and manage their passwords and other personal information like bank accounts and payment card infos in a single place. In short, it is the online password manager or digital wallet for the users.',
    url: {
      github: 'https://github.com/amit-ksh/locknest',
      website: 'https://locknest.vercel.app/',
    }
  },
  {
    image: {
      url: laptopImg
    },
    title: 'Weather App',
    description: 'Weather App is a React web app which display the weather details from all around the world.',
    url: {
      github: 'https://github.com/amit-ksh/weather-app',
      website: 'https://your-weatherman.netlify.app/',
    }
  },
  {
    image: {
      url: personImg
    },
    title: 'Todo App',
    description: 'A todo app is a simple web application where user can create todo list and add task/todo to the list. User can mark an added task as completed and also able to delete the todo list and task.',
    url: {
      github: 'https://github.com/amit-ksh/todo-app',
      website: 'https://h-todo-app.herokuapp.com/',
    }
  },
  {
    image: {
      url: iphoneImg
    },
    title: 'GnB Distribution Analyzer',
    description: 'A python package that helps to analyze the Gaussian and Binomial Distributions',
    url: {
      github: 'https://github.com/amit-ksh/Udacity-AI-Programming-with-Python/tree/main/mini-projects/GnB_Distribution',
      website: 'https://pypi.org/project/gnb-distributions-analyzer/'
    }
  },
  {
    image: {
      url: laptopImg
    },
    title: 'Portfolio',
    description: 'Personal site showcasing my projects and online resume.',
    url: {
      github: 'https://github.com/amit-ksh/Portfolio/',
      website: 'https://amit-ksh.netlify.app/',
    }
  },
];

const titleRef = ref(null)
const projectsRef = ref(null)

onMounted(() => {
  gsap.to(titleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo'
  });

  gsap.to(projectsRef.value, {
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.1,
    ease: 'expo',
    delay: 0.3
  });
});
</script>

<style>
.c-card img {
    transition: transform .3s ease-in-out;
}

img:hover {
    transform: scale(1.05)
}

</style>