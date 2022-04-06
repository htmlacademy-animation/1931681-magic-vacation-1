import * as THREE from "three";

import {GreenColor} from "../../../library/colors";
import {makeBasicMaterial} from "../../../library/materials/basic";
import {
  LEAF_ID,
  makeSVGExtrudeGeometry
} from "../../../svg/misc";

const RAD_FACTOR = Math.PI / 180;

function makeBigLeaf() {
  const geometry = makeSVGExtrudeGeometry(LEAF_ID, {depth: 1});
  const material = makeBasicMaterial(GreenColor);

  const bigLeaf = new THREE.Mesh(geometry, material);

  bigLeaf.scale.set(0.15, 0.17, 0.15);
  bigLeaf.position.set(6, 20, 24);
  bigLeaf.rotateZ(180 * RAD_FACTOR);
  bigLeaf.rotateY(-270 * RAD_FACTOR);

  return bigLeaf;
}

export {makeBigLeaf};
