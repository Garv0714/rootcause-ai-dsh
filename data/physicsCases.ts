import type { Case } from "@/types/case";

export const physicsCases: Case[] = [
  {
    id: "satellite-comms-loss",

    title: "Satellite Communication Loss",

    category: "physics",

    difficulty: "Intermediate",

    description:
      "A satellite suddenly lost communication with the ground station.",

    estimatedTime: "15 min",

    image: "/cases/satellite/diagram.png",

    evidence: [
      "Signal attenuation increased.",
      "Power fluctuations detected.",
      "Antenna alignment drift observed.",
      "Packet loss increased rapidly.",
    ],

    timeline: [
      "Normal communication established",
      "Signal weakened",
      "Alignment drift detected",
      "Packet loss increased",
      "Communication lost",
    ],

    rootCauseNodes: [
      "Alignment Drift",
      "Signal Weakening",
      "Packet Loss",
      "Communication Failure",
    ],
  },
];