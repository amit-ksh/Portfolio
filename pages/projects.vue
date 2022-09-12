<template>
    <div class="bg-black px-6 py-12">
        <h2 
         ref="title" 
         class="text-white font-exo text-5xl mb-6 opacity-0 uppercase"
         style="transform: translateY(30px)"
        >
        Projects
        </h2>

    <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div 
        ref="projects" 
        v-for="project in projects" 
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4" 
        style="transform: translateX(-100vw)"
      >
        <div class="c-card flex flex-col h-full block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" :src="project.image.url" :alt="project.title">
            </div>
            <div class="p-4">
                <h4 class="mt-2 mb-2  font-bold">{{ project.title }}</h4>
                <p class="text-sm">{{ project.description }}</p>
            </div>
            <div class="flex flex-wrap flex-row mt-auto py-4 px-2 border-t border-b text-xs text-gray-700">
                <!-- GITHUB LINK -->
                <a 
                v-if="project.url.github" 
                :href="project.url.github" 
                class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" 
                target="_blank"
                >
                    <span class="sr-only">{{ project.title }} on GitHub</span>
                    <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a> 
                <!-- WEBSITE LINK -->
                <a 
                v-if="project.url.website" 
                :href="project.url.website" 
                class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" 
                target="_blank"
                >
                    <span class="sr-only">{{ project.title }} Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>

                </a>       
            </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import iphoneImg from '~/assets/iphone.jpg'
import laptopImg from '~/assets/laptop.jpg'
import personImg from '~/assets/person.jpg'

export default {

    data() {
    return {
        projects: [
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
                website: 'https://amit-ksh.netlify.app/projects',
            }
        },
        ]
    }
    },
    mounted() {
        gsap.to(this.$refs.title, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'expo'
        });

        gsap.to(this.$refs.projects, {
            opacity: 1,
            x: 0,
            duration: 2,
            stagger: 0.1,
            ease: 'expo',
            delay: 0.3
        });
    }
}
</script>

<style>
.c-card img {   
    transition: transform .3s ease-in-out; 
}
  
img:hover {
    transform: scale(1.05)
}

</style>
