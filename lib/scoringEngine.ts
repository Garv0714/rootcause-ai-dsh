export interface ScoreBreakdown {
  evidenceUsage: number;
  engineeringLogic: number;
  rootCauseAccuracy: number;
}

export function calculateScoreBreakdown(
  score: number
): ScoreBreakdown {

  return {
    evidenceUsage: Math.min(
      100,
      score + 10
    ),

    engineeringLogic: Math.min(
      100,
      score + 5
    ),

    rootCauseAccuracy: score,
  };
}