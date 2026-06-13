import type { Case } from "@/types/case";

export const roboticsCases: Case[] = [
  {
    id: "robot-arm-malfunction",

    title: "Robot Arm Malfunction",

    category: "robotics",

    difficulty: "Intermediate",

    description:
      "An industrial robot arm suddenly stopped during an assembly operation.",

    estimatedTime: "15 min",

    image: "/cases/robot-arm/diagram.png",

    evidence: [
      "Joint temperature reached 85°C.",
      "Servo motor jitter detected.",
      "Power spikes recorded.",
      "Robot arm became unresponsive.",
    ],

    timeline: [
      "Assembly operation started",
      "Joint temperature increased",
      "Servo instability detected",
      "Power spikes occurred",
      "Robot arm stopped",
    ],

    rootCauseNodes: [
      "Joint Overheating",
      "Servo Instability",
      "Power Disruption",
      "Robot Shutdown",
    ],
  },
];