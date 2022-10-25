<template>
  <div>
    <canvas class="absolute z-[-1]" ref="canvas"></canvas>

    <main class="relative px-6 py-12">
      <div class="
        absolute min-h-[100vh] -inset-1 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] opacity-50 z-[-1]
      "
      ></div>

      <div>
        <h2 ref="titleRef" id="title"
          class="text-white font-exo text-5xl mb-4 uppercase opacity-0"
          style="translate: 0 30px;"
        >
          About Me
        </h2>

        <div ref="aboutRef" class="
          px-6 py-4 md:mx-auto ml-4 max-w-2xl text-white border-2 border-blue-700 border-solid 
          rounded-sm opacity-0
        "
        >
          <div v-for="row in data" :key="row.attr" class="text-xl font-mono mb-2">
            <h3 class="font-bold text-xl md:text-2xl tracking-wide text-justify">{{ row.attr }}</h3>
            <p class="text-sm md:text-lg">{{ row.value }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import {
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points,
} from 'three';

const age = `
${new Date().getFullYear() - 2001} years old!
`

const data = [
  {
    attr: 'Name', value: 'Amit Kumar Sharma',
  },
  {
    attr: 'Age', value: age,
  },
  {
    attr: 'Location', value: 'Ranchi, Jharkhand, India',
  },
  {
    attr: 'Summary', value: `A 21 year old student, self-motivated tech enthusiast, full-stack developer and a ML enthusiast. 
                            I spend my time learning & experimenting new technologies.`,
  },
  {
    attr: '', value: `Over the last two years, I've gained expertise in modern tech stacks like React, Next, Vue, NodeJS and PostgreSQL.
                            I've worked on plenty of projects including REST APIs, Websites and CLIs.
                            I'm currently focusing on participating in developer friendly events and contributing to opensource projects & softwares.`,
  },
]

const canvas = ref()
const titleRef = ref()
const aboutRef = ref()

const getTotalHeight = () => {
  return Math.max(document.body.getBoundingClientRect().height, window.innerHeight)
}

const getTotalWidth = () => {
  return Math.max(document.body.getBoundingClientRect().width, window.innerWidth)
}


onMounted(() => {
  const raycaster = new Raycaster()
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    75,
    getTotalWidth() / getTotalHeight(),
    0.1,
    1000
  )

  const renderer = new WebGLRenderer({
    canvas: canvas.value
  })
  renderer.setSize(getTotalWidth(), getTotalHeight())
  renderer.setPixelRatio(devicePixelRatio)

  camera.position.z = 50

  const light = new DirectionalLight(0xffffff, 1)
  light.position.set(0, -1, 1)
  scene.add(light)

  const starGeometry = new BufferGeometry()
  const starMaterial = new PointsMaterial({
    color: 0xffffff,
  })
  const starVertices = []
  for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    starVertices.push(x, y, z)
  }
  starGeometry.setAttribute(
    'position',
    new Float32BufferAttribute(starVertices, 3)
  )
  const stars = new Points(starGeometry, starMaterial)
  scene.add(stars)

  const mouse = {
    x: undefined,
    y: undefined,
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)

    stars.rotation.x += 0.0001
  }

  animate()

  window.addEventListener('resize', (e) => {
    renderer.setSize(getTotalWidth(), getTotalHeight())
    camera.aspect = getTotalWidth() / getTotalHeight()
    camera.updateProjectionMatrix()
  })

  gsap.to(titleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo'
  });

  gsap.to(aboutRef.value, {
    opacity: 1,
    duration: 2,
    ease: 'sine.out',
  })
});
</script>
