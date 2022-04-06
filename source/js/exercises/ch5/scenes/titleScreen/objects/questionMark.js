import * as THREE from "three";

import {BlueColor} from "../../../library/colors";
import {makeBasicMaterial} from "../../../library/materials/basic";
import {
  QUESTION_MARK_ID,
  makeSVGExtrudeGeometry
} from "../../../svg/misc";

const RAD_FACTOR = Math.PI / 180;

function makeQuestionMark() {
  const geometry = makeSVGExtrudeGeometry(QUESTION_MARK_ID);
  const material = makeBasicMaterial(BlueColor);

  const questionMark = new THREE.Mesh(geometry, material);

  questionMark.scale.set(0.11, 0.11, 0.11);
  questionMark.position.set(10, -25, 1);
  questionMark.rotateZ(25 * RAD_FACTOR);
  questionMark.rotateX(105 * RAD_FACTOR);

  return questionMark;
}

export {makeQuestionMark};
