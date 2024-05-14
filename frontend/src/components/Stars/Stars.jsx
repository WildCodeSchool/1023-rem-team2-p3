/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// const colors = ["#9574D9", "#9EE6FE", "#E34BD1"];

function Stars(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(7000), { radius: 1.2 });
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.005}
          color="#ffffff"
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
function StarsCanvas() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
export default StarsCanvas;
