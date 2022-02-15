import * as THREE from 'three';

import { objects as objectsDescriptors } from './objects/objects';

function makeRenderedObjects(scene, object) {
    var geometry = new THREE.PlaneGeometry(2, 2);
    var material = new THREE.MeshBasicMaterial({
        map: object.texture,
        opacity: 1,
        transparent: true
    });
    var plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    function changeOpacity(opacity) {
        material.opacity = opacity;
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

