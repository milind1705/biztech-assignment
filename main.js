import './style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer();
const camera = new THREE.PerspectiveCamera(75,  window.innerWidth/window.innerHeight, 0.1, 2000);
// const raycaster = THREE.Raycaster()
camera.position.set(5,5,5)
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement);
new OrbitControls(camera, renderer.domElement);

//Light
const ambientLightLight = new THREE.AmbientLight(0xffffff, 1)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1 )
directionalLight.position.set(0,5,0)
scene.add(ambientLightLight)
scene.add(directionalLight)
//Adding GLTF to scene
const loader = new GLTFLoader();

loader.load('/Formal_Shoe-White.glb', (glb) =>{
  console.log(glb.scene)
 const sole = glb.scene.getObjectByName("Sole-Var1")
  for(let mesh of glb.scene.children){
    console.log(mesh.name);
  }
 
  scene.add(glb.scene)

})


function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate();