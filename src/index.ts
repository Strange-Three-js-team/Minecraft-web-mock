import './index.css';
const OrbitControls = require('three-orbitcontrols')
import * as THREE from 'three';

import AxeHelper from './modules/AxesHelper/AxeHelper';
import Creeper from './modules/character/Creeper';
import EnderMan from './modules/character/EnderMan';

import BasicGround from './modules/ground/BasicGround';
import Zombie from './modules/character/Zombie';
import SmallZombie from './modules/character/SmallZombie';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(30, 30, 30);
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// spotlight
const spotLight = new THREE.SpotLight(0xffffff, 1)
spotLight.position.set(-10, 40, 30)
scene.add(spotLight)
document.body.appendChild(renderer.domElement);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;


const init = function () {
  const basicGround = new BasicGround();
  const creeper = new Creeper();
  const axeHelper = new AxeHelper();
  const enderMan = new EnderMan();
  const zombie = new Zombie();
  const smallZombie = new SmallZombie();
  
  scene.add(basicGround.getPlane());
  scene.add(creeper.getCharacter());
  scene.add(axeHelper.getAxes());
  scene.add(enderMan.getCharacter());
  scene.add(zombie.getCharacter());
  zombie.getCharacter().position.set(0, 0, 0);
  scene.add(smallZombie.getCharacter());
  smallZombie.getCharacter().position.set(0, 0, 20);
}

const render = function () {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

init();
render();