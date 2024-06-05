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

const Experience = () => {
  const mountRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
    scene.background = null;
    mountRef.current.appendChild(renderer.domElement);

    // Load hdr
    const hdriLoader = new RGBELoader();
    hdriLoader.load("assets/hdr/studio.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });
    // Load gltf model

    var gltfModelGroup = new THREE.Group();
    var model = null;
    const gltfloader = new GLTFLoader();
    gltfloader.load("/assets/LC Letras.gltf", (gltf) => {
      model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.1,
            envMapIntensity: 0.01,
            envMap: scene.environment,
          });
        }
      });
      model.scale.set(0.3, 0.3, 0.3);
      gltfModelGroup.add(model);
    });

    scene.add(gltfModelGroup);
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
      size: 0.2,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffffff,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Post Processing

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(window.devicePixelRatio);
    composer.addPass(renderPass);

    // Lights
    const amblientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(amblientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10, 0, 2);
    pointLight.position.x = 0;
    pointLight.position.y = 0;

    scene.add(pointLight);

    // Fiml grain pass
    var filmPass = new FilmPass(1, false);
    composer.addPass(filmPass);

    // After Image pass
    var afterImagePass = new AfterimagePass();
    composer.addPass(afterImagePass);
    afterImagePass.uniforms["damp"].value = 0.9;

    var modelInstance = new THREE.Group();
    function addModelGroup() {
      const modelGroup = model.clone();
      modelGroup.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: Math.random() * 0xffffff,
            roughness: 0.1,
            envMapIntensity: 0.01,
            envMap: scene.environment,
          });
        }
      });
      modelGroup.scale.set(0.3, 0.3, 0.3);
      modelGroup.position.x = (Math.random() - 0.5) * 10;
      modelGroup.position.y = (Math.random() - 0.5) * 10;
      modelInstance.add(modelGroup);
    }

    scene.add(modelInstance);
    var container = document.getElementsByClassName("whocontainer");

    container[0].addEventListener("click", () => {
      particlesMaterial.color.setHex(Math.random() * 0xffffff);
      addModelGroup();

      if (modelInstance.children.length > 10) {
        modelInstance.remove(modelInstance.children[0]);
      } else
        setTimeout(() => {
          modelInstance.remove(modelInstance.children[0]);
          particlesMaterial.color.setHex(0xffffff);
        }, 5000);
    });

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

        gltfModelGroup.rotation.x = elapsedTime;
        gltfModelGroup.rotation.y = elapsedTime;

        gltfModelGroup.position.x = mouse.x;
        gltfModelGroup.position.y = mouse.y;

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
        width: "100dvw",
        height: "100dvh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default Experience;
