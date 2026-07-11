"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 4);
    const material = new THREE.MeshPhongMaterial({
      color: 0xc0c1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1.5, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 2));

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      sphere.rotation.x += 0.003;
      sphere.rotation.y += 0.003;
      sphere.scale.setScalar(1 + Math.sin(Date.now() * 0.0015) * 0.05);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="w-full h-[380px] md:h-[500px]" />
      <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-150" />
    </div>
  );
}
