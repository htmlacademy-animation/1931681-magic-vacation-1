import * as THREE from 'three';

// import vertexShader from '../shaders/vertexShader.vert';
// import fragmentShader from '../shaders/fragmentShader.frag';

// import { loadTexture } from './misc';

async function titleScreen() {
    const group = new THREE.Group();

    // const texture = await loadTexture('img/exercises/chapter5/title-screen.png');

    const geometry = new THREE.SphereGeometry(200);
    const material = new THREE.MeshStandardMaterial({
        color: 0xB827B0,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
    
    // var geometry = new THREE.PlaneGeometry(2, 2);
    // var material = new THREE.RawShaderMaterial({
    //     uniforms: {
    //         map: { type: 't', value: texture }
    //     },
    //     vertexShader,
    //     fragmentShader
    // });
    
    var sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    return function renderScreen() {
        return group;
    };
}

export { titleScreen }; 
