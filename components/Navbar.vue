<template>
  <div
    ref="bgRef"
    class="z-50 absolute w-full top-0 left-0 translate-x-[-100%] -inset-1 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] blur"
  ></div>

  <nav
    class="fixed bottom-2 left-[50%] w-[80vw] md:w-[400px] z-50"
    style="translate: -50%"
  >
    <div class="max-w-7xl mx-auto">
      <div
        ref="openBtn"
        class="absolute left-[50%] bottom-0"
        style="translate: -50%"
        @click="openNavbar"
      >
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-3 text-sm rounded-lg bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
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
          class="bg-gradient-to-r from-[#2a2a72] to-[#009ffd] relative rounded-lg leading-none flex items-top justify-center align-middle space-x-6 py-4 px-6"
        >
          <div class="w-[100%] flex flex-col">
            <div class="flex justify-end mb-4 md:hidden">
              <CloseButton
                ref="closeBtn"
                class="md:hidden"
                @click="closeNavbar"
              />
            </div>
            <ul
              class="flex flex-col md:flex-row align-middle justify-center gap-4 font-semibold"
            >
              <li
                v-for="r in routes"
                :key="r.name"
                :class="`text-white text-sm md:text-lg rounded-lg border-2 border-white transition hover:text-blue-500
                hover:bg-white focus:bg-white hover:scale-105 focus:text-blue-500 text-center
                ${route.path === r.url && 'text-blue-500 bg-white'}`"
              >
                <NuxtLink
                  class="block py-2 px-4 cursor-pointer"
                  @click="(e) => goto(e, r.url)"
                >
                  {{ r.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import gsap from 'gsap'
import { getTotalHeight } from '~~/utils/helpers'

const router = useRouter()
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
const bgRef = ref()

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
    y: '50vh',
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

function goto(e, url) {
  e.preventDefault()

  if (route.path !== url) {
    gsap.to(bgRef.value, {
      x: 0,
      duration: 1,
    })
    gsap.to(bgRef.value, {
      delay: 2,
      x: '-100%',
      onComplete: () => {
        router.push({ path: url })
      },
    })
  }
  closeNavbar()
}

onMounted(() => {
  bgRef.value.style.height = getTotalHeight() + 'px'
})
</script>
