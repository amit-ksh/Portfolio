<template>
  <div>
    <canvas class="absolute z-[-1]" ref="canvas"></canvas>

    <main class="relative px-6 py-12">
      <div class="
        absolute min-h-[100vh] -inset-1 bg-gradient-to-r from-[#2a2a72] to-[#009ffd] opacity-50 z-[-1]
      "
      ></div>

      <AboutMe  />
    </main>
  </div>
</template>

<script setup>
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
import { getTotalHeight, getTotalWidth } from '~/utils/helpers'


const canvas = ref()

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

  window.addEventListener('resize', () => {
    renderer.setSize(getTotalWidth(), getTotalHeight())
    camera.aspect = getTotalWidth() / getTotalHeight()
    camera.updateProjectionMatrix()
  })
});
</script>
