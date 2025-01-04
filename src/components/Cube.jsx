import { Float, useGLTF } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes, materials } = useGLTF('models/aprenda_programar.glb');
  return (
    <Float floatIntensity={2}>
      <group scale={1} dispose={null} {...props}>
      <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.JAVASCRIPT}
          scale={[1, 1, 2]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/aprenda_programar.glb');

export default Cube;
