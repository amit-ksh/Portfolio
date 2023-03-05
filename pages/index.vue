<template>
  <main>
    <div
      ref="socialsRef"
      class="absolute right-2 z-20"
      style="translate: 0 -100%"
    >
      <Socials />
    </div>

    <div
      class="absolute w-[80%] max-w-[800px] bg-[#161618bb] rounded-lg px-6 pt-4 pb-6 z-10"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
    >
      <div
        id="intro"
        ref="introRef"
        class="font-mono mb-4 text-white opacity-0"
        style="translate: 0 30px"
      >
        <div class="block md:flex gap-4 mb-4">
          <div>
            <p class="text-lg">Hey👋! My name is</p>
            <h1 class="text-4xl lg:text-5xl tracking-wide">
              <span class="font-bold overflow-hidden">Amit Sharma</span>
            </h1>
          </div>

          <section id="roles" class="h-11 overflow-hidden self-end">
            <h2
              v-for="role in roles"
              :key="role"
              class="font-exo text-xl font-semibold tracking-wide text-white"
            >
              <div class="py-1 px-3 mb-11 h-11 inline-block">
                {{ role }}
              </div>
            </h2>
          </section>
        </div>
        <p>
          I'm a <strong>Fullstack Developer</strong> from <bold>India.</bold>
        </p>
      </div>

      <div class="flex justify-end mt-12">
        <a
          id="download-btn"
          ref="downloadBtn"
          href="https://drive.google.com/file/d/1J-aLetwdiJEEopSv2rVqddBlsvP2FhQa/view?usp=share_link"
          download="amit-resume.pdf"
          class="mt-2 py-3 px-6 md:px-8 uppercase text-center relative opacity-0"
          aria-label="download amit's resume"
          target="_blank"
        >
          Checkout my Resume
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import gsap from 'gsap'

const roles = ['Web Developer', 'Open Source Contributor', 'AI & ML Enthusiast']

const introRef = ref()
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
h1 span {
  animation: lights 5s 750ms linear infinite;
}

@keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  30% {
    color: hsl(230, 80%, 90%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  40% {
    color: hsl(230, 100%, 100%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  70% {
    color: hsl(230, 80%, 90%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(230, 40%, 80%);
    text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
}

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
    translate: 0 -5.62rem;
  }
  30% {
    translate: 0 -5.62rem;
  }
  40% {
    translate: 0 -11.24rem;
  }
  60% {
    translate: 0 -11.24rem;
  }
  70% {
    translate: 0 -5.62rem;
  }
  80% {
    translate: 0 -5.62rem;
  }
  90% {
    translate: 0;
  }
  100% {
    translate: 0;
  }
}

#download-btn {
  color: #f4f4f4;
  border: 1px solid rgb(146, 148, 248);
  position: relative;
  overflow: hidden;
}

#download-btn:hover {
  box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
}

#download-btn:before {
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

#download-btn:hover:before {
  left: 100%;
}
</style>
