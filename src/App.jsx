import { useFrame, extend, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export const App = () => {
  const { camera, gl } = useThree()
  const cubeRef = useRef()
  const groupRef = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin() * 8
    // state.camera.position.z = Math.cos() * 8
    // state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={2} />
      <ambientLight intensity={1.5} />

      <group ref={groupRef}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry scale={1.2} />
          <meshStandardMaterial color={'orange'} />
        </mesh>

        <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} scale={1.5} position={[2, 0, 0]}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={'greenyellow'} />
      </mesh>
    </>
  )
}