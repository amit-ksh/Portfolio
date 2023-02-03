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
        Hey👋! I'm <span class="font-bold">Amit</span>
      </h1>
      <h2
        ref="roleRef"
        class="mb-4 font-exo text-xl md:text-2xl font-semibold tracking-wide text-white opacity-0"
        style="translate: 0 30px"
      >
        Web Developer
      </h2>
      <div class="flex justify-end mt-4">
        <a
          id="download-btn"
          ref="downloadBtn"
          href="https://drive.google.com/file/d/1J-aLetwdiJEEopSv2rVqddBlsvP2FhQa/view?usp=share_link"
          download="amit-resume.pdf"
          class="mt-2 py-3 px-6 md:px-8 uppercase font-bold text-center relative opacity-0"
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
const downloadBtn = ref()

onMounted(() => {
  gsap.to(introRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo',
    delay: 3,
  })

  gsap.to(roleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo',
    delay: 3.2,
  })

  gsap.to(socialsRef.value, {
    y: '8px',
    ease: 'back.inOut',
    duration: 1.5,
    delay: 3,
  })

  gsap.to(downloadBtn.value, {
    opacity: 1,
    ease: 'back.inOut',
    delay: 3,
  })
})
</script>

<style scoped>
#download-btn {
  background: white;
  color: #3b82f6;
  letter-spacing: 1px;
  border-radius: 5px;
  transition: 0.3s linear;
  z-index: 1;
}

#download-btn::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #3b82f6;
  transform: scaley(0);
  border-radius: 5px;
  transform-origin: bottom;
  transition: transform 200ms ease-in;
  z-index: -1;
}

#download-btn:hover {
  color: white;
}

#download-btn:hover::after {
  transform: scaley(1);
}
</style>
