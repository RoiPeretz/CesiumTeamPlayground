import { Entity, Cartesian3, Color } from "cesium";

// Create a yellow sphere to represent Pac-Man
export const pacMan3d = new Entity({
  name: "pacMan3d",
  position: Cartesian3.fromDegrees(-75.8, 40.03883, 100000),
  ellipsoid: {
    radii: new Cartesian3(100000.0, 100000.0, 100000.0),
    material: Color.YELLOW,
  },
});
