import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const SHADOW_WIDTH = 1024;
const SHADOW_HEIGHT = 1024;
const SHADOW_NEAR = 0.5;
const SHADOW_FAR = 500;

function initRenderer() {
  const canvasContainer = document.getElementById(`threeJSCanvasContainer`);

  const scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.35);

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.65);
  directionalLight.target.position.set(0, 0, 0);

  const pointLight1 = new THREE.PointLight(0xF6F2FF, 0.1, 1025, 2);
  pointLight1.castShadow = true;
  pointLight1.shadow.mapSize.width = SHADOW_WIDTH;
  pointLight1.shadow.mapSize.height = SHADOW_HEIGHT;
  pointLight1.shadow.camera.near = SHADOW_NEAR;
  pointLight1.shadow.camera.far = SHADOW_FAR;

  const pointLight2 = new THREE.PointLight(0xF5FEFF, 0.1, 1025, 2);
  pointLight2.castShadow = true;
  pointLight2.shadow.mapSize.width = SHADOW_WIDTH;
  pointLight2.shadow.mapSize.height = SHADOW_HEIGHT;
  pointLight2.shadow.camera.near = SHADOW_NEAR;
  pointLight2.shadow.camera.far = SHADOW_FAR;

  const lightGroup = new THREE.Group();
  lightGroup.add(ambientLight);
  lightGroup.add(directionalLight.target);
  lightGroup.add(directionalLight);
  lightGroup.add(pointLight1);
  lightGroup.add(pointLight2);
  scene.add(lightGroup);

  const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
  );

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor(new THREE.Color(0x9C84CD), 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasContainer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  function renderScene() {
    controls.update();
    renderer.render(scene, camera);
  }

  function updateCameraProjection() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function redrawScene(object) {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }

    scene.add(lightGroup);
    scene.add(object);
  }

  function setCameraAndLights(sceneDescription) {
    ambientLight.intensity = sceneDescription.ambientLightIntensity;

    camera.position.copy(sceneDescription.cameraPosition);

    directionalLight.position.copy(sceneDescription.directionalLightPosition);

    pointLight1.intensity = sceneDescription.pointLight1Intensity;
    pointLight1.position.copy(sceneDescription.pointLight1Position);

    pointLight2.intensity = sceneDescription.pointLight2Intensity;
    pointLight2.position.copy(sceneDescription.pointLight2Position);

    controls.update();
  }

  return {
    renderScene,
    redrawScene,
    updateCameraProjection,
    setCameraAndLights
  };
}

export {initRenderer};
