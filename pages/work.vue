<template>
  <div class="bg-black px-6 py-12">
      <h2 id="title"
        ref="titleRef"
        class="text-white font-exo text-5xl mb-6 opacity-0 uppercase"
        style="translate: 0 30px;"
      >
      Projects
      </h2>

    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div
          id="projects"
          ref="projectsRef"
          v-for="project in projects"
          :key="project.title"
          class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4"
          style="transform: translateX(-100vw)"
        >
          <Project 
            :title="project.title" 
            :description="project.description" 
            :imageUrl="project.image.url" 
            :url="project.url" 
          />
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
