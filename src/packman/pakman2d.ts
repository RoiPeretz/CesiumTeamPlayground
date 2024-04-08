import { Cartesian3, PolygonHierarchy, Math as CesiumMath } from "cesium";

// Function to generate Pac-Man shape
function generatePacManShape(
  center: Cartesian3,
  radius: number,
  openingAngleDegrees: number
) {
  const numberOfPoints = 100;
  const angleStep =
    (Math.PI * 2 - CesiumMath.toRadians(openingAngleDegrees)) / numberOfPoints;
  const pacManShape = [];

  // Add the center point for the mouth of Pac-Man
  pacManShape.push(center);

  // Generate the circle points, skipping the portion for the mouth
  for (let i = 0; i <= numberOfPoints; i++) {
    const angle = angleStep * i + CesiumMath.toRadians(openingAngleDegrees / 2);
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);
    const point = Cartesian3.fromElements(
      center.x + offsetX,
      center.y + offsetY,
      center.z
    );
    pacManShape.push(point);
  }

  // Close the shape by adding the center point again
  pacManShape.push(center);

  return pacManShape;
}

// Center point for the Pac-Man shape
const centerPoint = Cartesian3.fromDegrees(-75.65, 40.03883);

// Generate the Pac-Man shape
const pacManShape = generatePacManShape(centerPoint, 1000, 45); // Radius and opening angle of mouth in degrees

export const packman2d = new PolygonHierarchy(pacManShape);
