import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    mountRef.current.appendChild(renderer.domElement);

    // Test Geometry
    const cube = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        wireframe: true,
      })
    );
    scene.add(cube);

    // Change cube color on click

    // Backgorund graident

    var testshader = new THREE.ShaderMaterial({
      uniforms: {
        color1: {
          value: new THREE.Color("#191714"),
        },
        color2: {
          value: new THREE.Color("#2e2e2e"),
        },
      },
      vertexShader: `
        varying vec2 vUv;
    
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
      
        varying vec2 vUv;
        
        void main() {
          
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
        }
      `,
    });

    // Shader uniforms

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

    function setupScrollAnimation() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".landres-text",
          endTrigger: ".contact_cta",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(
        testshader.uniforms.color2.value,
        {
          r: 0.0,
          g: 0.0,
          b: 0.0,
          duration: 1,
        },
        0
      );
    }
    setupScrollAnimation();

    // Make a timer to change the color of the shader

    var backgroundTest = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 40),
      testshader
    );
    backgroundTest.position.z = -20;
    scene.add(backgroundTest);

    // Post Processing

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(window.devicePixelRatio);
    composer.addPass(renderPass);

    // Lights
    const amblientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(amblientLight);

    const pointLight = new THREE.PointLight(0xffffff, 20);
    pointLight.position.x = 0;
    pointLight.position.y = 0;

    scene.add(pointLight);

    const pointLighthelper = new THREE.PointLightHelper(pointLight);
    scene.add(pointLighthelper);

    // Fiml grain pass
    var filmPass = new FilmPass(1, false);
    composer.addPass(filmPass);

    // After Image pass
    var afterImagePass = new AfterimagePass();
    composer.addPass(afterImagePass);
    afterImagePass.uniforms["damp"].value = 0.9;

    // on click

    var geometryGroup = new THREE.Group();

    function addGeometry() {
      const geom = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          wireframe: true,
        })
      );
      geom.material.color.setHex(Math.random() * 0xffffff);
      geom.position.x = (Math.random() - 0.5) * 10;
      geom.position.y = (Math.random() - 0.5) * 10;
      geometryGroup.add(geom);
    }

    scene.add(geometryGroup);

    var container = document.getElementsByClassName("whocontainer");

    container[0].addEventListener("click", () => {
      cube.material.color.setHex(Math.random() * 0xffffff);
      particlesMaterial.color.setHex(Math.random() * 0xffffff);
      addGeometry();

      if (geometryGroup.children.length > 10) {
        geometryGroup.remove(geometryGroup.children[0]);
      } else
        setTimeout(() => {
          geometryGroup.remove(geometryGroup.children[0]);
          cube.material.color.setHex(0xffffff);
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

        cube.rotation.x = elapsedTime;
        cube.rotation.y = elapsedTime;

        cube.position.x = mouse.x;
        cube.position.y = mouse.y;

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
