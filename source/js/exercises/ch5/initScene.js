import * as THREE from 'three';

import { objects as objectsDescriptors } from './objects/objects';

function makeRenderedObjects(scene, object) {
    var geometry = new THREE.PlaneGeometry(2, 2);
    var material = new THREE.RawShaderMaterial({
        uniforms: {
            map: { type: 't', value: object.texture },
            opacity: { type: 'float', value: 0.5 },
            ...object.uniforms
        },
        vertexShader: object.vertexShader,
        fragmentShader: object.fragmentShader,
        blending: THREE.NormalBlending,
        depthTest: false,
        transparent: true
    });
    var plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    function changeOpacity(opacity) {
        material.uniforms.opacity.value = opacity;
    }

    return { changeOpacity };
}

function initScene(objects) {
    const canvasContainer = document.getElementById('threeJSCanvasContainer');

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setClearColor(new THREE.Color(0x5f458c), 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    const renderedObjects = objectsDescriptors.reduce((acc, object) => ({
        ...acc,
        [object.id]: makeRenderedObjects(scene, objects[object.id])
    }), {});

    function render(visibleObject) {
        Object.keys(renderedObjects).forEach(object => {
            if (object === visibleObject) {
                renderedObjects[object].changeOpacity(1);
            } else {
                renderedObjects[object].changeOpacity(0);
            }
        });

        renderer.render(scene, camera);
    }

    return render;
}

export { initScene };

