export interface Case {
  id: string;

  title: string;

  category:
    | "electronics"
    | "physics"
    | "robotics"
    | "chemistry";

  difficulty:
    | "Beginner"
    | "Intermediate"
    | "Advanced";

  description: string;

  estimatedTime: string;

  image: string;

  evidence: string[];

  timeline: string[];

  rootCauseNodes: string[];
}