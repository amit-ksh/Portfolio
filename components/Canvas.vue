<template>
  <canvas
    ref="canvas"
    :class="`!w-full absolute z-[-1] ${route.path === '/' ? '!h-full' : ''}`"
  ></canvas>
</template>

<script setup>
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
} from 'three'
import {
  getTotalHeight,
  getTotalWidth,
  disableScroll,
  enableScroll,
} from '~/utils/helpers'
import {
  resizeCanvas,
  animatePlane,
  createPlane,
  createStars,
  generatePlane,
} from '~/utils/three'

const route = useRoute()
const canvas = ref()
const animating = ref()
let app = null

//------- CANVAS MAGIC ----------->
const CAMERA_POSITION = { x: 0, y: 0, z: 60 }
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

// Page Transition Animation
const travel = () => {
  if (!camera || !app) return

  // Setting the canvas size to 100% of window
  // for the consistent animation
  resizeCanvas(renderer, camera, innerWidth, innerHeight)
  disableScroll()
  gsap.to(camera.position, {
    z: 30,
    ease: 'power3.inOut',
    duration: 2,
  })
  gsap.to(camera.rotation, {
    x: Math.PI / 3,
    ease: 'power3.inOut',
    duration: 2,
  })
  gsap.to(camera.position, {
    y: 1000,
    ease: 'power3.in',
    duration: 2.5,
    delay: 0.5,
    onComplete: () => {
      enableScroll()
      // Reset to original position
      camera.rotation.set(0, 0, 0)
      camera.position.set(
        CAMERA_POSITION.x,
        CAMERA_POSITION.y,
        CAMERA_POSITION.z
      )

      gsap.to(app, {
        opacity: 1,
        duration: 1,
      })
      animating.value = false
    },
  })
}

// Activating page transition animation
watch(route, () => {
  if (animating.value) return

  animating.value = true
  gsap.to(app, {
    opacity: 0,
    duration: 0,
    onComplete: () => {
      travel()
    },
  })
})

watch(animating, () => {
  if (animating.value) return

  if (route.path === '/') {
    scene.add(planeMesh)
    resizeCanvas(renderer, camera, innerWidth, innerHeight)
  } else {
    scene.remove(planeMesh)
    resizeCanvas(renderer, camera, getTotalWidth(), getTotalHeight())
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
  controls.enableRotate = false
  camera.position.z = CAMERA_POSITION.z

  scene.add(light)
  scene.add(backLight)

  generatePlane(planeMesh, world)
  if (route.path === '/') {
    setTimeout(() => {
      scene.add(planeMesh)
    }, 3000)
  }
  scene.add(stars)

  const mouse = { x: undefined, y: undefined }
  let frame = 0
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)
    frame += 0.01

    if (route.path === '/') animatePlane(planeMesh, raycaster, frame)
    stars.rotation.x += 0.0001
  }

  animate()

  // PLANE MESH HOVER EFFECT
  addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1
    mouse.y = -(event.clientY / innerHeight) * 2 + 1
  })

  // WINDOW RESIZE HANDLERS
  window.addEventListener('resize', () => {
    resizeCanvas(renderer, camera, getTotalWidth(), getTotalHeight())
  })

  window.addEventListener('orientationchange', () => {
    resizeCanvas(renderer, camera, getTotalWidth(), getTotalHeight())
  })

  // Setting the canvas size to 100% of window
  // for the consistent animation
  resizeCanvas(renderer, camera, innerWidth, innerHeight)

  disableScroll()
  gsap.to(camera.rotation, {
    x: Math.PI / 5,
    ease: 'power3.inOut',
    duration: 2,
  })
  gsap.to(camera.position, {
    y: 800,
    z: -600,
    ease: 'power3.in',
    duration: 2,
    delay: 1,
    onComplete: () => {
      if (route.path === '/') {
        scene.add(planeMesh)
        resizeCanvas(renderer, camera, innerWidth, innerHeight)
      } else {
        scene.remove(planeMesh)
        resizeCanvas(renderer, camera, getTotalWidth(), getTotalHeight())
      }

      enableScroll()
      camera.rotation.set(0, 0, 0)
      camera.position.set(
        CAMERA_POSITION.x,
        CAMERA_POSITION.y,
        CAMERA_POSITION.z
      )
    },
  })
})
</script>
