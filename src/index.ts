import './index.css';
const OrbitControls = require('three-orbitcontrols')
import * as THREE from 'three';
import Humanoid from './humanoid';

const createHumanoid = () => {
  const humanoidObj = new Humanoid();
  scene.add(humanoidObj.humanoid);
}

import AxeHelper from './modules/AxesHelper/AxeHelper';
import Creeper from './modules/character/Creeper';
import BasicGround from './modules/ground/BasicGround';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(30, 30, 30);
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// DirectionalLight
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(-10, 20, 20)
scene.add(directionalLight)
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
  
  scene.add(basicGround.getPlane());
  scene.add(creeper.getCharacter());
  scene.add(axeHelper.getAxes());
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