<template>
    <div class="bg-black h-screen px-6 py-12">
        <h2 
         ref="title" 
         class="text-white font-exo text-5xl mb-6 opacity-0"
         style="transform: translateY(30px)"
        >
        MY WORK
        </h2>

        <div class="flex space-x-4">
            <div 
             v-for="project in projects"
             ref="projects"
             class="w-full opacity-0"
             style="transform: translateX(30px)"
            >
                <nuxt-link to="/">
                    <img 
                    :src="project.image.url" 
                    alt="Iphone"
                    class="object-cover"
                    style="height: 70vh"
                    >
                    <p class="text-white font-space-mono text-sm uppercase">{{ project.title }}</p>
                </nuxt-link>
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
            title: 'IPHONE'
        },
        {
            image: {
            url: laptopImg
            },
            title: 'LAPTOP'
        },
        {
            image: {
            url: personImg
            },
            title: 'Person'
        },
        {
            image: {
            url: iphoneImg
            },
            title: 'IPHONE'
        },
        {
            image: {
            url: laptopImg
            },
            title: 'LAPTOP'
        },
        {
            image: {
            url: personImg
            },
            title: 'Person'
        }
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
            duration: 1.5,
            stagger: 0.1,
            ease: 'expo',
            delay: 0.3
        });
    }
}
</script>
