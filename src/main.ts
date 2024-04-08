import { Viewer, Terrain, Color } from "cesium";
import "./style.css";
import { doughnut2D } from "./doughnut/doughnut2d";
import { packman2d } from "./packman/pakman2d";

const viewer: Viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

viewer.entities.add({
  name: "Doughnut2d",
  polygon: {
    hierarchy: doughnut2D,
    material: Color.ORANGE.withAlpha(0.5),
  },
});

// Create the entity with the Pac-Man shape
viewer.entities.add({
  name: "Pac-Man",
  polygon: {
    hierarchy: packman2d,
    material: Color.YELLOW,
  },
});

viewer.zoomTo(viewer.entities);
