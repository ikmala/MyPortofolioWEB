import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/aprenda_programar.glb');

  return (
    <Float floatIntensity={1}>
      <group scale={1} {...props} dispose={null}>
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials.PYTHON_AMARELO}
          scale={[1, 1, 1]}
          castShadow
          receiveShadow
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.PYTHON_AZUL}
          scale={[1, 1, 1]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/aprenda_programar.glb');

export default ReactLogo;
