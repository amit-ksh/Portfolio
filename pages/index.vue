<template>
  <main>
    <div ref="socialsRef" class="absolute right-2" style="translate: 0 -100%">
      <Socials />
    </div>

    <div
      class="absolute w-full max-w-2xl px-6"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
    >
      <h1
        id="intro"
        ref="introRef"
        class="font-mono mb-4 text-2xl md:text-4xl tracking-wide opacity-0 text-white"
        style="translate: 0 30px"
      >
        Hey👋! I'm <span class="font-bold">Amit Kumar Sharma</span>
      </h1>
      <h3
        ref="roleRef"
        class="mb-4 font-exo text-xl md:text-2xl font-semibold tracking-wide text-white opacity-0"
        style="translate: 0 30px"
      >
        Web Developer
      </h3>
      <div class="flex justify-end mt-4">
        <a
          id="download-btn"
          ref="downloadBtn"
          href="https://drive.google.com/file/d/1J-aLetwdiJEEopSv2rVqddBlsvP2FhQa/view?usp=share_link"
          download="amit-resume.pdf"
          class="text-white px-4 py-2 font-semibold text-lg rounded-lg border-2 border-white tracking-wider"
          aria-label="download amit's resume"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import gsap from 'gsap'

const introRef = ref()
const roleRef = ref()
const socialsRef = ref()

onMounted(() => {
  gsap.to(introRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo',
  })

  gsap.to(roleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo',
    delay: 0.3,
  })

  gsap.to(socialsRef.value, {
    y: '8px',
    ease: 'back.inOut',
    duration: 1.5,
  })
})
</script>

<style scoped>
#download-btn {
  overflow: hidden;
  text-decoration: none;
  transition: 300ms transform ease-in-out;
  will-change: transform;
  z-index: 0;
}

#download-btn::after {
  background-color: white;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-100%, 0%) rotate(0deg);
  transform-origin: 50% 50%;
  transition: 300ms transform ease-in-out;
  will-change: transform;
  z-index: -1;
}

#download-btn:hover::after {
  transform: translate(0, 0);
}

#download-btn:hover {
  border: 0;
  color: #055c8e;
  transform: scale(1.1);
  will-change: transform;
}
</style>
