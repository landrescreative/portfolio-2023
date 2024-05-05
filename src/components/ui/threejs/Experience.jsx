import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";

const Experience = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Camera Values
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Test Geometry
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Background
    const background = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2, 2),
      new THREE.MeshNormalMaterial()
    );

    // Post Processing

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(window.devicePixelRatio);
    composer.addPass(renderPass);

    // Fiml grain pass
    var filmPass = new FilmPass(0.35, 0.025, 648, false);
    composer.addPass(filmPass);

    // Animation

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      cube.rotation.x = elapsedTime;

      renderer.render(scene, camera);
      composer.render();
    };

    // Reize Event
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      composer.setSize(window.innerWidth, window.innerHeight);

      camera.updateProjectionMatrix();
    });

    // clean up

    animate();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", position: "fixed", zIndex: -1 }}
    >
      <h1></h1>
    </div>
  );
};

export default Experience;
