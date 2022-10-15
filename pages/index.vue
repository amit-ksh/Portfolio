<template>
  <main>
    <canvas ref="canvas"></canvas>

    <div id="container" ref="containerRef"
      class="absolute text-white w-full max-w-2xl px-6"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
    >
      <h1 id="intro"
        ref="introRef"
        class="font-space-mono mb-4 text-2xl tracking-wide opacity-0"
        style="transform: translateY(30px);"
      >
        Hey👋! I'm Amit Kumar Sharma
      </h1>
      <p id="who-am-i"
        ref="whoAmIRef"
        class="mb-5 opacity-0"
      >
        A 21 year old student, self-motivated tech enthusiast, full-stack developer and a ML enthusiast.
        I spend my time learning & experimenting new technologies.
      </p>
      <p id="summary" ref="summaryRef" class="opacity-0">
        Over the last two years, I've gained expertise in modern tech stacks like React, Next, Vue, NodeJS and PostgreSQL.
        I've worked on plenty of projects including REST APIs, Websites and CLIs.
        I'm currently focusing on participating in developer friendly events, hackathons and contributing to opensource projects & softwares.
      </p>

      <a
        ref="viewProjectsBtn"
        href=""
        class="
          border px-4 py-2 rounded-lg font-space-mono mt-8 inline-block font-bold text-lg
          border-white hover:bg-white hover:text-gray-800
        "
        style="transform: translateY(30px)"
      >
        View Projects
      </a>
    </div>
  </main>
</template>

<script setup>
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
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

const router = useRouter();

const canvas = ref()
const containerRef = ref()
const introRef = ref()
const whoAmIRef = ref()
const summaryRef = ref()
const viewProjectsBtn = ref()

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

  new OrbitControls(camera, renderer.domElement)
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

  gsap.to(camera.rotation, {
    x: 1,
    ease: 'power3.inOut',
    duration: 2,
  })

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

  gsap.to(whoAmIRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.3,
    ease: 'expo',
  })

  gsap.to(summaryRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.6,
    ease: 'expo',
  })

  viewProjectsBtn.value.addEventListener('click', (e) => {
      e.preventDefault()
      gsap.to(containerRef.value, {
        opacity: 0,
      })
      gsap.to(camera.position, {
        z: 20,
        ease: 'power3.inOut',
        duration: 2,
      })
      gsap.to(camera.rotation, {
        x: Math.PI / 2,
        ease: 'power3.inOut',
        duration: 2,
      })
      gsap.to(camera.position, {
        y: 1000,
        ease: 'power3.in',
        duration: 1.5,
        delay: 0.5,
        onComplete: () => {
          router.push('/projects');
        },
      })
  })


  window.addEventListener('resize', (e) => {
    renderer.setSize(innerWidth, innerHeight)
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
  })
})
</script>
