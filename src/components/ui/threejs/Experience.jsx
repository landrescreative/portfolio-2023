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
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

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
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0x2d56ff,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Creates a loop of cubes
    const cubes = new THREE.Group();
    const cubes2 = new THREE.Group();
    const cubes3 = new THREE.Group();
    scene.add(cubes2);
    scene.add(cubes);
    scene.add(cubes3);

    const cubeGeometry = new THREE.DodecahedronGeometry(0.4, 0);
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
      roughness: 0.1,
      transmission: 1, // Add transparency
      thickness: 0.5, // Add refraction!
    });

    const cubeGeometry2 = new THREE.TorusGeometry(1, 0.4, 16, 30);
    const cubeMaterial2 = new THREE.MeshPhysicalMaterial({
      roughness: 0.2,
      transmission: 1, // Add transparency
      thickness: 0.5, // Add refraction!
    });

    const cubeGeometry3 = new THREE.CapsuleGeometry(2, 3, 4, 18);
    const cubeMaterial3 = new THREE.MeshPhysicalMaterial({
      color: 0x2d56ff,
      roughness: 0.2,
      metalness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 1, // Add transparency
      thickness: 0.5, // Add refraction!
    });

    for (let i = 0; i < 30; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = (Math.random() - 0.5) * 15;
      cube.position.y = (Math.random() - 0.5) * 10;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cube.position.z = (Math.random() - 0.5) * 5;
      const scale = Math.random() * 2;
      cube.material.color.setHex(0x2d56ff);
      cube.scale.set(scale, scale, scale);
      cubes.add(cube);
    }

    for (let i = 0; i < 30; i++) {
      const cube2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
      cube2.position.x = (Math.random() - 0.5) * 15;
      cube2.position.y = (Math.random() - 0.5) * 10;
      cube2.position.z = (Math.random() - 0.5) * 10;
      cube2.rotation.x = Math.random() * Math.PI;
      cube2.rotation.y = Math.random() * Math.PI;
      const scale = Math.random() * 0.9;
      cube2.scale.set(scale, scale, scale);
      cubes2.add(cube2);
    }

    for (let i = 0; i < 30; i++) {
      const cube3 = new THREE.Mesh(cubeGeometry3, cubeMaterial3);
      cube3.position.x = (Math.random() - 0.5) * 15;
      cube3.position.y = (Math.random() - 0.5) * 10;
      cube3.position.z = (Math.random() - 0.5) * 2;
      cube3.rotation.x = Math.random() * Math.PI;
      cube3.rotation.y = Math.random() * Math.PI;
      cube3.material.color.setHex(0x00ff1a);
      const scale = Math.random() * 0.2;
      cube3.scale.set(scale, scale, scale);
      cubes3.add(cube3);
    }

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

    // Click event
    var container = document.getElementsByClassName("whocontainer");

    if (container && container.length > 0) {
      container[0].addEventListener("click", () => {
        // Change color of cubes group
        cubes.children.forEach((cube) => {
          cube.material.color.setHex(Math.random() * 0xffffff);
        });
        cubes2.children.forEach((cube) => {
          cube.material.color.setHex(Math.random() * 0xffffff);
        });
        cubes3.children.forEach((cube) => {
          cube.material.color.setHex(Math.random() * 0xffffff);
        });
      });
    } else;

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

    const clock = new THREE.Clock();
    const animate = () => {
      setTimeout(() => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Make particles follow mouse position but tiny movement
        particles.rotation.y = elapsedTime * 0.05;

        // Make cubes rotate
        cubes2.rotation.z = elapsedTime * 0.2;
        cubes.rotation.z = -elapsedTime * 0.05;

        // Camera parallax effect
        camera.position.x += (mouse.x - camera.position.x) * 0.001;
        camera.position.y += (mouse.y - camera.position.y) * 0.001;

        renderer.render(scene, camera);
        composer.render();
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
      mountRef.current.removeChild(renderer.domElement);
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
