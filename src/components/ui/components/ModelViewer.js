import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLocation } from "react-router-dom";

const Model = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/"); // Path to the Draco decoder

  const { scene, animations } = useGLTF("/models/model.glb", true, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });
  const { actions, mixer } = useAnimations(animations, scene);
  const modelRef = useRef();

  useEffect(() => {
    if (actions) {
      const firstAnimation = animations[0]?.name;
      const secondAnimation = animations[1]?.name;
      const thirdAnimation = animations[2]?.name;

      if (firstAnimation && secondAnimation && thirdAnimation) {
        const firstAction = actions[firstAnimation];
        const secondAction = actions[secondAnimation];
        const thirdAction = actions[thirdAnimation];

        firstAction.reset().play().setLoop(THREE.LoopOnce, 1);
        firstAction.clampWhenFinished = true;

        mixer.addEventListener("finished", (event) => {
          if (event.action === firstAction) {
            firstAction.crossFadeTo(secondAction, 1, true);
            secondAction.reset().play().setLoop(THREE.LoopRepeat);
          } else if (event.action === thirdAction) {
            thirdAction.fadeOut(1);
            secondAction.fadeIn(1).reset().play().setLoop(THREE.LoopRepeat);
          }
        });

        modelRef.current = { firstAction, secondAction, thirdAction };
      }
    }
  }, [actions, animations, mixer]);

  const handleClick = () => {
    if (modelRef.current) {
      const { secondAction, thirdAction } = modelRef.current;
      secondAction.fadeOut(1);
      thirdAction.fadeIn(1).reset().play().setLoop(THREE.LoopOnce, 1);
    }
  };

  return (
    <primitive
      object={scene}
      position={[0, -8, -1]}
      scale={1}
      onClick={handleClick}
    />
  );
};

const ModelViewer = () => {
  const location = useLocation();

  return (
    <Canvas
      style={{
        display: location.pathname === "/socialmedia" ? "none" : "block",
        position: "absolute",
        left: 0,
        zIndex: 0,
        borderRadius: "100px",
      }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
        <Environment files="/models/hdr/studio.hdr" />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 12]}
          fov={50}
          near={0.01}
          far={1000}
        />
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ModelViewer;
