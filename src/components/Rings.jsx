import { Float, useGLTF } from '@react-three/drei';


const Rings = ({  ...props  }) => {
  const { nodes, materials } = useGLTF('models/aprenda_programar.glb');

  return (
    <Float floatIntensity={1}>
      <group scale={1} dispose={null} {...props}>
      <mesh
          geometry={nodes.Object_47.geometry}
          material={materials.ANDROIDSTUDIO}
          scale={[1, 1, 0]}
        />
      </group>
    </Float>
  );
};
useGLTF.preload('models/aprenda_programar.glb');

export default Rings;
