import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const OBJLoaderInstance = new OBJLoader();

async function OBJ(path) {
  return new Promise((resolve) => {
    OBJLoaderInstance.load(
        path,
        (object) => resolve(object)
    );
  });
}

export {OBJ};
