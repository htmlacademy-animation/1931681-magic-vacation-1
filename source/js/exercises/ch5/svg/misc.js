import * as THREE from "three";

const FLAMINGO_ID = `flamingo`;
const FLOWER_ID = `flower`;
const KEYHOLE_ID = `keyhole`;
const LEAF_ID = `leaf`;
const QUESTION_MARK_ID = `questionMark`;
const SNOWFLAKE_ID = `snowflake`;

const AllSvgObjects = [
  FLAMINGO_ID, FLOWER_ID, KEYHOLE_ID, LEAF_ID, QUESTION_MARK_ID, SNOWFLAKE_ID
];

const BASE_EXTRUDE_SETTINGS = {
  steps: 2,
  depth: 6,
  bevelEnabled: true,
  bevelThickness: 1,
  bevelSize: 1,
  bevelSegments: 2
};

const SVGObjectsPool = {
  [FLAMINGO_ID]: {
    shapePaths: null,
    extrudeSettrings: {
      ...BASE_EXTRUDE_SETTINGS,
      depth: 1
    }
  },
  [FLOWER_ID]: {
    shapePaths: null,
    extrudeSettrings: {
      ...BASE_EXTRUDE_SETTINGS,
      depth: 1
    }
  },
  [KEYHOLE_ID]: {
    shapePaths: null,
    extrudeSettrings: {
      ...BASE_EXTRUDE_SETTINGS,
      depth: 25
    }
  },
  [LEAF_ID]: {
    shapePaths: null,
    extrudeSettrings: {
      ...BASE_EXTRUDE_SETTINGS,
      depth: 10
    }
  },
  [QUESTION_MARK_ID]: {
    shapePaths: null,
    extrudeSettrings: {...BASE_EXTRUDE_SETTINGS}
  },
  [SNOWFLAKE_ID]: {
    shapePaths: null,
    extrudeSettrings: {
      ...BASE_EXTRUDE_SETTINGS,
      depth: 15
    }
  }
};

const SVGObjectsDescriptors = {
  [FLAMINGO_ID]: `img/module-6/svg-forms/flamingo.svg`,
  [FLOWER_ID]: `img/module-6/svg-forms/flower.svg`,
  [KEYHOLE_ID]: `img/module-6/svg-forms/keyhole.svg`,
  [LEAF_ID]: `img/module-6/svg-forms/leaf.svg`,
  [QUESTION_MARK_ID]: `img/module-6/svg-forms/question.svg`,
  [SNOWFLAKE_ID]: `img/module-6/svg-forms/snowflake.svg`
};

function setSVGPoolShapePath(key, value) {
  SVGObjectsPool[key].shapePaths = value;
}

function makeSVGExtrudeGeometry(svgId, extrudeSettrings = {}) {
  return new THREE.ExtrudeGeometry(
      SVGObjectsPool[svgId].shapePaths,
      {
        ...SVGObjectsPool[svgId].extrudeSettrings,
        ...extrudeSettrings
      }
  );
}

function makeSVGShapeGeometry(svgId) {
  return new THREE.ShapeGeometry(SVGObjectsPool[svgId].shapePaths);
}

export {
  AllSvgObjects,
  FLAMINGO_ID, FLOWER_ID, KEYHOLE_ID, LEAF_ID, QUESTION_MARK_ID, SNOWFLAKE_ID,
  SVGObjectsPool, SVGObjectsDescriptors,
  setSVGPoolShapePath, makeSVGExtrudeGeometry, makeSVGShapeGeometry
};
