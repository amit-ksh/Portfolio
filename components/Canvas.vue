<template>
  <canvas ref="canvas" class="absolute z-[-1]"></canvas>
</template>

<script setup>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
} from 'three'

import { getTotalHeight, getTotalWidth, resizeCanvas } from '~/utils/helpers'
import {
  animatePlane,
  createPlane,
  createStars,
  generatePlane,
} from '~/utils/helpers'
import gsap from 'gsap'

const route = useRoute()
const router = useRouter()
const canvas = ref()
let app = null

//------- CANVAS MAGIC ----------->
const world = {
  plane: {
    width: 400,
    height: 400,
    widthSegments: 50,
    heightSegments: 50,
  },
}
const scene = new Scene()
let raycaster = null
let camera = null
let renderer = null
let controls = null

// MESH
const planeMesh = createPlane(world)
const stars = createStars()

// LIGHTS
const light = new DirectionalLight(0xffffff, 1)
light.position.set(0, -1, 1)

const backLight = new DirectionalLight(0xffffff, 1)
backLight.position.set(0, 0, -1)

// Navigate to the different routes with animation
const travel = (url) => {
  if (!camera || !app) return

  gsap.to(app, {
    opacity: 0,
    duration: 0.5,
  })
  gsap.to(camera.position, {
    z: 20,
    ease: 'power3.inOut',
    duration: 2,
  })
  gsap.to(camera.rotation, {
    x: route.path === '/' ? Math.PI / 2 : Math.PI / 6,
    ease: 'power3.inOut',
    duration: 2,
  })
  gsap.to(camera.position, {
    y: 800,
    z: route.path !== '/' ? -800 : 0,
    ease: 'power3.in',
    duration: 2,
    delay: 0.5,
    onComplete: () => {
      router.push({ path: url })

      // Reset to original position
      camera.rotation.set(0, 0, 0)
      camera.position.set(0, 0, 57)
    },
  })
}

// Add/Remove the plane mesh
watch(route, (newRoute) => {
  if (newRoute.path === '/') {
    scene.add(planeMesh)
  } else {
    scene.remove(planeMesh)
  }
})

onMounted(() => {
  app = document.querySelector('#app')

  raycaster = new Raycaster()
  camera = new PerspectiveCamera(
    75,
    getTotalWidth() / getTotalHeight(),
    0.1,
    1000
  )
  renderer = new WebGLRenderer({
    canvas: canvas.value,
  })
  renderer.setSize(getTotalWidth(), getTotalHeight())
  renderer.setPixelRatio(devicePixelRatio)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  camera.position.z = 57

  scene.add(light)
  scene.add(backLight)

  generatePlane(planeMesh, world)
  if (route.path === '/') scene.add(planeMesh)
  scene.add(stars)

  const mouse = { x: undefined, y: undefined }

  let frame = 0
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)
    frame += 0.01

    if (route.path === '/') animatePlane(planeMesh, raycaster, frame)
    if (route.path === '/') {
      resizeCanvas(renderer, camera, innerWidth, innerHeight)
    } else {
      resizeCanvas(renderer, camera, getTotalWidth(), getTotalHeight())
    }

    stars.rotation.x += 0.0001
  }

  animate()

  addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1
    mouse.y = -(event.clientY / innerHeight) * 2 + 1
  })

  window.addEventListener('resize', () => {
    resizeCanvas(renderer, camera, getTotalWidth(), getTotalHeight())
  })
})

defineExpose({ travel })
</script>
