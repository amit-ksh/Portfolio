<template>
  <div class="bg-black px-6 py-12 pb-20">
    <Header>
      Projects
    </Header>

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
            :techStack="project.techStack"
            :imageUrl="project.image" 
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
    image: iphoneImg,
    title: 'Locknest',
    description: 'Locknest is the Progressive Web App(PWA) application that allows users to store and manage their passwords and other personal information like bank accounts and payment card infos in a single place. In short, it is the online password manager or digital wallet for the users.',
    techStack: ['nextjs', 'typescript', 'chakraui', 'prisma', 'postgres', 'vercel'],
    url: {
      github: 'https://github.com/amit-ksh/locknest',
      website: 'https://locknest.vercel.app/',
    }
  },
  {
    image: personImg,
    title: 'Flower Classifier',
    description:
      "A CLI application that trains the pretrained Neural Netwrok and uses that for predicting the flower's name",
    techStack: ['python', 'pytorch', 'numpy'],
    url: {
      github: 'https://github.com/amit-ksh/Flower-Classifier',
    },
  },
  {
    image: laptopImg,
    title: 'Weather App',
    description: 'Weather App is a React web app which display the weather details from all around the world.',
    techStack: ['react', 'node', 'chakraui', 'netlify'],
    url: {
      github: 'https://github.com/amit-ksh/weather-app',
      website: 'https://your-weatherman.netlify.app/',
    }
  },
  {
    image: personImg,
    title: 'Todo App',
    description: 'A todo app is a simple web application where user can create todo list and add task/todo to the list. User can mark an added task as completed and also able to delete the todo list and task.',
    techStack: ['html', 'css', 'js', 'node', 'postgres'],
    url: {
      github: 'https://github.com/amit-ksh/todo-app',
      // website: 'https://h-todo-app.herokuapp.com/',
    }
  },
  {
    image: iphoneImg,
    title: 'GnB Distribution Analyzer',
    description: 'A python package that helps to analyze the Gaussian and Binomial Distributions',
    techStack: ['python', 'numpy', 'matplotlib', 'pypi'],
    url: {
      github: 'https://github.com/amit-ksh/Udacity-AI-Programming-with-Python/tree/main/mini-projects/GnB_Distribution',
      website: 'https://pypi.org/project/gnb-distributions-analyzer/'
    }
  },
  {
    image: laptopImg,
    title: 'homie',
    description: 'A web app which uses the ML model to predicts the price of apartments situated in USA.',
    techStack: ['python', 'flask', 'scikit-learn', 'numpy', 'pandas'],
    url: {
      github: 'https://github.com/amit-ksh/homie/',
      website: 'https://homie.amit-ksh.repl.co',
    }
  },
  {
    image: laptopImg,
    title: 'Portfolio',
    description: 'Personal site showcasing my projects and online resume.',
    techStack: ['nuxt', 'tailwindcss', 'threejs', 'gsap', 'netlify'],
    url: {
      github: 'https://github.com/amit-ksh/Portfolio/',
      website: 'https://amit-ksh.netlify.app/',
    }
  },
];

const projectsRef = ref()

onMounted(() => {
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
