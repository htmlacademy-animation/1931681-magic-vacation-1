import * as THREE from 'three';

import {
    DominantRedColor, BrightPurpleColor,
    ShadowedDominantRedColor, ShadowedBrightPurpleColor
} from '../colors';
import { makeSoftMaterial } from '../materials/soft';

const Theme = {
    Regular: 'Regular',
    Dark: 'Dark'
}

const RAD_FACTOR = Math.PI / 180;

function makeMaterials(theme) {
    let sphereColor;
    let ringColor;

    switch(theme) {
        case Theme.Dark:
            sphereColor = ShadowedDominantRedColor;
            ringColor = ShadowedBrightPurpleColor;
            break;
        default:
        case Theme.Regular:
            sphereColor = DominantRedColor;
            ringColor = BrightPurpleColor;
            break;
    }

    return [
        makeSoftMaterial(sphereColor),
        makeSoftMaterial(ringColor)
    ];
}

function makeSphere(material) {
    const geometry = new THREE.SphereGeometry(60, 25, 25);

    const sphere = new THREE.Mesh(geometry, material);

    return sphere;
}

function makeRing(material) {
    var points = [
        new THREE.Vector2(80, 34),
        new THREE.Vector2(80, 30),
        new THREE.Vector2(120, 30),
        new THREE.Vector2(120, 34),
        new THREE.Vector2(80, 34)
    ];

    const geometry = new THREE.LatheGeometry(
        points,
        35,
        0,
        360 * RAD_FACTOR
    );

    const ring = new THREE.Mesh(geometry, material);
    
    ring.position.set(0, -33, 0);
    ring.rotateZ(18 * RAD_FACTOR);

    return ring;
}

function makeSaturn(theme = Theme.Regular) {
    const [ sphereMaterial, ringMaterial ] = makeMaterials(theme);

    const saturn = new THREE.Group();

    saturn.add(makeSphere(sphereMaterial));
    saturn.add(makeRing(ringMaterial));

    saturn.scale.set(0.3, 0.3, 0.3);

    return saturn;

}

export {
    Theme,
    makeSaturn
};
