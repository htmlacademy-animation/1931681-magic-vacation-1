import * as THREE from 'three';

import { objects as objectsDescriptors } from './objects/objects';

function makeRenderedObjects(scene, object) {
    const animated = !!object.animations;

    let isAnimationPlaying = false;
    let animationStart;
    let renderCallback;

    var geometry = new THREE.PlaneGeometry(2, 2);
    var material = new THREE.RawShaderMaterial({
        uniforms: {
            map: { type: 't', value: object.texture },
            opacity: { type: 'float', value: 0.5 },
            bubblePosition: { type: 'vec2', value: [ 0, 0 ] },
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

    function animationTick() {
        const time = Date.now() - animationStart;

        object.animations.forEach(animation => {
            material.uniforms[animation.id].value = animation.getValue(time);
        });

        renderCallback();

        if (isAnimationPlaying) {
            window.requestAnimationFrame(() => animationTick());
        }
    }

    if (object.animations) {
        window.animationTick = animationTick;
        window.changeOpacity = changeOpacity;
    }
    

    function startAnimation(renderC) {
        if (animated) {
            animationStart = Date.now();
            isAnimationPlaying = true;
            renderCallback = renderC;
            animationTick();
        }
    }

    function stopAnimation() {
        if (animated) {
            isAnimationPlaying = false;
        }
    }

    return {
        changeOpacity,
        startAnimation, stopAnimation
    };
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
            const renderedObject = renderedObjects[object];

            if (object === visibleObject) {
                renderedObject.changeOpacity(1);
                renderedObject.startAnimation(() => renderer.render(scene, camera));
            } else {
                renderedObject.changeOpacity(0);
                renderedObject.stopAnimation();
            }
        });

        renderer.render(scene, camera);
    }

    return render;
}

export { initScene };

