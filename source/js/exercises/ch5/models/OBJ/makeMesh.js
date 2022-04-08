function OBJ(geometry, material) {
  const destGeometry = geometry.clone();

  destGeometry.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return destGeometry;
}

export {OBJ};
