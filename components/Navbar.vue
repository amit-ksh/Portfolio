<template>
  <div class="fixed bottom-2 left-[50%] w-[80vw] md:w-[450px] z-50" style="translate: -50%">
    <div class="max-w-7xl mx-auto">
      <div 
        ref="openBtn" 
        @click="openNavbar" 
        class="absolute left-[50%] bottom-0" 
        style="translate: -50%;"
      >
        <button 
          data-collapse-toggle="navbar-default" 
          type="button" 
          class="
            inline-flex items-center p-3 text-sm rounded-lg bg-blue-500
            hover:bg-blue-400 focus:bg-blue-400 md:hidden
          "
          aria-controls="navbar-default" 
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6 fill-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      
      <div 
        ref="navbarRef" 
        id="navbar-default" 
        class="relative group translate-y-[100vh] md:block md:translate-y-0"
        >
        <div class="
          absolute -inset-1 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] rounded-lg blur 
          opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200
        "
        ></div>
        <div class="
          bg-gradient-to-r from-[#2a2a72] to-[#009ffd] relative md:px-4 p-6 bg-white rounded-lg 
          leading-none flex items-top justify-start space-x-6
          "
        >
          <div class="w-[100%] flex flex-col gap-4">
            <div class="flex justify-end">
              <CloseButton ref="closeBtn" @click="closeNavbar" class="md:hidden" />
            </div>
            <ul class="flex flex-col md:flex-row align-middle justify-center gap-4 font-semibold">
              <li 
                v-for="route in routes" 
                :key="route.name"
                class="
                text-white text-sm md:text-lg rounded-lg border-2 border-white
                hover:bg-white hover:scale-105 transition hover:text-blue-500 text-center
                "  
              >
                <NuxtLink :to="route.url" class="block py-2 px-4 cursor-pointer">{{ route.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';

const routes = [
  {
    name: 'About Me',
    url: '/#about',
  },
  {
    name: 'My Work',
    url: '/work',
  },
  {
    name: 'Home',
    url: '/',
  },
]
const isNavOpen = ref(false);

const openBtn = ref()
const closeBtn = ref()
const navbarRef = ref()

function openNavbar() {
  if (isNavOpen.value) return;

  gsap.to(openBtn.value, {
    y: 100,
    ease: 'ease.in',
    duration: 0.5
  })

  gsap.to(navbarRef.value, {
    y: 0,
    duration: 0.8,
    delay: 0.3
  })

  isNavOpen.value = true
}

function closeNavbar() {
  if (!isNavOpen.value) return;


  gsap.to(navbarRef.value, {
    y: '50vh',
    ease: 'ease.in',
    duration: 1
  })

  gsap.to(openBtn.value, {
    y: 0,
    duration: 0.8,
    delay: 0.3
  })

  isNavOpen.value = false
}
</script>
