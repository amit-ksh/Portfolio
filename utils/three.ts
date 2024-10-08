import {
  PlaneGeometry,
  BufferAttribute,
  MeshPhongMaterial,
  DoubleSide,
  Mesh,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three'
import gsap from 'gsap'

const initialColor = {
  r: 0,
  g: 0.09,
  b: 0.4,
} as const

/**
 * Create the plane mesh using THREE.Mesh
 * @param {Object} world
 * @returns plane: Mesh
 */
export const createPlane = (world: any) => {
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
  return new Mesh(planeGeometry, planeMaterial)
}

/**
 * Randomize the vertice position and give color to the given plane mesh
 * @param {Mesh}    planeMesh
 * @param {Object}  world
 */
export const generatePlane = (planeMesh: any, world: any) => {
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
      const x = array[i + 0]
      const y = array[i + 1]
      const z = array[i + 2]

      array[i] = x + (Math.random() - 0.5) * 4
      array[i + 1] = y + (Math.random() - 0.5) * 4
      array[i + 2] = z + (Math.random() - 0.5) * 4
    }

    randomValues.push(Math.random() * Math.PI * 2)
  }

  planeMesh.geometry.attributes.position.randomValues = randomValues
  planeMesh.geometry.attributes.position.originalPosition =
    planeMesh.geometry.attributes.position.array

  const colors = []
  for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
    // r g b -> 0.0 - 1.0
    colors.push(initialColor.r, initialColor.g, initialColor.b)
  }
  planeMesh.geometry.setAttribute(
    'color',
    new BufferAttribute(new Float32Array(colors), 3)
  )
}

/**
 * Create the stars using THREE.Points class
 * @param {int} nStars  default=10000
 * @returns stars: Points
 */
export const createStars = (nStars = 10000) => {
  const starGeometry = new BufferGeometry()
  const starMaterial = new PointsMaterial({
    color: 0xffffff,
  })
  const starVertices = []
  for (let i = 0; i < nStars; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    starVertices.push(x, y, z)
  }
  starGeometry.setAttribute(
    'position',
    new Float32BufferAttribute(starVertices, 3)
  )
  return new Points(starGeometry, starMaterial)
}

/**
 * Animate the plane mesh
 * @param {Mesh}      planeMesh
 * @param {Raycaster} raycaster
 * @param {float}     frame
 */
export const animatePlane = (planeMesh: any, raycaster: any, frame: number) => {
  const { array, originalPosition, randomValues } =
    planeMesh.geometry.attributes.position

  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01
    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.008
  }
  planeMesh.geometry.attributes.position.needsUpdate = true

  const intersects = raycaster.intersectObject(planeMesh)
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes

    const hoverColor = {
      r: 0,
      g: 0.1,
      b: 0.9,
    } as const
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
}

/**
 * Resize the Canvas to the given width and height
 * @param {WebGLRenderer}         renderer
 * @param {PerspectiveCamera}     camera
 * @param {int}                   width
 * @param {int}                   height
 */
export const resizeCanvas = (
  renderer: WebGLRenderer,
  camera: PerspectiveCamera,
  width: number,
  height: number
) => {
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
