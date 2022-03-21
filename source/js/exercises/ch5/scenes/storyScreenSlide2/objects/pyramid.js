import * as THREE from 'three';

function makePyramid() {
    const geometry = new THREE.ConeGeometry(90 * Math.sqrt(2), 200, 4);
    const material = new THREE.MeshStandardMaterial({
        color: 0x1D69DE,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
    
    var pyramid = new THREE.Mesh(geometry, material);
    pyramid.scale.set(0.5, 0.5, 0.5);
    pyramid.position.set(0, -30, 50);
    

    return pyramid;
}

export { makePyramid };
