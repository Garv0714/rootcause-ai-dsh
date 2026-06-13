import type { Case } from "@/types/case";

export const chemistryCases: Case[] = [
  {
    id: "chemical-reactor-failure",

    title: "Chemical Reactor Failure",

    category: "chemistry",

    difficulty: "Advanced",

    description:
      "A chemical reactor experienced a sudden pressure spike leading to emergency shutdown.",

    estimatedTime: "20 min",

    image: "/cases/reactor/diagram.png",

    evidence: [
      "Pressure increased rapidly.",
      "Temperature spike detected.",
      "Safety valve responded late.",
      "Gas leakage reported.",
    ],

    timeline: [
      "Reaction started",
      "Temperature increased",
      "Pressure built up",
      "Valve delay observed",
      "Emergency shutdown activated",
    ],

    rootCauseNodes: [
      "Temperature Rise",
      "Pressure Build-Up",
      "Valve Delay",
      "Reactor Failure",
    ],
  },
];