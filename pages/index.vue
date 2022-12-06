<template>
  <main>
    <div ref="socialsRef" class="absolute right-2" style="translate: 0 -100%;">
      <Socials />
    </div>
    
    <canvas ref="canvas"></canvas>

    <div
      class="absolute w-full max-w-2xl px-6"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
    >
      <h1 id="intro"
        ref="introRef"
        class="font-mono mb-4 text-2xl md:text-4xl tracking-wide opacity-0 text-white"
        style="translate: 0 30px;"
      >
        Hey👋! I'm <span class="font-bold">Amit Kumar Sharma</span>
      </h1>
      <h3 
        ref="roleRef" 
        class="mb-4 font-exo text-xl md:text-2xl font-semibold tracking-wide text-white opacity-0"
        style="translate: 0 30px;"  
      >
        Web Developer
      </h3>
      <div class="flex justify-end mt-4">
        <a 
          id="download-btn"
          ref="downloadBtn"
          href="https://drive.google.com/file/d/1J-aLetwdiJEEopSv2rVqddBlsvP2FhQa/view?usp=share_link"
          download="amit-resume.pdf"
          class="
            text-white px-4 py-2 font-semibold text-lg rounded-lg border-2 border-white tracking-wider
          "
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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  PlaneGeometry,
  BufferAttribute,
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  DoubleSide,
  Mesh,
  DirectionalLight,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points,
} from 'three';

const canvas = ref()
const introRef = ref()
const roleRef = ref()
const socialsRef = ref()

onMounted(() => {
  const world = {
    plane: {
      width: 400,
      height: 400,
      widthSegments: 50,
      heightSegments: 50,
    },
  }

  function generatePlane() {
    planeMesh.geometry.dispose()
    planeMesh.geometry = new PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    )

    // vertice position randomization
    const { array } = planeMesh.geometry.attributes.position
    const randomValues = []
    for (let i = 0; i < array.length; i++) {
      if (i % 3 === 0) {
        const x = array[i]
        const y = array[i + 1]
        const z = array[i + 2]

        array[i] = x + (Math.random() - 0.5) * 3
        array[i + 1] = y + (Math.random() - 0.5) * 3
        array[i + 2] = z + (Math.random() - 0.5) * 3
      }

      randomValues.push(Math.random() * Math.PI * 2)
    }

    planeMesh.geometry.attributes.position.randomValues = randomValues
    planeMesh.geometry.attributes.position.originalPosition =
      planeMesh.geometry.attributes.position.array

    const colors = []
    for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
      // r g b -> 0.0 - 1.0
      colors.push(0, 0.19, 0.4)
    }
    planeMesh.geometry.setAttribute(
      'color',
      new BufferAttribute(new Float32Array(colors), 3)
    )
  }

  const raycaster = new Raycaster()
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  )

  const renderer = new WebGLRenderer({
    canvas: canvas.value
  })
  renderer.setSize(innerWidth, innerHeight)
  renderer.setPixelRatio(devicePixelRatio)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  camera.position.z = 50

  const planeGeometry = new PlaneGeometry(
    world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments
  )
  const planeMaterial = new MeshPhongMaterial({
    side: DoubleSide,
    flatShading: true,
    vertexColors: true,
  })
  const planeMesh = new Mesh(planeGeometry, planeMaterial)
  scene.add(planeMesh)

  generatePlane()

  const light = new DirectionalLight(0xffffff, 1)
  light.position.set(0, -1, 1)
  scene.add(light)

  const backLight = new DirectionalLight(0xffffff, 1)
  backLight.position.set(0, 0, -1)
  scene.add(backLight)

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

  let frame = 0
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)
    frame += 0.01

    const { array, originalPosition, randomValues } =
      planeMesh.geometry.attributes.position
    for (let i = 0; i < array.length; i += 3) {
      // x
      array[i] =
        originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01
      // y
      array[i + 1] =
        originalPosition[i + 1] +
        Math.sin(frame + randomValues[i + 1]) * 0.001
    }
    planeMesh.geometry.attributes.position.needsUpdate = true

    const intersects = raycaster.intersectObject(planeMesh)
    if (intersects.length > 0) {
      const { color } = intersects[0].object.geometry.attributes

      // vertice 1
      color.setX(intersects[0].face.a, 0.1) // red
      color.setY(intersects[0].face.a, 0.5) // green
      color.setZ(intersects[0].face.a, 1) // blue
      // vertice 2
      color.setX(intersects[0].face.b, 0.1)
      color.setY(intersects[0].face.b, 0.5)
      color.setZ(intersects[0].face.b, 1)
      // vertice 3
      color.setX(intersects[0].face.c, 0.1)
      color.setY(intersects[0].face.c, 0.5)
      color.setZ(intersects[0].face.c, 1)

      const initialColor = {
        r: 0,
        g: 0.19,
        b: 0.4,
      }
      const hoverColor = {
        r: 0.1,
        g: 0.5,
        b: 1,
      }
      gsap.to(hoverColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        duration: 1,
        onUpdate: () => {
          // vertice 1
          color.setX(intersects[0].face.a, hoverColor.r) // red
          color.setY(intersects[0].face.a, hoverColor.g) // green
          color.setZ(intersects[0].face.a, hoverColor.b) // blue
          // vertice 2
          color.setX(intersects[0].face.b, hoverColor.r) // red
          color.setY(intersects[0].face.b, hoverColor.g) // green
          color.setZ(intersects[0].face.b, hoverColor.b) // blue
          // vertice 3
          color.setX(intersects[0].face.c, hoverColor.r) // red
          color.setY(intersects[0].face.c, hoverColor.g) // green
          color.setZ(intersects[0].face.c, hoverColor.b) // blue
          color.needsUpdate = true
        },
      })
    }

    stars.rotation.x += 0.0001
  }

  animate()

  addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1
    mouse.y = -(event.clientY / innerHeight) * 2 + 1
  })

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

  window.addEventListener('resize', (e) => {
    renderer.setSize(innerWidth, innerHeight)
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
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