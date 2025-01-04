import { Float, useGLTF } from '@react-three/drei';

const Target = (props) => {
  const { nodes, materials } = useGLTF('/models/aprenda_programar.glb');

  return (
    <Float floatIntensity={1}>
    <group scale={1} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.JAVA}
          scale={[1, 1, 1]}
        />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/aprenda_programar.gltf');

export default Target;