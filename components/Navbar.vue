<template>
  <div>
    <Canvas ref="canvas" />

    <nav
      class="fixed bottom-2 left-[50%] w-[80vw] md:w-[400px] translate-x-[-50%] z-50"
    >
      <div class="max-w-7xl mx-auto">
        <div class="absolute left-[50%] bottom-0 translate-x-[-50%]">
          <button
            ref="openBtn"
            tabindex="0"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-3 text-sm rounded-lg bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            @click="openNavbar"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="w-6 h-6 fill-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          id="navbar-default"
          ref="navbarRef"
          class="relative group translate-y-[100vh] md:block md:translate-y-0"
        >
          <div
            class="absolute -inset-1 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
          ></div>
          <div
            class="bg-gradient-to-r from-[#2a2a72] to-[#009ffd] relative rounded-lg leading-none flex items-center justify-center space-x-6 py-5 px-6 landscape:px-2 landscape:py-4"
          >
            <div class="w-full flex flex-col">
              <div class="flex justify-end">
                <CloseButton
                  ref="closeBtn"
                  class="md:hidden mb-4"
                  role="button"
                  tabindex="0"
                  @click="closeNavbar"
                  @keydown.enter="closeNavbar"
                />
              </div>
              <ul
                class="flex flex-col md:flex-row align-middle justify-evenly gap-4 font-semibold"
              >
                <li
                  v-for="r in routes"
                  :key="r.url"
                  :class="`text-white text-sm md:text-lg rounded-lg border-2 border-white transition hover:text-blue-500
                hover:bg-white focus:bg-white hover:scale-105 focus:text-blue-500 text-center
                ${route.path === r.url && 'text-blue-500 bg-white'}`"
                >
                  <NuxtLink v-slot="{ navigate }" :to="r.url" custom>
                    <button
                      class="block py-2 px-4 cursor-pointer w-full"
                      @click="navigate"
                      @keydown.enter="navigate"
                    >
                      {{ r.name }}
                    </button>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import gsap from 'gsap'

const route = useRoute()

const routes = [
  {
    name: 'About Me',
    url: '/about',
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
const isNavOpen = ref(false)

const openBtn = ref()
const closeBtn = ref()
const navbarRef = ref()
const canvas = ref()

function openNavbar() {
  if (isNavOpen.value) return

  gsap.to(openBtn.value, {
    y: 100,
    ease: 'ease.in',
    duration: 0.5,
  })

  gsap.to(navbarRef.value, {
    y: 0,
    duration: 0.8,
    delay: 0.3,
  })

  isNavOpen.value = true
}

function closeNavbar() {
  if (!isNavOpen.value) return

  gsap.to(navbarRef.value, {
    y: '100vh',
    ease: 'ease.in',
    duration: 1,
  })

  gsap.to(openBtn.value, {
    y: 0,
    duration: 0.8,
    delay: 0.3,
  })

  isNavOpen.value = false
}

watch(route, () => {
  closeNavbar()
})
</script>

<style scoped>
@media (min-width: theme('screens.md')) {
  /* Makes the navbar visible */
  #navbar-default {
    transform: translate(0px, 0px) !important;
  }
}
</style>
