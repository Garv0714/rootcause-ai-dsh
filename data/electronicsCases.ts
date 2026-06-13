import type { Case } from "../types/case";

export const electronicsCases: Case[] = [
  {
    id: "drone-failure",

    title: "Drone Failure Investigation",

    category: "electronics",

    difficulty: "Intermediate",

    description:
      "A delivery drone suddenly lost power during flight and crashed into a restricted zone.",

    estimatedTime: "15 min",

    image:
      "/cases/drone-failure/diagram.png",

    evidence: [
      "Drone suddenly lost altitude.",
      "Battery temperature reached 92°C.",
      "Motor 3 stopped responding.",
      "Flight logs show voltage fluctuations.",
    ],

    timeline: [
      "Drone takeoff successful",
      "Battery temperature increased",
      "Motor 3 failure detected",
      "Voltage instability observed",
      "Drone lost altitude",
      "Crash occurred",
    ],

    rootCauseNodes: [
      "Battery Overheating",
      "Voltage Instability",
      "Motor Failure",
      "Drone Crash",
    ],
  },
];