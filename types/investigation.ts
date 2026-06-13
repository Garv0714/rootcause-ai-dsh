export interface Investigation {
  caseId: string;

  hypothesis: string;

  reasoningScore: number;

  evidenceScore: number;

  logicScore: number;

  feedback: string;
}