import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function initRenderer() {
    const canvasContainer = document.getElementById('threeJSCanvasContainer');

    const scene = new THREE.Scene();

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.84);
    directionalLight.target.position.set(1, 0, 0);

    const pointLight1 = new THREE.PointLight(0xF6F2FF, 0.6, 975, 2);
    // pointLight1.position.set(-785, -350, -710);
    pointLight1.position.set(-78, -35, 200);

    const pointLight2 = new THREE.PointLight(0xF5FEFF, 0.95, 975, 2);
    // pointLight2.position.set(730, 800, -985);
    pointLight2.position.set(73, 80, 200);

    const sphereSize = 10;
    const pointLight1Helper = new THREE.PointLightHelper( pointLight1, sphereSize );
    const pointLight2Helper = new THREE.PointLightHelper( pointLight2, sphereSize );

    const lightGroup = new THREE.Group();
    lightGroup.add(directionalLight);
    lightGroup.add(pointLight1);
    lightGroup.add(pointLight2);

    lightGroup.add(pointLight1Helper);
    lightGroup.add(pointLight2Helper);
    scene.add(lightGroup);

    // const camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1500
    );
    camera.position.z = 750;

    const axesHelper = new THREE.AxesHelper(1500);

    const renderer = new THREE.WebGLRenderer({
        alpha: true
    });
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
        while(scene.children.length > 0){ 
            scene.remove(scene.children[0]); 
        }

        scene.add(lightGroup);
        scene.add(axesHelper);
        scene.add(object);
    }

    return {
        renderScene,
        redrawScene,
        updateCameraProjection
    };
}

export { initRenderer };

