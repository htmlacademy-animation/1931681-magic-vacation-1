function OBJ(geometry, material, castShadow = false, receiveShadow = false) {
  const destGeometry = geometry.clone();

  destGeometry.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.castShadow = castShadow;
      child.receiveShadow = receiveShadow;
    }
  });

  return destGeometry;
}

export {OBJ};
