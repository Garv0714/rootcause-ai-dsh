import { electronicsCases } from "./electronicsCases";
import { physicsCases } from "./physicsCases";
import { chemistryCases } from "./chemistryCases";
import { roboticsCases } from "./roboticsCases";

export const caseLibrary = {
  electronics: electronicsCases,
  physics: physicsCases,
  chemistry: chemistryCases,
  robotics: roboticsCases,
} as const;

export const allCases = [
  ...electronicsCases,
  ...physicsCases,
  ...chemistryCases,
  ...roboticsCases,
];

export const categories = [
  {
    id: "electronics",
    title: "Electronics",
    description:
      "Investigate circuits, batteries, sensors, and embedded systems.",
    totalCases: electronicsCases.length,
  },
  {
    id: "physics",
    title: "Physics",
    description:
      "Analyze forces, motion, energy, and engineering failures.",
    totalCases: physicsCases.length,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description:
      "Investigate reactions, materials, contamination, and lab incidents.",
    totalCases: chemistryCases.length,
  },
  {
    id: "robotics",
    title: "Robotics",
    description:
      "Diagnose robot behavior, control systems, and sensor failures.",
    totalCases: roboticsCases.length,
  },
];

export function getCaseById(id: string) {
  return allCases.find(
    (item) => item.id === id
  );
}

export function getCasesByCategory(
  category:
    | "electronics"
    | "physics"
    | "chemistry"
    | "robotics"
) {
  return caseLibrary[category];
}

export function getFeaturedCases() {
  return allCases.slice(0, 4);
}