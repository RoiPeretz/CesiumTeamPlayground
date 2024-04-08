import { PolygonHierarchy, Cartesian3, Math as CesiumMath } from "cesium";

// Function to generate points for the doughnut shape
function generateDoughnutPoints(
  center: Cartesian3,
  innerRadius: number,
  outerRadius: number,
  points: number
) {
  const shape = [];
  for (let i = 0; i < points; i++) {
    const angle = (CesiumMath.TWO_PI * i) / points;
    const xOuter = center.x + outerRadius * Math.cos(angle);
    const yOuter = center.y + outerRadius * Math.sin(angle);
    shape.push(new Cartesian3(xOuter, yOuter, center.z));
  }

  const hole = [];
  for (let i = 0; i < points; i++) {
    const angle = (CesiumMath.TWO_PI * i) / points;
    const xInner = center.x + innerRadius * Math.cos(angle);
    const yInner = center.y + innerRadius * Math.sin(angle);
    hole.push(new Cartesian3(xInner, yInner, center.z));
  }

  return new PolygonHierarchy(shape, [new PolygonHierarchy(hole)]);
}

// Doughnut parameters
const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
const innerRadius = 2000.0; // meters
const outerRadius = 3000.0; // meters
const points = 1000; // Increase for smoother edges

// Generate doughnut shape and add it as an entity
export const doughnut2D = generateDoughnutPoints(
  center,
  innerRadius,
  outerRadius,
  points
);
