import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GlitchPass } from "../../assets/GlitchPass";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLocation } from "react-router-dom";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

const Experience = () => {
  const location = useLocation();
  const mountRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Check if component is mounted
    console.log(mountRef.current);
    // Camera Values
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load hdr
    const hdriLoader = new RGBELoader();
    hdriLoader.load("assets/hdr/studio.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });
    // Textures
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/assets/star_08.png");

    // Add Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 100;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0x2d56ff,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Post Processing

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(window.devicePixelRatio);
    composer.addPass(renderPass);

    // Add background plane
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd9e7fc,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.z = -10;
    scene.add(plane);

    // Add html element

    // Geoemtry follows mouse
    var mouse = new THREE.Vector3(0, 0, 0);

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      var dir = vector.sub(camera.position).normalize();
      var distance = -camera.position.z / dir.z;
      var pos = camera.position.clone().add(dir.multiplyScalar(distance));

      mouse = pos;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Load model
    let mixer;
    let model;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/assets/testcharacter.glb", (gltf) => {
      model = gltf.scene;
      model.position.y = -9;
      model.position.x = 0;
      model.position.z = -3;
      model.scale.set(1, 1, 1);
      scene.add(model);

      // Animation
      mixer = new THREE.AnimationMixer(model);
      const action = mixer.clipAction(gltf.animations[1]);
      action.play();
    });

    const clock = new THREE.Clock();
    const animate = () => {
      setTimeout(() => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Make particles follow mouse position but tiny movement
        particles.rotation.y = elapsedTime * 0.05;

        // Camara parallax effect on mouse move
        // camera.position.x += (mouse.x - camera.position.x) * 0.01;
        // camera.position.y += (-mouse.y - camera.position.y) * 0.01;

        // Animate gltf model
        scene.children.forEach((child) => {
          if ((child.name = "Scene")) {
            child.children.forEach((child) => {
              if (child.name === "Cube003") {
                child.rotation.y = elapsedTime * 0.5;
              }
            });
          }
        });

        renderer.render(scene, camera);
        composer.render();

        // Update mixer
        if (mixer) {
          mixer.update(0.02);
        }
      }, 1000 / 72);
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
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        display: location.pathname === "/socialmedia" ? "none" : "block",
        position: "absolute",
        left: 0,
        zIndex: -5,
      }}
    ></div>
  );
};

export default Experience;
