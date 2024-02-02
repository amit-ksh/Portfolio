<template>
  <div>
    <div
      ref="socialsRef"
      class="absolute right-2 z-20"
      style="translate: 0 -100%"
    >
      <Socials />
    </div>

    <div
      ref="containerRef"
      class="absolute w-[90%] md:w-[80%] max-w-[800px] bg-[#161618bb] rounded-lg px-6 pt-4 pb-6 z-10"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0"
    >
      <div id="intro" class="font-mono mb-4 text-white">
        <div class="block md:flex gap-4 mb-4">
          <div>
            <p class="text-lg">Hey👋! My name is</p>
            <h1 class="text-4xl lg:text-5xl tracking-wide">
              <span class="font-bold overflow-hidden">Amit Sharma</span>
            </h1>
          </div>

          <section id="roles" class="h-14 md:h-11 overflow-hidden md:self-end">
            <h2
              v-for="role in roles"
              :key="role"
              class="font-exo text-[1.1em] md:text-lg font-semibold tracking-wide text-white"
            >
              <div class="py-1 px-3 h-14 md:h-11 inline-block">
                {{ role }}
              </div>
            </h2>
          </section>
        </div>
        <p><strong>Software Developer</strong> from <b>India.</b></p>
      </div>

      <div class="flex justify-end gap-4 mt-12 font-medium">
        <a
          href="https://drive.google.com/file/d/10heju8Ft0PU8Q4tn48U2hxNuQbNjsOQH/view?usp=drive_link"
          download="amit-resume.pdf"
          class="btn py-2 px-6 md:px-8 uppercase text-center relative"
          aria-label="download amit's resume"
          target="_blank"
        >
          Resume
        </a>

        <a
          href="mailto:hey.amit.ksh@gmail.com"
          class="btn py-2 px-6 md:px-8 uppercase text-center relative"
          aria-label="amit's mail"
          target="_blank"
        >
          Contact Me!
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'

const roles = [
  'Software Developer',
  'Open Source Contributor',
  'AI & ML Enthusiast',
]

const containerRef = ref()
const socialsRef = ref()

onMounted(() => {
  gsap.to(containerRef.value, {
    opacity: 1,
    duration: 1.5,
    ease: 'expo',
    delay: 3,
  })

  gsap.to(socialsRef.value, {
    y: '8px',
    ease: 'back.inOut',
    duration: 1.5,
    delay: 3,
  })
})

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Amit Sharma',
})
</script>

<style scoped>
#roles h2 div {
  animation: text-animation 8s 3.2s infinite;
}

h2:first-child div {
  text-shadow: 0 0.2em 0.25em hsl(196, 74%, 49%, 0.6);
  color: hsl(196, 74%, 49%);
}
h2:nth-child(2) div {
  text-shadow: 0 0.2em 0.25em hsl(40, 74%, 46%, 0.6);
  color: hsl(40, 74%, 46%);
}
h2:last-child div {
  text-shadow: 0 0.2em 0.25em hsl(349, 95%, 39%, 0.6);
  color: hsl(349, 95%, 39%);
}

@keyframes text-animation {
  0% {
    translate: 0;
  }
  10% {
    translate: 0;
  }
  20% {
    translate: 0 -100%;
  }
  30% {
    translate: 0 -100%;
  }
  40% {
    translate: 0 -200%;
  }
  60% {
    translate: 0 -200%;
  }
  70% {
    translate: 0 -100%;
  }
  80% {
    translate: 0 -100%;
  }
  90% {
    translate: 0;
  }
  100% {
    translate: 0;
  }
}

.btn {
  color: #f4f4f4;
  border: 1px solid rgb(146, 148, 248);
  position: relative;
  overflow: hidden;
}

.btn:hover {
  box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
}

.btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(146, 148, 248, 0.4),
    transparent
  );
  transition: all 650ms;
}

.btn:hover:before {
  left: 100%;
}
</style>
