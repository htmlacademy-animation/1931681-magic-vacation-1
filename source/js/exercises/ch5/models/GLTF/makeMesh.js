function GLTF(geometry, castShadow = false, receiveShadow = false) {
  const destGeometry = geometry.clone();

  destGeometry.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = castShadow;
      child.receiveShadow = receiveShadow;
    }
  });

  return destGeometry;
}

export {GLTF};
