import './index.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xeeeeee, 1.0);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);


let pointLight = new THREE.PointLight(0xaaaaaa);
pointLight.position.set(0,0,6);
// pointLight.lookAt(scene.position);
scene.add(pointLight);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


camera.position.set(0,0,6);

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});