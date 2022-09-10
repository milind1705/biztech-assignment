import './style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer();
const camera = new THREE.PerspectiveCamera(75,  window.innerWidth/window.innerHeight, 0.1, 2000);

camera.position.set(5,5,5)
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement);
new OrbitControls(camera, renderer.domElement);

//Light
const ambientLightLight = new THREE.AmbientLight(0xffffff, 1)
const PointLight = new THREE.PointLight(0xffffff, 7, 5, 1)
PointLight.position.set(0,5,0)
scene.add(ambientLightLight)
scene.add(PointLight)
//Adding GLTF to scene
const loader = new GLTFLoader();

loader.load('/Formal_Shoe-White.glb', (glb) =>{
  console.log(glb.scene)
  const children = [...glb.scene.children]
  for (let child of children){

    scene.add(child)
  }
  
})


function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate();