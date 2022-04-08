import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const GLTFLoaderInstance = new GLTFLoader();

async function GLTF(path) {
  return new Promise((resolve) => {
    GLTFLoaderInstance.load(
        path,
        (object) => resolve(object.scene)
    );
  });
}

export {GLTF};
